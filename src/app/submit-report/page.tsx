export default function Submit() {
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
                  Make a report
                </span>
            </h1>
            <p className="mt-8 text-white text-center text-xl">
            Report gender-based violence securely and anonymously. Your safety comes first—submit an immediate report, and our team will handle it with urgency and confidentiality.
          </p>
            </div>
            </div>
          </main>
      </div>
    )
}