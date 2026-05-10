"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [role, setRole] = useState<"attendee" | "organizer">("attendee");

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full">

      {/* ── Left: Brand / Hero Section ── */}
      <section className="relative w-full lg:w-1/2 min-h-[353px] lg:min-h-screen flex flex-col overflow-hidden">
        {/* Background image + indigo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="vibrant tech conference crowd"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHiEynWjcOEZDbDvie7ocMgu037_M_lcWXMTZh3x4YD0RzfrbIlVzYMnulFAkbFusewvj76Cc_rMMESwCiXNSOF03jH1oSw3hk8oaYEtOLppP3_V5tSzedjJQaXy_sK9SvAvqJbXZmk4A14MHHaPcnX4Zr6gCxSzm0JfDLtEPpYJ-cLk2ltUaHqA1EKbu022KVh71cdI9lfV861O7ToI4VM91PacoOhBdG_5PJNP2IU_7N4xZ-7qZa5wqsQ_Wu0O_gJFRbJ20ty0"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(53,37,205,0.88)", mixBlendMode: "multiply" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top right, #3525cd, rgba(79,70,229,0.7), transparent)" }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col h-full px-8 py-10 lg:px-14 lg:min-h-screen">
          {/* Logo — pinned to top */}
          <div className="inline-flex items-center gap-2">
            <span
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl"
              style={{ color: "#3525cd" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3.5 18.5l4-8 4 6 2.5-4 3.5 6H3.5zM12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3zm0-2C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z"/>
</svg>
            </span>
            <span className="font-extrabold text-2xl text-white tracking-tight">
              Explore Pulse 
            </span>
          </div>

          {/* Quote + avatars — vertically centered in remaining space */}
          <div className="flex flex-col justify-center flex-1 max-w-md">
            <h2 className="font-bold text-3xl lg:text-5xl text-white leading-tight mb-8 tracking-tight">
              &quot;Connecting people through experiences that matter.&quot;
            </h2>

            <div className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              <div className="flex -space-x-3">
                {[
                  "AB6AXuBB-fcGPSxntu3J16lSn8HmSyFo0UUYGUwxS_3QFJQQ2EdCdx5sy69UUJ5iTaHV_isbhZMDU3-5nhiVZRKKUVcL5QrsiTbeoPIA0PvBe64BPK7cY6qLW_nxZm1TvdDzGaqFLUA3rnA09zZJl9SGJJ1J0cOCRzRAhhVY_jxpQsVqMP_L-UOEIs_7ztX5JJtahxKO2T31MqtFz-Flhag9M04Jbf7188o6IwNFWp7_qKQLD991lDl1Y1Gh8xcVqmPSePYUDlonDMpU43g",
                  "AB6AXuCMHpQRirzQZN3tAHXvFypGptmicUhtvwYzOcnlfSiuxT8V4jz2xRzO8jERPOvMb7m7SHX4JMUMJERmTGy5ZUgSwMymkphEHX6VGHR70MLiUV5IYdgdBvuYeTHTe8IGw6JTKSzIWqC3_iFOKUSM6L5hO4Sky9Lktp_B-Ffhf6DqGojtq2bPG1EY0cRhPFNXfMCTNfnNidkW08QX3rZUQHXjPc7pJt9ZVWq04bw6S9npXmPNVVXTDQo1AUL-UFth5bDohDUBfiq0tC0",
                  "AB6AXuD_IUVUG5GUURDcogJQbH35Pq9B5VlC0a7CxJSEmEdIUhlZtwOmL3f7rp1U2_rv9-4O6K5jMqDH3pO559TmLvLg9pZ5gZ3wSIcB9E0E5I2HMQEHj7Po3miz5EJIFanNAGGNEJOc5qkk8NC7IAGJWcU75AMHroADoYke718e4oSveOXpY-2ID5YXztICw2ap9x2_G0uiHQbsemTRODbkUf8sSkLQGw2avA7QgvPs4Of27sZ0OMl6dH9tycK9EVeVWul4NxpmQeWKMao",
                ].map((id, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 overflow-hidden"
                    style={{ borderColor: "#3525cd", backgroundColor: "#eceef0" }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`https://lh3.googleusercontent.com/aida-public/${id}`}
                      alt="community member"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium tracking-wide">Join 15,000+ discovery seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Right: Form Section ── */}
      <section
        className="w-full lg:w-1/2 px-8 py-12 lg:px-24 flex flex-col justify-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-md w-full mx-auto">
          <header className="mb-10 text-center lg:text-left">
            <h1 className="font-extrabold text-3xl mb-2 tracking-tight" style={{ color: "#191c1e" }}>
              Create your account
            </h1>
            <p className="text-lg" style={{ color: "#464555" }}>
              Experience the next generation of event discovery.
            </p>
          </header>

          {/* Role toggle */}
          <div className="p-1.5 rounded-xl flex items-center mb-8" style={{ backgroundColor: "#f2f4f6" }}>
            <button
              onClick={() => setRole("attendee")}
              className="flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all active:scale-[0.98]"
              style={
                role === "attendee"
                  ? { backgroundColor: "#3525cd", color: "#fff", boxShadow: "0 4px 14px rgba(53,37,205,0.25)" }
                  : { color: "#464555", backgroundColor: "transparent" }
              }
            >
              I&apos;m an Attendee
            </button>
            <button
              onClick={() => setRole("organizer")}
              className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all active:scale-[0.98]"
              style={
                role === "organizer"
                  ? { backgroundColor: "#3525cd", color: "#fff", boxShadow: "0 4px 14px rgba(53,37,205,0.25)" }
                  : { color: "#464555", backgroundColor: "transparent" }
              }
            >
              I&apos;m an Organizer
            </button>
          </div>

          {/* Form fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold ml-1" htmlFor="full_name" style={{ color: "#191c1e" }}>
                Full Name
              </label>
              <input
                className="w-full rounded-xl py-4 px-5 outline-none transition-all"
                style={{ backgroundColor: "#f2f4f6", color: "#191c1e", border: "none" }}
                id="full_name"
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold ml-1" htmlFor="email" style={{ color: "#191c1e" }}>
                Email Address
              </label>
              <input
                className="w-full rounded-xl py-4 px-5 outline-none transition-all"
                style={{ backgroundColor: "#f2f4f6", color: "#191c1e", border: "none" }}
                id="email"
                placeholder="john@example.com"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold ml-1" htmlFor="password" style={{ color: "#191c1e" }}>
                Password
              </label>
              <input
                className="w-full rounded-xl py-4 px-5 outline-none transition-all"
                style={{ backgroundColor: "#f2f4f6", color: "#191c1e", border: "none" }}
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>

            {/* Org name — only active for organizer */}
            <div
              className="space-y-2 transition-all duration-300"
              style={{
                opacity: role === "organizer" ? 1 : 0.45,
                pointerEvents: role === "organizer" ? "auto" : "none",
              }}
            >
              <label className="block text-sm font-semibold ml-1" htmlFor="org_name" style={{ color: "#191c1e" }}>
                Organization Name{" "}
                <span className="text-xs font-normal" style={{ color: "#46455580" }}>
                  (Optional)
                </span>
              </label>
              <input
                className="w-full rounded-xl py-4 px-5 outline-none transition-all"
                style={{ backgroundColor: "#f2f4f6", color: "#191c1e", border: "none" }}
                id="org_name"
                placeholder="Your Agency or Brand"
                type="text"
              />
            </div>

            <button
              className="w-full py-4 text-white font-bold text-lg rounded-xl transition-all active:scale-[0.98] mt-4"
              style={{
                background: "linear-gradient(to right, #3525cd, #4f46e5)",
                boxShadow: "0 12px 32px rgba(53,37,205,0.25)",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-center">
            <p style={{ color: "#464555" }}>
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold hover:underline ml-1 underline-offset-4 decoration-2"
                style={{ color: "#3525cd" }}
              >
                Log in
              </Link>
            </p>

            <div className="mt-8 flex items-center justify-center gap-8">
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: "#eceef0" }} />
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "#464555" }}>
                Or continue with
              </span>
              <div className="h-px flex-grow max-w-[60px]" style={{ backgroundColor: "#eceef0" }} />
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <button
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all active:scale-95 hover:brightness-95"
                style={{ backgroundColor: "#f2f4f6", color: "#464555" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.90 3.15-1.91 4.15-1.16 1.16-2.99 2.4-5.93 2.4-4.74 0-8.52-3.83-8.52-8.57s3.78-8.57 8.52-8.57c2.56 0 4.43.99 5.81 2.31l2.31-2.31C18.42 1.41 15.81 0 12.48 0 5.86 0 .3 5.38.3 12s5.56 12 12.18 12c3.58 0 6.29-1.17 8.4-3.37 2.16-2.16 2.84-5.21 2.84-7.67 0-.74-.06-1.44-.17-2.04h-11.09z" />
                </svg>
              </button>
              <button
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all active:scale-95 hover:brightness-95"
                style={{ backgroundColor: "#f2f4f6", color: "#464555" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}