"use client";
import Image from "next/image";

export default function LegalitySection() {
  return (
    <section className="bg-black text-gold py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Our Legality & Compliance
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg mb-6">
            SelfBoss Youth Enterprising Foundation is a legally registered NGO committed to
            transparency and accountability. We comply with all legal frameworks governing youth development and nonprofit operations in Nigeria.
          </p>
          <ul className="list-disc pl-6 text-white text-sm space-y-2">
            <li>Registered with the Corporate Affairs Commission (CAC)</li>
            <li>Tax Identification Number (TIN) available</li>
            <li>In partnership with local authorities</li>
            <li>Adheres to international nonprofit ethics and transparency</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/gallery16.jpeg"
            alt="Legal Documents"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
