"use client";
import Image from "next/image";

export default function PastEventsPage() {
  const pastEvents = [
    {
      title: "Entrepreneurship Bootcamp 2024",
      image: "/images/gallery13.jpeg",
      description:
        "A 3-day intensive bootcamp where over 300 youth learned practical business development, branding, and digital marketing strategies.",
    },
    {
      title: "Innovation Fair & Pitch Day",
      image: "/images/gallery5.jpeg",
      description:
        "Young entrepreneurs pitched their ideas to a panel of investors, securing mentorship and funding opportunities.",
    },
    {
      title: "Skill-Up Weekend Workshop",
      image: "/images/gallery14.jpeg",
      description:
        "Hands-on training on graphics design, website development, and digital skills for youth in Aba.",
    },
    {
      title: "Women in Enterprise Forum",
      image: "/images/gallery4.jpeg",
      description:
        "Empowering young women to build businesses through storytelling, mentoring, and business grant sessions.",
    },
    {
      title: "Street-to-Startup Youth Campaign",
      image: "/images/gallery8.jpeg",
      description:
        "An awareness campaign across local communities to identify and equip street youth with startup kits and training.",
    },
    {
      title: "Community Market Day (Youth Edition)",
      image: "/images/gallery6.jpeg",
      description:
        "Youth entrepreneurs showcased and sold their handmade crafts, clothing, and agricultural products to the public.",
    },
  ];

  return (
    <main className="bg-black text-gold min-h-screen px-4 py-24 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Past Empowerment Events
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
