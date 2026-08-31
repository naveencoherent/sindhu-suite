"use client";

import Image from "next/image";
import { useState } from "react";

type Room = {
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
};

const heroImage = {
  src: "/images/sindhu-suites-hero.jpg",
  alt: "Modern living room with neutral seating, warm curtains, a television, and large windows.",
};

const propertyShowcaseImages = [
  {
    src: "/images/sindhu-suites-hero.jpg",
    alt: "Modern living room with warm neutral colors and ample natural light at Sindhu Suites.",
  },
  {
    src: "/images/sindhu-suites-bedroom.png",
    alt: "Bright bedroom with a neatly styled bed and soft daylight at Sindhu Suites.",
  },
  {
    src: "/images/sindhu-suites-living-room.png",
    alt: "Comfortable seating area with a relaxed atmosphere in the Sindhu Suites living room.",
  },
  {
    src: "/images/sindhu-suites-mobile.jpg.png",
    alt: "Bedroom and living room interior details captured in a close-up property shot.",
  },
];

const rooms: Room[] = [
  {
    eyebrow: "Apartment MC",
    title: "MC Apartment",
    imageSrc: "/images/mc-apartment.jpg",
    imageAlt: "Interior of the MC Apartment at Sindhu Suites.",
    description: "A calm, complete home base for your Bengaluru stay.",
    details: [
      "Entire 2BHK",
      "Up to 4 guests",
      "King + queen bed",
      "Kitchen + hall",
    ],
    ctaLabel: "View MC rooms & select",
  },
  {
    eyebrow: "Apartment MR",
    title: "MR Apartment",
    imageSrc: "/images/mr-apartment.jpg",
    imageAlt: "Interior of the MR Apartment at Sindhu Suites.",
    description: "The same considered comforts, with room for everyone.",
    details: [
      "Entire 2BHK",
      "Up to 4 guests",
      "King + queen bed",
      "Kitchen + hall",
    ],
    ctaLabel: "View MR rooms & select",
  },
];

const stayComforts = [
  {
    title: "Full kitchen",
    icon: "kitchen",
    badge: "LPG + microwave",
    description:
      "Cook at home with an LPG gas stove, microwave oven, fridge, and essentials for coffee and tea.",
  },
  {
    title: "Two private bedrooms",
    icon: "bedrooms",
    badge: "King + queen",
    description:
      "King and queen bedrooms, both air-conditioned and each connected to a bathroom with a water heater.",
  },
  {
    title: "Generous TV hall",
    icon: "television",
    badge: '48" Smart TV',
    description:
      "Relax in a large hall with a sofa set and 48-inch smart TV.",
  },
  {
    title: "Stay connected",
    icon: "wifi",
    badge: "Free Wi-Fi",
    description:
      "Complimentary Wi-Fi throughout your apartment.",
  },
  {
    title: "Everyday essentials",
    icon: "essentials",
    badge: "Hair dryer + iron",
    description:
      "Hair dryer, ironing table, and the practical details that make settling in simple.",
  },
  {
    title: "Easy arrival",
    icon: "parking",
    badge: "Guest parking",
    description:
      "Car parking available for guests.",
  },
];

type Locality = {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
};

