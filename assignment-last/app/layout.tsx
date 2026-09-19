import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlyRank AI Coach",
  description:
    "FlyRank helps students and job seekers plan projects, portfolio work, and recruiting actions with an AI coach.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
