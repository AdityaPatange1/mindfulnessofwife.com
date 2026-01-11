import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Banner */}
      <header className="w-full bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] py-4 text-center border-b border-[#00f0ff]/20">
        <h1 className="font-orbitron text-sm font-medium tracking-[0.2em] uppercase text-[#00f0ff]/90 sm:text-base md:text-lg">
          Mindfulness Of Wife (MOW) — Dhamma Relationships & Communication Technology
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 py-12">
        <p className="font-orbitron text-sm font-bold tracking-[0.3em] uppercase text-white mb-6">
          AUTO CODE (AC)
        </p>
        <div className="relative mb-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f0ff]/30 via-[#a855f7]/20 to-[#00f0ff]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/WIFE.jpg"
              alt="Mindfulness Of Wife"
              width={380}
              height={380}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <p className="mb-8 max-w-lg text-center text-base leading-relaxed tracking-wide text-[#b4b4c4] font-light">
          A journey into presence, connection, and the sacred bond of partnership.
          Discover the art of mindful companionship.
        </p>

        <p className="mb-12 max-w-2xl text-center text-sm leading-relaxed tracking-wide text-[#a855f7]/80 font-light italic">
          Two interdimensional beings on Earth synchronizing connection frequency via brain alpha signals to fasten human evolution using sec trigonometry calculus systems and dione flow.
        </p>

        <a
          href="/book.pdf"
          download
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0a0a0f] to-[#1a1a2e] px-8 py-4 font-medium tracking-wider text-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] border border-[#00f0ff]/30 hover:border-[#00f0ff]/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="font-orbitron text-sm tracking-[0.15em] uppercase">Download the Book (PDF)</span>
        </a>

        {/* Auto Transmission */}
        <div className="mt-8 flex items-center gap-3 text-[#00f0ff]/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
          <span className="font-orbitron text-xs tracking-[0.2em] uppercase">
            Auto Transmission (AT) in 3, 2, 1...
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] py-5 border-t border-[#00f0ff]/20 flex items-center justify-center">
        <div className="inline-flex flex-col items-center border-2 border-[#00f0ff]/60 px-6 py-3 rounded-sm bg-gradient-to-r from-[#0a0a0f]/50 to-[#1a1a2e]/50">
          <p className="font-orbitron text-xs tracking-[0.2em] uppercase text-[#a855f7]/80 mb-1">
            EM: Ekta Mindfulness
          </p>
          <p className="font-orbitron text-sm font-bold tracking-[0.3em] uppercase metallic-text">
            ZETA AE (ADI EKTA)™
          </p>
        </div>
      </footer>
    </div>
  );
}
