import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-6 lg:px-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-10 md:p-16 shadow-2xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                LET'S BUILD THE FUTURE TOGETHER
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Start Your Next Project?
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Whether you need professional security systems,
                construction services, automation solutions,
                software development, or IT support,
                Kgoto Solutions Group is ready to deliver
                reliable solutions that help your business grow.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5 lg:items-end">

              <button className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:bg-slate-100">
                Get Free Consultation
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center justify-center gap-3 rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white/10">
                <PhoneCall size={20} />
                Contact Us Today
              </button>

              <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur-lg">
                <p className="text-sm uppercase tracking-widest text-blue-100">
                  Business Hours
                </p>

                <p className="mt-2 text-white font-semibold">
                  Monday – Friday
                </p>

                <p className="text-blue-100">
                  08:00 AM – 05:00 PM
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}