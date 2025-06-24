"use client";
import Link from "next/link";

export default function SelfBossPage() {
  return (
    <main className="bg-black text-gold min-h-screen px-4 sm:px-6 lg:px-20 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">SelfBoss Enterprising Youth Foundation</h1>

      <section className="space-y-6 text-sm sm:text-base text-white">
        <p>
          <strong>SelfBoss Enterprising Youth Foundation</strong> (SEYF) is a non-profit organization committed to empowering Nigeria’s enterprising youth. We help young business owners by providing them with vital business equipment, practical training, and a strong network to build sustainable ventures.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10">🌟 Our Mission</h2>
        <p>
          To empower Nigeria's enterprising youth with essential business equipment and training, fostering innovation, entrepreneurship, and economic growth.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10">🌍 Our Vision</h2>
        <p>
          To build a thriving community of young entrepreneurs who drive economic development and social change across Nigeria.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10">🎯 Our Goals</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide tools and resources for youth-led businesses.</li>
          <li>Offer practical and theoretical entrepreneurial training.</li>
          <li>Connect young business owners with mentors and networks.</li>
          <li>Build a supportive community that inspires innovation and collaboration.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10">💼 Key Programs</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Business Equipment Grants:</strong> Grants for tools like laptops and equipment.</li>
          <li><strong>Entrepreneurship Workshops:</strong> Training on planning, marketing, finance, and digital skills.</li>
          <li><strong>Mentorship:</strong> Pairing youth with experienced professionals.</li>
          <li><strong>Networking Events:</strong> Events connecting youth with investors and business leaders.</li>
          <li><strong>Incubation & Acceleration:</strong> Business support, space, and access to funding.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mt-10">📈 Our Impact</h2>
        <p>
          We've helped hundreds of young entrepreneurs across Abia and beyond. Many have started successful businesses, created jobs, and inspired other youths to pursue entrepreneurship.
        </p>

        <h2 className="text-2xl font-bold text-gold mt-10">🤝 Get Involved</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Donate:</strong> Help fund tools and training for aspiring entrepreneurs.</li>
          <li><strong>Volunteer:</strong> Be a mentor, speaker, or event organizer.</li>
          <li><strong>Partner:</strong> Work with us to expand our reach and deepen our impact.</li>
        </ul>

        <div className="mt-10 border-t border-gold pt-6 text-sm text-gray-300">
          <p>📍 Locations: Aba – Abia, Nigeria</p>
          <p>📧 Email: Selfbossbiz@gmail.com</p>
          <p>📞 Phone: +234 7043202431</p>
          <p>📱 Follow us on: <Link href="https://www.instagram.com/selfbossfoundation?igsh=azZ4dTljeXFjOWMx&utm_source=qr" Target="blank">Instagram</Link></p>
        </div>
      </section>
    </main>
  );
}
