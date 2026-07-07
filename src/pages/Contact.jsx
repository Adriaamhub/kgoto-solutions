import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            CONTACT US
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Let's Discuss Your Next Project
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Whether you need security, construction,
            automation, or technology solutions,
            our team is ready to help.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Call Us
                  </h3>

                  <p className="text-slate-400">
                    069 320 8545
                  </p>

                  <p className="text-slate-400">
                    076 529 2447
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Email
                  </h3>

                  <p className="text-slate-400">
                    kgoto.solutionsgroup@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4">
                <Clock className="text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Business Hours
                  </h3>

                  <p className="text-slate-400">
                    Monday – Friday
                  </p>

                  <p className="text-slate-400">
                    08:00 AM – 05:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold text-white">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-white/10">
          <div className="flex h-96 items-center justify-center bg-slate-900 text-slate-400">
            Google Maps Location
          </div>
        </div>
      </div>
    </section>
  );
}