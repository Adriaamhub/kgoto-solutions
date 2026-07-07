import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="relative min-h-screen overflow-hidden flex items-center pt-16">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-20 bg-slate-950" />

      {/* Premium Orange Glow */}
      <div className="
        absolute
        -top-40
        -right-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-orange-500/20
        blur-[150px]
      " />

      <div className="
        absolute
        -bottom-40
        -left-40
        h-[450px]
        w-[450px]
        rounded-full
        bg-orange-400/10
        blur-[140px]
      " />

      {/* Grid Overlay */}
      <div
        className="
        absolute
        inset-0
        -z-10
        opacity-[0.08]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="
        container-custom
        grid
        items-center
        gap-14
        py-24
        lg:grid-cols-2
        lg:gap-20
      ">


        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-400/30
              bg-orange-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-orange-300
              backdrop-blur-xl
            "
          >
            <span className="
              h-2
              w-2
              rounded-full
              bg-orange-400
              animate-pulse
            " />

            Excellence Since 2019
          </motion.div>

<h1
  className="
    mt-8
    text-5xl
    font-black
    leading-[1.05]
    tracking-tight
    text-white
    sm:text-6xl
    lg:text-7xl
    xl:text-8xl
  "
>

  <span className="text-orange-400">
    Building
  </span>


  <span
    className="
      block
      bg-gradient-to-r
      from-blue-400
      via-cyan-400
      to-sky-500
      bg-clip-text
      text-transparent
    "
  >
    Smarter
  </span>


  <span className="text-orange-400">
    Safer
  </span>


  <span
    className="
      block
      bg-gradient-to-r
      from-blue-300
      via-blue-500
      to-cyan-400
      bg-clip-text
      text-transparent
    "
  >
    Solutions
  </span>

