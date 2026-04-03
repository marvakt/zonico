import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_100%)] px-6 py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 shadow-sm">
            Smart software and security solutions
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Modern business systems for billing, inventory, and security.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Zonico helps restaurants, supermarkets, and local businesses run faster with POS software,
            stock control, CCTV installation, and dependable IT support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Get in touch
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
            >
              View our work
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="text-2xl font-black text-slate-950">3+</div>
              <div className="mt-1 text-sm text-slate-600">Core services</div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="text-2xl font-black text-slate-950">24/7</div>
              <div className="mt-1 text-sm text-slate-600">Security support</div>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <div className="text-2xl font-black text-slate-950">Fast</div>
              <div className="mt-1 text-sm text-slate-600">Business growth</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
          <div className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-sky-400/30 blur-2xl" />

          <div className="relative w-full max-w-lg rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
            <img
              src={heroImage}
              alt="Zonico business solutions preview"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-slate-950/85 px-5 py-4 text-white shadow-xl backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Trusted delivery</div>
              <div className="mt-1 text-lg font-semibold">Clear systems. Better control.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;