import { workCategories } from "../data/projects";

function Works() {
  const navigateToCategory = (event, slug) => {
    event.preventDefault();
    window.history.pushState({}, "", slug);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#f8fafc_0%,_#eefbf8_55%,_#f8fafc_100%)] px-6 py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_60%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
          Category works
        </p>
        <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
          Our Works
        </h2>
        <p className="mt-4 text-slate-600">
          Explore real projects from our core service categories
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {workCategories.map((category, index) => {
          return (
            <article
              key={category.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.14)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.highlight}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {category.audience}
                  </span>
                  <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {category.result}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-950">Problem:</span>{" "}
                    {category.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">Solution:</span>{" "}
                    {category.solution}
                  </p>
                </div>

                <a
                  href={category.slug}
                  onClick={(event) => navigateToCategory(event, category.slug)}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  Show More
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Works;