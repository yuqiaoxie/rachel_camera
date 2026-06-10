import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.en.metadata.title,
  description: siteContent.en.metadata.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
