"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white px-4 py-12  pt-20 md:pt-24 lg:pt-32">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-gold text-center">About Us</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Who We Are</h2>
          <p>
            Selfboss Enterprising Youth Foundation (SEYF) is a non-profit organization committed to supporting and empowering young entrepreneurs across Nigeria. We focus on providing essential business equipment and impactful training programs that help youth launch and grow successful businesses.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Our Vision</h2>
          <p>
            To create a thriving community of young entrepreneurs who drive economic development and social change in Nigeria.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Our Mission</h2>
          <p>
            Empowering Nigeria's enterprising youth with the necessary business equipment and training to foster innovation, entrepreneurship, and sustainable economic growth.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Our Goals</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Provide tools and resources for youth-led business growth.</li>
            <li>Deliver practical and theoretical entrepreneurial training.</li>
            <li>Connect youth with mentors and business professionals.</li>
            <li>Build a supportive, collaborative youth business community.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Our Key Programs</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li><strong>Business Equipment Grants:</strong> Computers, manufacturing tools, and more.</li>
            <li><strong>Entrepreneurship Training:</strong> Business planning, financial literacy, marketing, etc.</li>
            <li><strong>Mentorship:</strong> Personalized business guidance from professionals.</li>
            <li><strong>Networking Events:</strong> Connect with industry experts and investors.</li>
            <li><strong>Startup Incubation:</strong> Workspace, services, and access to funding opportunities.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Our Impact</h2>
          <p>
            We’ve supported hundreds of youth entrepreneurs across Abia State who are now creating jobs, contributing to the economy, and inspiring others to follow their path.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Get Involved</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li><strong>Donate:</strong> Help us equip and train more young innovators.</li>
            <li><strong>Volunteer:</strong> Join us as a mentor, trainer, or event organizer.</li>
            <li><strong>Partner:</strong> Collaborate to expand our reach and impact.</li>
          </ul>
          <p>
            📧 Email: <Link href="mailto:Selfbossbiz@gmail.com" className="underline text-gold">Selfbossbiz@gmail.com</Link><br />
            📍 Locations: Aba, Abia — Nigeria<br />
            📞 Phone:  +234 7043202431
          </p>
        </section>
      </div>
    </main>
  );
}
