import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachel Camera | Natural Travel Portrait Photography",
  description:
    "Natural travel portrait photography sessions for couples, solo travelers, families, and creative brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
