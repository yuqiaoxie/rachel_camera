import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.zh.metadata.title,
  description: siteContent.zh.metadata.description
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
