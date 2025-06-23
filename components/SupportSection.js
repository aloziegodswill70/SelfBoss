"use client";
import Image from "next/image";

export default function SupportSection() {
  return (
    <section
      id="SupportSection"
      className="bg-black text-gold py-16 px-4 sm:px-6 lg:px-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        How You Can Support Us
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Support 1: Donate */}
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery15.jpeg"
            alt="Donate"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 space-y-3">
            <h3 className="text-xl font-bold">Donate</h3>
            <p className="text-sm">
              Your donations help us reach more youth with impactful programs and resources.
            </p>
            <div className="text-sm bg-black text-gold p-3 rounded-md">
              <p><strong>Bank Name:</strong> Zenith Bank</p>
              <p><strong>Account Name:</strong> SelfBoss Enterprising Youth Foundation</p>
              <p><strong>Account Number:</strong> 1229096504</p>
            </div>
          </div>
        </div>

        {/* Support 2: Volunteer */}
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery17.jpeg"
            alt="Volunteer"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p className="text-sm">
              Join our passionate team and make a difference by giving your time and skills.
            </p>
          </div>
        </div>

        {/* Support 3: Partner */}
        <div className="bg-white text-black rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery16.jpeg"
            alt="Partner with Us"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Partner</h3>
            <p className="text-sm">
              Collaborate with us through sponsorships, grants, and mutual community efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
