import "./globals.css";
import { QueryProvider } from "@/context/QueryProvider";
import { GeneralProvider } from "@/context/GeneralContext";
import { ThemeProvider } from "@/components/theme-provider";
import Head from 'next/head';

export const metadata = {
  title: "Manoj Gohel",
  description: "Personal portfolio of Manoj Gohel - Software Engineer & Digital Craftsman specializing in modern web development",
  keywords: [
    "Manoj Gohel",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Expert",
    "JavaScript Developer",
    "TypeScript Developer",
    "Modern Web Development",
    "Digital Portfolio",
    "Tech Portfolio",
    "Web Development Services",
    "Full Stack Developer",
    "Web Design Consultant"
  ],
  openGraph: {
    title: "Manoj Gohel - Software Engineer",
    description: "Professional portfolio showcasing my work and skills in web development",
    url: "https://manojgohel.com",
    siteName: "Manoj Gohel",
    images: [
      {
        url: "https://manojgohel.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Gohel - Software Engineer",
    description: "Professional portfolio showcasing my work and skills in web development",
    images: ["https://manojgohel.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manoj Gohel",
    "jobTitle": "Software Engineer",
    "url": "https://manojgohel.com",
    "sameAs": [
      "https://github.com/manojgohel",
      "https://twitter.com/manojgohel"
    ],
    "description": "Professional software engineer specializing in modern web technologies",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <GeneralProvider>
              {children}
            </GeneralProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
