"use client";

import Image from "next/image";
import { useState } from "react";

type Room = {
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
  imageAlt: string;
};

const heroImage = {
  src: "/images/sindhu-suites-hero.jpg",
  alt: "Modern living room with neutral seating, warm curtains, a television, and large windows.",
};

const rooms: Room[] = [
  {
    title: "Deluxe Room",
    description:
      "A comfortable room designed for relaxed stays with simple, practical comforts.",
    details: ["Queen bed", "Work desk", "Private bathroom"],
    imageSrc: "/images/sindhu-suites-bedroom.png",
    imageAlt: "Bright bedroom at Sindhu Suites with a neatly styled bed and soft natural light.",
  },
  {
    title: "Family Room",
    description:
      "A spacious option that supports longer stays and easy shared living.",
    details: ["Extra sleeping space", "Seating area", "Quiet setting"],
    imageSrc: "/images/sindhu-suites-living-room.png",
    imageAlt: "Open living area at Sindhu Suites with comfortable seating and a calm atmosphere.",
  },
];

const amenities = [
  "Free Wi-Fi",
  "Air Conditioning",
  "Parking",
  "Kitchen",
  "Housekeeping",
  "Laundry Services",
  "Airport Transfers",
  "Long-Term Stays",
  "Suitable for Business Travellers",
];

type Locality = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const localities: Locality[] = [
  {
    id: "hospitals",
    title: "Hospitals",
    description: "Quality healthcare facilities nearby.",
    icon: "hospital",
  },
  {
    id: "airport",
    title: "Airport",
    description: "Easy access for travel and arrivals.",
    icon: "airport",
  },
  {
    id: "city-centre",
    title: "City Centre",
    description: "Close to shopping, dining, and entertainment.",
    icon: "city",
  },
  {
    id: "transport",
    title: "Transport",
    description: "Connected by buses, trains, and taxis.",
    icon: "transport",
  },
];

