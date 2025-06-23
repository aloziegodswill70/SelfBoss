"use client";
import Image from "next/image";

export default function ImpactSection() {
  return (
    <section className="bg-black text-gold py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Our Impact
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/gallery10.jpeg"
            alt="Community Impact"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-lg mb-6">
            Through consistent programs and outreach efforts, we've empowered over 5,000 Nigerian youths with knowledge, skills, and opportunities to stay drug-free and become successful entrepreneurs.
          </p>

          <div className="space-y-3 text-white text-sm">
            <p>🌍 Over 20 rural communities impacted</p>
            <p>👥 100+ workshops and training sessions</p>
            <p>🎓 Youths mentored into starting businesses</p>
            <p>🤝 Strategic collaborations with NDLEA and others</p>
          </div>
        </div>
      </div>
    </section>
  );
}
