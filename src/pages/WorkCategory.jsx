function WorkCategory({ category }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_100%)] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/75 px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
          <a href="/" className="text-xl font-black tracking-tight text-slate-900">
            Zonico<span className="text-cyan-600">.</span>
          </a>
          <a
            href="/#works"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            Back to Works
          </a>
        </div>
      </header>

      <main className="px-6 py-14">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Full category works
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                {category.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {category.audience}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Problem</div>
                  <div className="mt-2 text-slate-800">{category.problem}</div>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Solution</div>
                  <div className="mt-2 text-slate-800">{category.solution}</div>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Result</div>
                  <div className="mt-2 text-slate-800">{category.result}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
              <div className="absolute -right-4 bottom-6 h-28 w-28 rounded-full bg-sky-400/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[360px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Related works
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Sample projects for this category
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {category.works.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default WorkCategory;