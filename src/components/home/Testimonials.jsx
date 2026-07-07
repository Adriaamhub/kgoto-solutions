import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Mokoena",
    company: "Mokoena Holdings",
    message:
      "Kgoto Solutions Group exceeded our expectations. Their team installed our CCTV and access control system professionally and on time. We highly recommend them.",
  },
  {
    name: "Sarah Nkosi",
    company: "Nkosi Construction",
    message:
      "The quality of workmanship and customer service was outstanding. From planning to completion, every step was handled with professionalism.",
  },
  {
    name: "David Mahlangu",
    company: "Tech Solutions SA",
    message:
      "Their web development and IT support services transformed our business operations. Excellent communication and reliable support throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-900 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            We are proud to build long-lasting relationships through
            quality workmanship, innovation, and exceptional customer
            service.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >
              <Quote
                className="text-blue-400"
                size={40}
              />

              <p className="mt-6 text-slate-300 leading-8">
                "{testimonial.message}"
              </p>

              {/* Stars */}
              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-blue-400">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Join Our Satisfied Clients
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-blue-100">
            Let Kgoto Solutions Group deliver reliable security,
            construction, automation, and technology solutions tailored
            to your needs.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}