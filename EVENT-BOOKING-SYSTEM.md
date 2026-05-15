# **EVENT BOOKING SYSTEM**





Technology Stack \& Architecture

This application utilizes a modern "Full-Stack Next.js" architecture. Instead of maintaining separate repositories for the frontend and backend, we use a unified monorepo where the user interface and the server-side API routes live within the same framework.

1\. Core Language: TypeScript

• What it is: A strongly typed superset of JavaScript.

• Why we used it: It catches errors before the code even runs by enforcing data types (like ensuring an event always has a date and title). It provides excellent autocomplete in our code editors, which makes team collaboration much smoother and significantly reduces bugs.

2\. Frontend \& Backend Framework: Next.js (App Router)

• What it is: A full-stack React framework created by Vercel.

• Why we used it: \* Frontend: It provides powerful React features like Server Components, making the user interface incredibly fast and SEO-friendly.

• Backend: It allows us to build our backend API directly inside the app/api/ folder using "Route Handlers."

• Overall: By combining both into one framework, we completely eliminated CORS (Cross-Origin Resource Sharing) errors, streamlined our file structure, and cut our deployment time in half.

3\. Database: Supabase (PostgreSQL)

• What it is: A cloud-based, serverless PostgreSQL database.

• Why we used it: PostgreSQL is the industry standard for relational data (perfect for linking Users to the Events they book). Supabase provides a highly scalable, easy-to-manage cloud instance of Postgres with built-in connection pooling, meaning our database won't crash if multiple people try to book tickets at the exact same time.

4\. Authentication: Supabase Auth

• What it is: A complete identity and user management system built into Supabase.

• Why we used it: Writing custom security cryptography (like bcrypt hashing and JWT generation) from scratch is time-consuming and risky. Supabase Auth securely handles user registration, password encryption, and session tokens out-of-the-box, allowing us to implement secure Organizer and Attendee logins rapidly.

5\. ORM (Database Client): Prisma

• What it is: An Object-Relational Mapper (ORM) that acts as a translator between our TypeScript code and our PostgreSQL database.

• Why we used it: Instead of writing raw, error-prone SQL strings, Prisma allows us to interact with the database using simple JavaScript methods (e.g., prisma.user.create()). It automatically generates our database tables based on our schema.prisma file and provides strict type-safety, ensuring our backend API never sends the wrong data format to the database.

6\. Deployment (Planned): Vercel

• What it is: A cloud platform specifically optimized for hosting Next.js applications.

• Why we used it: Vercel requires zero configuration for Next.js apps. Because our entire full-stack application is flattened into a single directory, Vercel will automatically build the frontend, deploy the serverless backend API routes, and host the live project seamlessly.