</h1>


          {/* Description */}

          <p className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-300
            sm:text-xl
          ">

            KGOTO Solutions Group delivers premium
            security, construction, automation and
            technology solutions that empower
            businesses and communities through
            innovation, quality and trusted service.

          </p>


          {/* Buttons */}

          <div className="
            mt-10
            flex
            flex-wrap
            gap-5
          ">

            <Link
              to="/services"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-orange-500
                via-orange-600
                to-amber-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-xl
                shadow-orange-500/30
                transition
                hover:scale-105
              "
            >

              Explore Services

              <ArrowRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-1
                "
              />

            </Link>


            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-orange-400/30
                bg-white/5
                px-8
                py-4
                font-semibold
                text-orange
                backdrop-blur-xl
                transition
                hover:bg-orange-500/10
              "
            >

              Contact Us

            </Link>

          </div>


          {/* Trust Points */}

          <div className="
            mt-10
            flex
            flex-wrap
            gap-6
            text-sm
            text-slate-300
          ">

            <div className="flex items-center gap-2">
              <CheckCircle2
                className="text-orange-400"
                size={18}
              />
              Trusted Quality
            </div>


            <div className="flex items-center gap-2">
              <CheckCircle2
                className="text-orange-400"
                size={18}
              />
              Professional Service
            </div>


            <div className="flex items-center gap-2">
              <CheckCircle2
                className="text-orange-400"
                size={18}
              />
              Innovation Driven
            </div>

          </div>


          {/* Service Cards Start */}

          <div className="
            mt-14
            grid
            gap-5
            sm:grid-cols-3
          ">

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                rounded-2xl
                border
                border-orange-500/10
                bg-slate-900/70
                p-5
                backdrop-blur-xl
                transition
              "
            >

              <ShieldCheck
                size={35}
                className="text-orange-400"
              />

              <h3 className="
                mt-4
                font-semibold
                text-white
              ">
                Security
              </h3>

              <p className="
                mt-2
                text-sm
                text-slate-400
              ">
                Advanced protection systems.
              </p>

            </motion.div>
                        <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                rounded-2xl
                border
                border-orange-500/10
                bg-slate-900/70
                p-5
                backdrop-blur-xl
                transition
              "
            >

              <Building2
                size={35}
                className="text-orange-400"
              />

              <h3 className="
                mt-4
                font-semibold
                text-white
              ">
                Construction
              </h3>

              <p className="
                mt-2
                text-sm
                text-slate-400
              ">
                Reliable infrastructure solutions.
              </p>

            </motion.div>


            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                rounded-2xl
                border
                border-orange-500/10
                bg-slate-900/70
                p-5
                backdrop-blur-xl
                transition
              "
            >

              <Cpu
                size={35}
                className="text-orange-400"
              />

              <h3 className="
                mt-4
                font-semibold
                text-white
              ">
                Automation
              </h3>

              <p className="
                mt-2
                text-sm
                text-slate-400
              ">
                Smart technology solutions.
              </p>

            </motion.div>

          </div>


          {/* Statistics */}

          <div className="
            mt-14
            grid
            grid-cols-2
            gap-6
            sm:grid-cols-4
          ">

            {[
              {
                number: "200+",
                label: "Projects",
              },
              {
                number: "100%",
                label: "Quality",
              },
              {
                number: "24/7",
                label: "Support",
              },
              {
                number: "2019",
                label: "Established",
              },
            ].map((item) => (

              <div
                key={item.label}
              >

                <h2 className="
                  text-3xl
                  font-black
                  text-orange-400
                ">
                  {item.number}
                </h2>

                <p className="
                  mt-2
                  text-sm
                  text-slate-400
                ">
                  {item.label}
                </p>

              </div>

            ))}

          </div>


        </motion.div>



        {/* ================= RIGHT IMAGE ================= */}


        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            relative
          "
        >


          {/* Image Container */}

          <div className="
            relative
            rounded-[2rem]
            border
            border-orange-400/20
            bg-white/5
            p-4
            backdrop-blur-xl
            shadow-2xl
          ">


            <div className="
              absolute
              inset-0
              rounded-[2rem]
              bg-orange-500/10
              blur-2xl
            " />


            <img
              src="/images/hero/project3.jpeg"
              alt="KGOTO Solutions Group"
              className="
                relative
                h-[420px]
                w-full
                rounded-[1.5rem]
                object-cover

                sm:h-[520px]
                lg:h-[650px]
              "
            />


          </div>



          {/* Experience Card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-8
              -left-5

              rounded-2xl
              bg-white
              p-6
              shadow-2xl

              sm:-left-8
            "
          >

            <h2 className="
              text-4xl
              font-black
              text-slate-900
            ">
              2019
            </h2>

            <p className="
              mt-2
              max-w-[180px]
              text-sm
              text-slate-600
            ">
              Years of delivering trusted solutions.
            </p>

          </motion.div>



          {/* Quality Card */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-5
              top-8

              rounded-2xl
              bg-gradient-to-br
              from-orange-500
              via-orange-600
              to-amber-500

              p-6
              text-white
              shadow-2xl

              sm:-right-8
            "
          >

            <h2 className="
              text-3xl
              font-black
            ">
              100%
            </h2>

            <p className="
              mt-2
              text-sm
            ">
              Quality Commitment
            </p>

          </motion.div>



          {/* Floating Security Badge */}

          <motion.div
            animate={{
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-10
              bottom-10

              hidden
              rounded-xl
              border
              border-orange-400/20
              bg-slate-950/80
              px-5
              py-4

              text-white
              backdrop-blur-xl

              md:block
            "
          >

            <div className="
              flex
              items-center
              gap-3
            ">

              <ShieldCheck
                className="text-orange-400"
                size={28}
              />

              <div>

                <p className="
                  text-sm
                  font-semibold
                ">
                  Secure Solutions
                </p>

                <p className="
                  text-xs
                  text-slate-400
                ">
                  Trusted Protection
                </p>

              </div>

            </div>

          </motion.div>


        </motion.div>


      </div>



      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          text-slate-400

          md:flex
        "
      >

        <span className="text-xs uppercase tracking-[4px]">
          Scroll
        </span>

        <span className="mt-2 text-xl">
          ↓
        </span>

      </motion.div>


    </Section>
  );
}