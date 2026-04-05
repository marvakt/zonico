function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div>
          <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 shadow-sm">
            Software and security for local business
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Simple systems for billing, stock, and security
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We help shops, supermarkets, and restaurants work faster with POS software,
            inventory tracking, CCTV setup, and IT support.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Talk to us
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
            >
              See our works
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="text-2xl font-black text-slate-950">3+</div>
              <div className="mt-1 text-sm text-slate-600">Core services</div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="text-2xl font-black text-slate-950">24/7</div>
              <div className="mt-1 text-sm text-slate-600">Security support</div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="text-2xl font-black text-slate-950">Fast</div>
              <div className="mt-1 text-sm text-slate-600">Business growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;