const localities: Locality[] = [
  {
    id: "hospitals",
    title: "Hospitals",
    description: "Very near to Ramaiah Medical College & Hospital",
    icon: "hospital",
  },
  {
    id: "iisc",
    title: "IISc",
    description: "Conveniently located within a 5 to 10-minute walk to IISc",
    icon: "institute",
  },
  {
    id: "cpri",
    title: "CPRI",
    description: "Walkable distance from Central Power Research Institute (CPRI).",
    icon: "institute",
    link: "https://cpri.res.in/en",
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

function ComfortIcon({ type }: { type: string }) {
  let icon;

  switch (type) {
    case "kitchen":
      icon = (
        <>
          <path d="M4 11h16" />
          <path d="M6 11v7h12v-7" />
          <path d="M8 7c0-1 1-1.5 1-2.5S8 3 8 2" />
          <path d="M12 7c0-1 1-1.5 1-2.5S12 3 12 2" />
          <path d="M16 7c0-1 1-1.5 1-2.5S16 3 16 2" />
          <path d="M2 18h20" />
        </>
      );
      break;

    case "bedrooms":
      icon = (
        <>
          <path d="M3 19V9" />
          <path d="M21 19v-6a3 3 0 0 0-3-3H8a5 5 0 0 0-5 5v1h18" />
          <path d="M7 10V7h5a3 3 0 0 1 3 3" />
          <path d="M3 16h18" />
        </>
      );
      break;

    case "television":
      icon = (
        <>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="m8 21 4-4 4 4" />
          <path d="M9 21h6" />
        </>
      );
      break;

    case "wifi":
      icon = (
        <>
          <path d="M5 12.5a10 10 0 0 1 14 0" />
          <path d="M8.5 16a5 5 0 0 1 7 0" />
          <path d="M12 20h.01" />
          <path d="M2 9a15 15 0 0 1 20 0" />
        </>
      );
      break;

    case "essentials":
      icon = (
        <>
          <path d="M5 20h14" />
          <path d="M7 20V10h10v10" />
          <path d="M9 10V6h6v4" />
          <path d="M10 6V3h4v3" />
          <path d="M10 14h4" />
        </>
      );
      break;

    case "parking":
      icon = (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 17V7h3a3 3 0 0 1 0 6h-3" />
        </>
      );
      break;

    default:
      icon = <circle cx="12" cy="12" r="8" />;
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      {icon}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl space-y-3 ${className ?? ""}`}>
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
    <article className="border border-stone-300 bg-white p-7 sm:p-8">
      <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-stone-200">
        <Image
          src={room.imageSrc}
          alt={room.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
        {room.eyebrow}
      </p>

      <h3 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">
        {room.title}
      </h3>

      <p className="mt-5 text-base leading-7 text-slate-700">
        {room.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 text-xs text-slate-700">
        {room.details.map((detail) => (
          <li
            key={detail}
            className="rounded-full bg-stone-100 px-3 py-2"
          >
            {detail}
          </li>
        ))}
      </ul>

      <a
        href={contactDetails.whatsappUrl}
        className="mt-5 flex min-h-12 w-full items-center justify-center border border-slate-700 px-5 py-3 text-center text-sm text-slate-800 transition hover:bg-slate-800 hover:text-white"
        aria-label={`${room.ctaLabel} on WhatsApp`}
        rel="noopener noreferrer"
      >
        {room.ctaLabel}
      </a>
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
    case "institute":
      return (
        <svg {...iconProps} aria-label="Institute building">
          <path d="M3 21h18M3 21V5h2V2h2v3h4V2h2v3h2v16M7 9h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zM7 14h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
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
  const cardContent = (
    <article className="group rounded-2xl border border-amber-500/20 p-6 shadow-lg transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl" style={{ backgroundColor: "rgba(15, 23, 42, 0.75)", backdropFilter: "blur(8px)" }}>
      <div className="mb-3 inline-flex rounded-full bg-amber-500 p-3 transition-colors group-hover:bg-amber-600">
        <PropertyIcon type={locality.icon} />
      </div>
      <h3 className="text-base font-semibold text-white">{locality.title}</h3>
      <p className="mt-2 text-sm leading-5 text-gray-600">{locality.description}</p>
    </article>
  );

  if (locality.link) {
    return (
      <a href={locality.link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
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
            <div className="max-w-xl text-white lg:-translate-y-8">
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 -top-16 -mb-16 sm:-top-20 sm:-mb-20 lg:-top-32 lg:-mb-32 relative">
              {localities.map((locality) => (
                <LocalityCard key={locality.id} locality={locality} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Welcome to Sindhu Suites
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Premium 2 BHK Serviced Apartments Near M.S. Ramaiah Hospital, Bengaluru
                </h2>
              </div>

              <div className="mt-8 space-y-4 text-lg leading-8 text-slate-700">
                <p>
                  Welcome to <strong>Sindhu Suites</strong>, your premier destination for luxury serviced apartments in RMV 2nd Stage, Bengaluru. Whether you are visiting for business, medical travel near M.S. Ramaiah Hospital, or a relaxed family vacation, our modern 2 BHK suites offer the perfect blend of high-end hotel convenience and home comfort.
                </p>
                <p>
                  Each fully furnished apartment features spacious living areas, high-speed Wi-Fi, air-conditioned bedrooms, clean private bathrooms, and a fully equipped kitchen complete with modern appliances. Conveniently located near IISc, Yeshwanthpur, and Orion Mall, Sindhu Suites offers easy connectivity to North Bangalore&apos;s top business, healthcare, and dining hubs.
                </p>
              </div>
            </div>

            <div className="property-showcase" aria-label="Sindhu Suites property gallery">
              <div className="property-showcase__viewport">
                <div className="property-showcase__column">
                  <div className="property-showcase__track property-showcase__track--up" style={{ ["--duration" as string]: "22s" }}>
                    <div className="property-showcase__group">
                      {propertyShowcaseImages.map((image) => (
                        <div key={`${image.src}-a`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="property-showcase__group" aria-hidden="true">
                      {propertyShowcaseImages.map((image) => (
                        <div key={`${image.src}-b`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="property-showcase__column">
                  <div className="property-showcase__track property-showcase__track--down" style={{ ["--duration" as string]: "27s" }}>
                    <div className="property-showcase__group">
                      {[...propertyShowcaseImages].reverse().map((image) => (
                        <div key={`${image.src}-c`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="property-showcase__group" aria-hidden="true">
                      {[...propertyShowcaseImages].reverse().map((image) => (
                        <div key={`${image.src}-d`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="property-showcase__column">
                  <div className="property-showcase__track property-showcase__track--up" style={{ ["--duration" as string]: "24s" }}>
                    <div className="property-showcase__group">
                      {propertyShowcaseImages.map((image) => (
                        <div key={`${image.src}-e`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="property-showcase__group" aria-hidden="true">
                      {propertyShowcaseImages.map((image) => (
                        <div key={`${image.src}-f`} className="property-showcase__card">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 23vw, 42vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section className="relative bg-[#1a1a1a] text-white py-20 md:py-24 px-6 md:px-16 overflow-hidden border-t border-gray-800">
        {/* Subtle Lined Grid Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          id="accommodation"
          className="border-y border-stone-200 bg-stone-100"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div>
            <span className="text-[#c79d63] text-xs uppercase tracking-widest font-semibold block mb-3">
              CONTACT
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-4">
              We’re Here to Help
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mb-8">
              Have questions or planning your stay? Use the verified contacts below to check availability or learn more about Sindhu Suites.
            </p>
          </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {rooms.map((room) => (
                <RoomCard key={room.title} room={room} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="amenities"
          className="bg-[#f3f1eb] px-6 py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex bg-blue-700 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white">
                Everything for an easy stay
              </p>

              <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                Comforts that feel like home
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Both apartments offer the same complete set of facilities for a
                self-sufficient, comfortable stay.
              </p>
            </div>

            <ul className="mt-10 grid border-l border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-3">
              {stayComforts.map((comfort) => (
                <li
                  key={comfort.title}
                  className="group relative z-0 flex min-h-64 flex-col border-b border-r border-stone-300 bg-white/20 p-6 transition duration-300 motion-safe:hover:z-10 motion-safe:hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_-28px_rgba(15,23,42,0.45)] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/15 bg-emerald-950 text-white transition duration-300 group-hover:scale-105 group-hover:bg-emerald-900">
                    <ComfortIcon type={comfort.icon} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl text-emerald-950">
                    {comfort.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                    {comfort.description}
                  </p>

                  <p className="mt-5">
                    <span className="inline-flex rounded-full bg-emerald-950 px-3 py-1.5 text-xs font-semibold tracking-wide text-white">
                      {comfort.badge}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>


      {/* Well Connected Section */}
      <section className="bg-[#1e3e3b] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c79d63] text-xs uppercase tracking-widest font-semibold block mb-3">
              Positioned in the heart of Bengaluru,
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Stay close to what matters most.
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              Sindhu Suites keeps you effortlessly connected to major hospitals, universities, corporate hubs, and the airport. Enjoy seamless access to the city while relaxing in the comfort and privacy of your own fully equipped apartment.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/20 p-6 rounded-none bg-transparent">
              <h3 className="font-semibold text-lg mb-1">
                🏥 Minutes to MS Ramaiah Hospital
              </h3>
              <p className="text-gray-300 text-sm">
                Walkable convenience for medical stays, attending families, and visiting doctors.
              </p>
            </div>
            <div className="border border-white/20 p-6 rounded-none bg-transparent">
              <h3 className="font-semibold text-lg mb-1">
                🎓 Near IISc Campus
              </h3>
              <p className="text-gray-300 text-sm">
                Ideally located for researchers, academics, and university visitors.
              </p>
            </div>
            <div className="border border-white/20 p-6 rounded-none bg-transparent">
              <div className="flex items-center gap-2 mb-1">
                <div className="bg-[#c79d63] text-[#1e3e3b] rounded-full p-1 text-xs">
                  ✈️
                </div>
                <h3 className="font-semibold text-lg">
                  Connected for onward travel
                </h3>
              </div>
              <p className="text-gray-300 text-sm pl-7">
                Approximately a 20-minute drive to Kempegowda International Airport, subject to traffic.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Map Section */}
      <section className="bg-[#f2efe9] py-16 px-6 md:px-16 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Text Block */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#c79d63] text-xs uppercase tracking-widest font-semibold block mb-3">
              Plan Your Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e3e3b] mb-4 font-semibold">
              Find Your Way to Sindhu Suites
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Open your route directly in Google Maps to view estimated travel time and distance from where you are. Feel free to explore nearby landmarks and essentials ahead of your stay.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href="https://maps.google.com/?q=Sindhu+Suites+Sanjaynagar+Bengaluru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1e3e3b] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#152e2c] transition-colors"
              >
                Get directions
              </a>
              <a 
                href="https://maps.google.com/?q=Sindhu+Suites+Sanjaynagar+Bengaluru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-gray-300 text-gray-800 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded hover:bg-gray-50 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>

            <p className="text-xs text-gray-400">
              Google Maps uses the visitor’s selected or permitted location to calculate distance and travel time.
            </p>
          </div>

          {/* Right Map Block */}
          <div className="relative min-h-[350px] w-full bg-gray-100">
            <iframe
              title="Sindhu Suites Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0526972076043!2d77.5748!3d13.0323!2m3!100!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzE2LjIiTiA3N8KwMzQnMjkuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      <section className="bg-[#c76a38] text-white py-20 md:py-24 px-6 md:px-16">
          <div>
            <span className="text-[#c79d63] text-xs uppercase tracking-widest font-semibold block mb-3">
              CONTACT
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-4">
              We’re Here to Help
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mb-8">
              Have questions or planning your stay? Use the verified contacts below to check availability or learn more about Sindhu Suites.
            </p>
          </div>
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