import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Official Sindhu Suites | Bengaluru",
  description:
    "Official Sindhu Suites homepage in Bengaluru with verified contact details, amenities, and accommodation information.",
  openGraph: {
    title: "Official Sindhu Suites | Bengaluru",
    description:
      "Official Sindhu Suites homepage in Bengaluru with verified contact details, amenities, and accommodation information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
