import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <Link href="/" className="mb-2">
          <span className="text-2xl font-extrabold text-[#3525cd] tracking-tighter">
            Pulse
          </span>
        </Link>

        <p className="text-slate-500 text-sm">
          © 2026 Pulse Discovery. All rights reserved.
        </p>

      </div>
    </footer>
  );
}