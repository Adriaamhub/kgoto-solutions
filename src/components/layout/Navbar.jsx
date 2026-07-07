import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-xl border-b border-slate-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">

          <div className="h-20 flex items-center justify-between">

 {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-4 group"
>
  <motion.div
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.3 }}
    className="
      relative
      flex
      items-center
      justify-center
    "
  >

    {/* Orange Glow */}
    <span
      className="
        absolute
        inset-0
        rounded-full
        bg-orange-500/30
        blur-xl
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
    />

  

  </motion.div>


  <div className="hidden sm:block">

    <h2
      className="
        text-xl
        lg:text-2xl
        font-black
        tracking-wide
        text-orange-500
      "
    >
      KGOTO
    </h2>


    <p
      className="
        text-[10px]
        lg:text-xs
        uppercase
        tracking-[4px]
        text-slate-500
      "
    >
      Solutions Group
    </p>

  </div>

</Link>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">

              {links.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                >
                  {({ isActive }) => (
                    <span
                      className={`relative text-[15px] font-medium transition duration-300 ${
                        isActive
                          ? "text-orange-500"
                          : "text-slate-700 hover:text-orange-500"
                      }`}
                    >
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-0.5 bg-orange-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}

            </nav>

            {/* CTA */}

            <Link
              to="/contact"
              className="
              hidden lg:inline-flex
              items-center
              rounded-full
              px-7 py-3
              font-semibold
              text-white
              bg-gradient-to-r
            from-orange-400
via-orange-500
to-amber-500
              shadow-lg
              shadow-orange-500/30
              hover:scale-105
              hover:shadow-orange-500/50
              transition-all
              duration-300
              "
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg text-3xl"
            >
              {open ? (
                <HiOutlineX />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: .25 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t shadow-xl"
            >

              <div className="container-custom py-4">

                {links.map((item) => (

                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-5 py-4 text-base transition-all duration-300 ${
                        isActive
                          ? "bg-orange-50 text-orange-500 font-semibold"
                          : "hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="
                  mt-5
                  flex
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  to-red-500
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  "
                >
                  Get Quote
                </Link>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </header>

      {/* Prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}