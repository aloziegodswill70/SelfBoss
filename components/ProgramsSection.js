"use client";
import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Our Programs
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Program 1 */}
        <div className="bg-black text-gold rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery7.jpeg"
            alt="Program 1"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
            <p className="text-sm">
              Equipping young minds with skills, knowledge, and support to thrive in society.
            </p>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-black text-gold rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery4.jpeg"
            alt="Program 2"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Entrepreneurship Training</h3>
            <p className="text-sm">
              Programs designed to help youth turn ideas into sustainable businesses.
            </p>
          </div>
        </div>

        {/* Program 3 */}
        <div className="bg-black text-gold rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/gallery5.jpeg"
            alt="Program 3"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">School Outreach</h3>
            <p className="text-sm">
              Educating students on self-development, leadership, and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
