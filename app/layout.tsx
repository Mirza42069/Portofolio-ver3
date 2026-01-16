import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mir • portfolio",
  description:
    "22 y/o computer engineering student passionate about making websites. Building PCs and editing videos.",
  keywords: ["developer", "web developer", "portfolio", "mirza"],
  authors: [{ name: "Mirza" }],
  openGraph: {
    title: "Mirza - Developer",
    description: "22 y/o computer engineering student passionate about making websites.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mirza - Developer",
    description: "22 y/o computer engineering student passionate about making websites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
