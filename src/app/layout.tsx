import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richmond Andoh | Frontend Developer",
  description: "Personal portfolio of Richmond Andoh, a Frontend-Focused Full-Stack Developer based in Ghana.",
  keywords: ["Frontend Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Ghana"],
  authors: [{ name: "Richmond Andoh" }],
  creator: "Richmond Andoh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richmondandoh.vercel.app",
    title: "Richmond Andoh | Frontend Developer",
    description: "Personal portfolio of Richmond Andoh, a Frontend-Focused Full-Stack Developer based in Ghana.",
    siteName: "Richmond Andoh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmond Andoh | Frontend Developer",
    description: "Personal portfolio of Richmond Andoh, a Frontend-Focused Full-Stack Developer based in Ghana.",
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
