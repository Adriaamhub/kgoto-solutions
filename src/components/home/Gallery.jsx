import { Search } from "lucide-react";

const gallery = [
  {
    image: "public/images/gallery/project12.jpg",
    title: "Security Installation",
    category: "Security",
  },
  {
    image: "public/images/gallery/project6.jpeg",
    title: "CCTV Surveillance",
    category: "Technology",
  },
  {
    image: "public/images/gallery/project1.jpeg",
    title: "Construction Project",
    category: "Construction",
  },
  {
    image: "public/images/gallery/project11.jpeg",
    title: "Automation Systems",
    category: "Automation",
  },
  {
    image: "public/images/gallery/project8.jpeg",
    title: "Networking Infrastructure",
    category: "IT Solutions",
  },
  {
    image: "public/images/gallery/project9.jpeg",
    title: "Software Development",
    category: "Technology",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-950 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            OUR GALLERY
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Our Work Speaks for Itself
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            Explore some of our completed projects across security,
            construction, automation, networking, and technology
            solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <button className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-110">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Turning Ideas Into Reality
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-blue-100 leading-8">
            Every project reflects our commitment to quality,
            innovation, and customer satisfaction. We take pride
            in delivering solutions that exceed expectations.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}