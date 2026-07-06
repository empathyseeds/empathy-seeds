import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SITE_NAME, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Conscious parenting guidance, emotional intelligence resources, and practical support for healthier parent-child relationships.",
  keywords: [
    "conscious parenting",
    "parenting guidance",
    "emotional intelligence",
    "child development",
    "parent child relationship",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_NAME,
    description:
      "Conscious parenting guidance and emotional intelligence resources for healthier families.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}
