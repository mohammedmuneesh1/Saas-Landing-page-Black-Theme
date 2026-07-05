import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 px-6">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]" />

      {/* Decorative Circles */}
      <div className="absolute -left-32 top-20 h-64 w-64 rounded-full border border-lime-400/10" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-lime-400/10" />

      <div className="relative z-10 max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
          Error 404
        </span>

        <h1 className="mt-8 text-7xl font-bold tracking-tight text-white md:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or the URL
          decided to take a vacation. Computers are wonderfully literal about
          these things.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
          >
            Back to Home
            <HiArrowRight className="text-lg" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/10 px-7 py-3 font-medium text-white transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none text-[220px] font-black leading-none text-white/[0.03] md:text-[320px]">
        404
      </div>
    </main>
  );
}