import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Users,
  Lightbulb,
  Headset,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description:
      "We deliver dependable security, construction, automation, and technology solutions with professionalism and integrity.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Workmanship",
    description:
      "Every project is completed with attention to detail, ensuring exceptional quality and long-lasting results.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "We respect your time by completing projects efficiently while maintaining the highest standards.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our skilled professionals bring knowledge, innovation, and practical experience to every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We use modern technologies and industry best practices to deliver smart, future-ready solutions.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Our team provides ongoing support and assistance to ensure your systems continue performing at their best.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-slate-900 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Why Businesses Trust
            <span className="block text-blue-400">
              Kgoto Solutions Group
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            We combine expertise, innovation, and customer-focused service
            to deliver solutions that create lasting value for our clients.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Your Success Is Our Priority
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-blue-100">
            Whether you need advanced security systems, construction
            expertise, automation, or innovative technology solutions,
            Kgoto Solutions Group is committed to delivering excellence
            from start to finish.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}