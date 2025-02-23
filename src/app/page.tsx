import Link from "next/link";

export default function Home() {
  return (
    <main className="relative px-6 pt-32">
    <div className="mx-auto max-w-5xl">
    <div className="flex flex-col items-center text-center">
    <div className="inline-flex h-9 items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 text-sm text-purple-400">
        Gender-Based Violence Reporting
      </div>

    <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
    Your Voice Matters,
    <span className="block bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
      Your Identity Stays Protected.
      </span>
    </h1>
      <p className="mt-8 text-zinc-400 text-center text-xl">
      A secure and anonymous platform for reporting gender-based violence, empowering survivors to speak up safely and access support without fear.
      </p>

      <div className="mt-10 flex flex-row gap-4 justify-center">
        <Link href={"submit-report"}>
        <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-purple-500 px-8 text-sm font-medium text-white transition-all hover:bg-purple-400">
            Make an anonymous report
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
          </Link>

        <Link href={"resources"}>
          <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
            Learn more about gender-based violence
          </button>
        </Link>
      </div>
      </div>
    </div>
  </main>
  )

}