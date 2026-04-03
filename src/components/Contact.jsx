import emailjs from "emailjs-com";

function Contact() {
  const CONTACT_EMAIL = "info@zonicosolutions.com";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const openMailClient = ({ name, phone, message }) => {
    const subject = `New enquiry from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      openMailClient(payload);
      form.reset();
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      form.reset();
    } catch {
      openMailClient(payload);
      form.reset();
      alert("Email service is unavailable now. Opening your mail app.");
    }
  };

  return (
    <section id="contact" className="bg-white px-6 py-20">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-slate-600">
            Contact us for software and IT solutions for your business
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-6 rounded-[1.75rem] bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">

            <div>
              <h3 className="text-xl font-bold text-slate-950">Phone</h3>
              <p className="mt-1 text-slate-600">+91 9895100390</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 inline-block text-slate-600 transition hover:text-cyan-700"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950">Location</h3>
              <p className="mt-1 text-slate-600">Kerala, India</p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919895100390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-cyan-800/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            onSubmit={sendEmail}
            className="space-y-4 rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="h-36 w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-slate-950 py-3.5 font-semibold text-white transition hover:bg-cyan-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;