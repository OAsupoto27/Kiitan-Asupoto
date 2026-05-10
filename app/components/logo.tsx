import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#3525cd">
          <path d="M3.5 18.5l4-8 4 6 2.5-4 3.5 6H3.5zM12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3zm0-2C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z"/>
        </svg>
      </span>
      <span className="text-2xl font-extrabold tracking-tighter">Pulse</span>
    </Link>
  );
}