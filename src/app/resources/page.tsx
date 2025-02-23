import Link from "next/link";

export default function Resources() {
    return (
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>
        <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              <span className="block bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
                What is gender-based violence (GBV)?
              </span>
          </h1>
          <p className="mt-8 text-white text-center text-xl">
          Gender-based violence (GBV) refers to harmful actions directed at individuals based on their gender. It includes physical, emotional, sexual, psychological, and financial abuse, often rooted in power imbalances and societal norms. GBV can happen to anyone but disproportionately affects women, girls, and marginalized communities.
        </p>
    
        <h1 className="mt-20 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              <span className="block mt-4 bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
              Signs of Gender-Based Violence
              </span>
          </h1>
          <p className="mt-8 text-white text-center text-xl">
          If you recognize any of these signs in your situation or someone else's, know that you are not alone. 
          </p>
          </div>
    
        <div className="mt-8 grid gap-12">
                {[
                  {
                    title: "Physical Abuse",
                    bullet1: "- Unexplained bruises, cuts, or injuries",
                    bullet2: "- Being hit, pushed, slapped, or physically restrained",
                    bullet3: "- Threats of physical harm",
                    logo: "/physical.svg",
                  },
                  {
                    title: "Emotional & Psychological Abuse",
                    bullet1: "- Constant insults, humiliation, or belittling",
                    bullet2: "- Controlling behavior (what you wear, who you see, where you go)",
                    bullet3: "- Threats to harm you, your loved ones, or themselves so as to isolate you from friends and family",
                    logo: "/emotional.svg",
                  },
                  {
                    title: "Sexual Abuse",
                    bullet1: "- Being forced into unwanted sexual activities",
                    bullet2: "- Non-consensual touching, harassment, or coercion",
                    bullet3: "- Being pressured to perform sexual acts in exchange for something",
                    logo: "/sa.svg",
                  },
                  {
                    title: "Financial Abuse",
                    bullet1: "- Being denied access to your own money",
                    bullet2: "- Forced to give up earnings or financial control",
                    bullet3: "- Prevented from working or pursuing education",
                    logo: "/financial.svg",
                  },
                  {
                    title: "Digital Abuse",
                    bullet1: "- Monitoring your phone or social media without consent",
                    bullet2: "- Using threats or blackmail through online platforms",
                    bullet3: "- Non-consensual sharing of private images or messages",
                    logo: "/digital.svg",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative flex gap-6">
                    <img src={step.logo} className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10" />
                          
                      <div>
                        <h3 className="mt-2 text-xl font-medium text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-zinc-400">
                          {step.bullet1}
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-zinc-400">
                          {step.bullet2}
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-zinc-400">
                          {step.bullet3}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
    
        <div className="flex flex-col items-center text-center">
        <h1 className="mt-12 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              <span className="block mt-4 bg-gradient-to-r from-purple-200 to-purple-500 bg-clip-text text-transparent">
              What to Do Next
              </span>
          </h1>
          <p className="mt-8 text-white text-center text-xl">
          If any of these signs resonate with you, help is available.
          </p>
    
          <div className='mt-12 mb-24 flex items-center justify-center'>
            <Link href="submit-report">
            <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-purple-500 px-8 text-sm font-medium text-white transition-all hover:bg-purple-400">
                  Submit a report now
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
            </div>
            </div>
          </div>
        </main>
    </div>
      )
}