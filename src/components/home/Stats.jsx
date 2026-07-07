import {
  BriefcaseBusiness,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "150+",
    title: "Projects Completed",
    description: "Successfully delivered across multiple industries.",
  },
  {
    icon: Users,
    value: "100+",
    title: "Satisfied Clients",
    description: "Businesses and organizations trust our expertise.",
  },
  {
    icon: Award,
    value: "7+",
    title: "Years of Excellence",
    description: "Providing quality services since 2019.",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "Technical Support",
    description: "Reliable support whenever you need assistance.",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-slate-950 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            OUR IMPACT
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Delivering Results That Matter
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Our commitment to excellence, innovation, and customer
            satisfaction has helped us build lasting relationships and
            deliver exceptional results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-5xl font-extrabold text-white">
                  {stat.value}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-white">
                  {stat.title}
                </h4>

                <p className="mt-4 text-slate-400 leading-7">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Excellence Through Innovation
          </h3>

          <p className="mt-4 max-w-2xl mx-auto text-blue-100">
            We are dedicated to delivering reliable security,
            construction, automation, and technology solutions that
            help businesses and communities grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}