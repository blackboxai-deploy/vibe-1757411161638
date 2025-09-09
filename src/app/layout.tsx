import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World | Modern Next.js App",
  description: "A beautiful hello world page built with Next.js and Tailwind CSS",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}