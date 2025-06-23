export default function HeroSection() {
  return (
    <section className="bg-black text-gold pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Empowering Youth, <br className="hidden sm:block" />
            Building the Future
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl">
            SelfBoss Foundation equips young Nigerians with skills, support, and opportunities for lasting impact.
          </p>
          <a
            href="#ProgramsSection"
            className="inline-block bg-gold text-black font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-400 transition"
          >
            Explore Programs
          </a>
        </div>

        {/* Optional Image */}
        <div className="flex-1">
          <img
            src="/images/gallery16.jpeg" // Replace with your image in /public folder
            alt="SelfBoss Youth"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
