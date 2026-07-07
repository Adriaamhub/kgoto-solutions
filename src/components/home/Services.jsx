import {
  ShieldCheck,
  Building2,
  Cpu,
  Camera,
  Wrench,
  Network,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Security Solutions",
    description:
      "Professional security services including access control, alarm systems, perimeter protection, and integrated security solutions.",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description:
      "Supply, installation, maintenance, and monitoring of high-definition CCTV systems for homes and businesses.",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Residential, commercial, renovations, civil works, and infrastructure development completed to the highest standards.",
  },
  {
    icon: Cpu,
    title: "Automation",
    description:
      "Smart home, industrial, and office automation solutions designed to improve efficiency and security.",
  },
  {
    icon: MonitorSmartphone,
    title: "Software & Web Development",
    description:
      "Custom websites, business systems, mobile applications, and digital platforms tailored to your business.",
  },
  {
    icon: Network,
    title: "Networking & IT Support",
    description:
      "Network installation, server configuration, Wi-Fi solutions, cloud services, and ongoing IT support.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold uppercase tracking-[0.25em]">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Complete Solutions Under One Roof
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-8">
            Kgoto Solutions Group delivers reliable, innovative, and
            cost-effective solutions across security, construction,
            automation, and technology to help businesses and
            communities succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition group-hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Ready to Start Your Next Project?
          </h3>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Whether you need security systems, construction services,
            automation, or technology solutions, Kgoto Solutions Group
            is ready to help you achieve your goals.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            Request a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}