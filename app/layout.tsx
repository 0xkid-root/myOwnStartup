import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton';


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piecodingschools.com"),

  title: {
    default: "piecodingschools - Build Industry-Ready Developers",
    template: "%s | piecodingschools",
  },

  description:
    "Learn Full Stack, AI, Blockchain, DevOps, and real startup development through internships, bootcamps, and apprenticeship programs.",
 verification: {
    google: "Io_4U3HwpwUJh47T_vgbV7JTVEmBVifnMA-sVDgxrxc",
  },

  keywords: [
    "Full Stack Internship",
    "AI Bootcamp",
    "Blockchain Training",
    "DevOps Training",
    "Web Development Internship",
    "Software Engineering Internship",
    "Next.js Bootcamp",
    "MERN Stack Training",
    "Student Internship Program",
    "piecodingschools",
  ],

  authors: [{ name: "piecodingschools" }],
  creator: "piecodingschools",
  publisher: "piecodingschools",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "piecodingschools - Build Industry-Ready Developers",
    description:
      "Practical internship and bootcamp programs designed to help students build real-world skills and launch tech careers.",
    url: "https://piecodingschools.com",
    siteName: "piecodingschools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "piecodingschools",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "piecodingschools",
    description:
      "Learn AI, Full Stack, Blockchain & real startup development.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/piecodingschool.png",
    shortcut: "/piecodingschool.png",
    apple: "/piecodingschool.png",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KY982CWVJK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KY982CWVJK');
          `}
        </Script>

        {/* Structured Data SEO */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "piecodingschools",
            url: "https://piecodingschools.com",
            logo: "https://piecodingschools.com/piecodingschool.png",
            description:
              "Industry-focused internships, bootcamps, and apprenticeship programs for developers.",
            sameAs: [
              "https://twitter.com/",
              "https://linkedin.com/",
              "https://github.com/",
            ],
          })}
        </Script>

        {children}
        <WhatsAppChatButton />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}