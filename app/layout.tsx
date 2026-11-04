import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dukeofarts.com"),
  title: "Lauren Duke | Duke O'FArts — Voiceover, Comedy & More",
  description:
    "Meet Lauren Duke: voiceover artist, comedian, audiobook narrator and host of the Duke O'FArts Podcast. Hear the work, explore the shows and connect.",
  openGraph: {
    title: "Duke O'FArts | Lauren Duke",
    description: "One artist. A whole cast of characters.",
    url: "https://www.dukeofarts.com",
    siteName: "Duke O'FArts",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