const contactDetails = {
  whatsappUrl:
    "https://wa.me/919449848432?text=Hello%20Sindhu%20Suites%2C%20I%20would%20like%20to%20enquire%20about%20availability%20for%20a%20stay.",
  whatsappNumber: "+91 94498 48432",
  phone: "+91 94498 48432",
  email: "hello@sifin.in",
  address: "384/A, RMV 2nd Stage, 2nd Block,\nBengaluru, Karnataka – 560094\nIndia",
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function PropertyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        priority={src === heroImage.src}
        loading={src === heroImage.src ? "eager" : undefined}
      />
    </div>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
      <div className="relative h-56 w-full border-b border-stone-200 bg-stone-100">
        <PropertyImage
          src={room.imageSrc}
          alt={room.imageAlt}
          className="h-full w-full"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{room.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{room.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-700">
          {room.details.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-600" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PropertyIcon({ type }: { type: string }) {
  const iconProps = {
    className: "w-12 h-12 text-white",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "hospital":
      return (
        <svg {...iconProps}>
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18M6 6h3v3H6V6zm9 0h3v3h-3V6zm-9 9h3v3H6v-3zm9 0h3v3h-3v-3z" />
        </svg>
      );
    case "airport":
      return (
        <svg {...iconProps}>
          <path d="M17.3 13.29l.02-.04c.84-1.99.27-4.27-1.39-5.58l-4.47-3.47c-1.66-1.29-4.05-1.29-5.71 0l-4.47 3.47c-1.66 1.31-2.23 3.59-1.39 5.58l.02.04M2 13h20M5 13l3 7h8l3-7" />
        </svg>
      );
    case "city":
      return (
        <svg {...iconProps}>
          <path d="M3 21h18M5 21V5h3V2h2v3h4V2h2v3h3v16M7 9h2M7 13h2M13 9h2M13 13h2" />
        </svg>
      );
    case "transport":
      return (
        <svg {...iconProps}>
          <path d="M2 10h20M4 10v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7M14 10v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7M2 10h20v-3c0-1.1.9-2 2-2v0c1.1 0 2 .9 2 2v3M6 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
      );
    default:
      return null;
  }
}


function LocalityCard({ locality }: { locality: Locality }) {
  return (
    <article className="group rounded-2xl border border-amber-500/20 p-6 shadow-lg transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl" style={{ backgroundColor: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(8px)" }}>
      <div className="mb-3 inline-flex rounded-full bg-amber-500 p-3 transition-colors group-hover:bg-amber-600">
        <PropertyIcon type={locality.icon} />
      </div>
      <h3 className="text-base font-semibold text-white">{locality.title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-200">{locality.description}</p>
    </article>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#accommodation" },
    { label: "Amenities", href: "#amenities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b-[0.5px] border-amber-400/45 bg-slate-900/70 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.9)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2" aria-label="Sindhu Suites home">
            <span className="text-lg font-semibold tracking-tight text-white">Sindhu Suites</span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Official
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactDetails.whatsappUrl}
              className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/70"
              aria-label="WhatsApp for Sindhu Suites inquiries"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-slate-100 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900/70 md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="bg-slate-900/85 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contactDetails.whatsappUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                aria-label="WhatsApp for Sindhu Suites inquiries"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-950/25" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl items-center px-6 py-20 sm:min-h-[38rem] lg:px-8 lg:py-28">
            <div className="max-w-xl text-white">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.12em] text-amber-300">
                Spacious Serviced Apartments for the Discerning Traveler
              </p>
              <h1 className="mt-4 font-serif text-2xl leading-tight font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl xl:whitespace-nowrap">
                Hotel Luxury. Home Comfort. Zero Compromise.
              </h1>
              <p className="mt-5 max-w-2xl font-normal text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Experience spacious, fully furnished serviced apartments designed for effortless living. Whether you&apos;re here for a weekend or a month, step into a stay defined by elegance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={contactDetails.whatsappUrl}
                  className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
                  aria-label="Book on WhatsApp for Sindhu Suites"
                  rel="noopener noreferrer"
                >
                  Book on WhatsApp
                </a>
                <a
                  href="#accommodation"
                  className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/80 hover:bg-white/20"
                >
                  View Rooms
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 -top-16 -mb-16 sm:-top-20 sm:-mb-20 relative">
              {localities.map((locality) => (
                <LocalityCard key={locality.id} locality={locality} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="A welcoming stay in the heart of the property experience"
            description="Sindhu Suites is the official property website for a comfortable stay in Bengaluru, with verified contact details and amenities shared in one place."
          />
          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Welcome to Sindhu Suites, a comfortable stay in Bengaluru with verified contact details, a clear overview of the property, and amenities that are shared directly on this official website.
            </p>
          </div>
        </section>

        <section id="accommodation" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Accommodation"
            title="Rooms designed for comfort and ease"
            description="The accommodation section highlights a pair of room options available at Sindhu Suites."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rooms.map((room) => (
              <RoomCard key={room.title} room={room} />
            ))}
          </div>
        </section>

        <section id="amenities" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Amenities"
            title="Essential comforts and support"
            description="The amenities below are verified and shared directly on this official property website."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {amenities.map((amenity) => (
              <li
                key={amenity}
                className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-slate-700 shadow-sm"
              >
                {amenity}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Additional Services</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Laundry and dry-cleaning services are available upon request.</li>
              <li>• Airport transfer assistance can be arranged upon request.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Reach out for bookings and questions"
            description="Use the verified contact details below to enquire about availability and property information."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                WhatsApp
              </p>
              <a
                href={contactDetails.whatsappUrl}
                className="mt-3 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                aria-label="Book on WhatsApp for Sindhu Suites"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
              <p className="mt-4 text-sm text-slate-600">
                WhatsApp: {contactDetails.whatsappNumber}
              </p>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4 text-sm text-slate-700">
                <li>
                  <span className="block font-semibold text-slate-900">Phone</span>
                  <span className="mt-1 block">{contactDetails.phone}</span>
                </li>
                <li>
                  <span className="block font-semibold text-slate-900">Email</span>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-1 block text-amber-700 underline-offset-2 hover:underline"
                  >
                    {contactDetails.email}
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-slate-900">Address</span>
                  <span className="mt-1 block whitespace-pre-line">{contactDetails.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-semibold text-slate-900">Official Sindhu Suites Website</p>
          <p>Booking Partners: Airbnb, Booking.com, Agoda, and MakeMyTrip.</p>
        </div>
      </footer>
    </div>
  );
}
