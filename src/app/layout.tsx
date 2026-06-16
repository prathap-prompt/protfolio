import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Prathap Reddy | Backend Developer",
  description:
    "Backend Developer specializing in NestJS, TypeScript, PostgreSQL, and RESTful APIs. Building scalable, secure backend systems for fintech and high-growth startups.",
  keywords: [
    "Backend Developer",
    "NestJS Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "REST API",
    "JWT Authentication",
    "Prathap Reddy",
    "Fintech Developer",
    "AWS",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Prathap Reddy" }],
  creator: "Prathap Reddy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathapreddy.dev",
    title: "Prathap Reddy | Backend Developer",
    description:
      "Backend Developer specializing in NestJS, TypeScript, PostgreSQL, and RESTful APIs.",
    siteName: "Prathap Reddy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prathap Reddy - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathap Reddy | Backend Developer",
    description:
      "Backend Developer specializing in NestJS, TypeScript, PostgreSQL, and RESTful APIs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
