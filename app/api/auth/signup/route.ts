// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

const prisma = new PrismaClient();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// THIS EXPORT KEYWORD IS CRITICAL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, fullName, role, organizationName } = body;

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;

    const newUser = await prisma.user.create({
      data: {
        id: authData.user?.id as string, 
        email,
        fullName,
        role,
        organizationName: organizationName || null,
      },
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}