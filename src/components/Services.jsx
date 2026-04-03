import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
          What we do
        </p>
        <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Our Services</h2>
        <p className="mt-4 text-slate-600">
          Solutions designed to improve your business operations
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-lg font-black text-white shadow-lg shadow-cyan-600/20 transition group-hover:scale-105">
              0{index + 1}
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-950">
              {service.title}
            </h3>

            <p className="text-sm leading-7 text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;