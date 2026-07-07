import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500" />

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <img
              src="/logo.jpeg"
              alt="KGOTO Solutions Group"
              className="w-20 mb-6"
            />

            <h2 className="text-2xl font-bold tracking-wide">
              KGOTO
            </h2>

            <p className="uppercase text-sm tracking-[4px] text-orange-500">
              Solutions Group
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Building Trust Through Quality, Security &
              Excellence by delivering innovative technology,
              construction and security solutions that exceed
              client expectations.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (

                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-slate-400 hover:text-orange-500 transition"
                  >
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    {name}
                  </Link>
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>
                📞 +27 69 320 8545
              </p>

              <p>
                📞 +27 76 529 2447
              </p>

              <a
                href="mailto:kgoto.solutionsgroup@gmail.com"
                className="block hover:text-orange-500 transition"
              >
                kgoto.solutionsgroup@gmail.com
              </a>

              <p>
                Johannesburg, South Africa
              </p>

            </div>

          </div>

          {/* CTA & Social */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Let's Build Together
            </h3>

            <p className="text-slate-400 leading-7 mb-6">
              Ready to start your next project?
              Contact us today and let's create something
              exceptional.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-semibold shadow-lg hover:scale-105 transition"
            >
              Get a Quote
            </Link>

            <div className="flex gap-4 mt-8">

              {[
                {
                  icon: <FaFacebookF />,
                  bg: "hover:bg-blue-600",
                  link: "#",
                },
                {
                  icon: <FaWhatsapp />,
                  bg: "hover:bg-green-600",
                  link: "https://wa.me/27693208545",
                },
                {
                  icon: <FaEnvelope />,
                  bg: "hover:bg-red-500",
                  link: "mailto:kgoto.solutionsgroup@gmail.com",
                },
              ].map((item, index) => (

                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition ${item.bg}`}
                >
                  {item.icon}
                </motion.a>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {year} KGOTO Solutions Group. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy"
              className="text-slate-500 hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-500 hover:text-orange-500 transition"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}