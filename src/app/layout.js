import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Event Kampus | Universitas Nurul Huda",
  description: "Sistem Informasi Event Kampus Universitas Nurul Huda. Temukan berbagai event menarik seperti seminar, workshop, lomba, bazar, dan festival di lingkungan kampus.",
  keywords: "event kampus, universitas nurul huda, seminar, workshop, lomba, bazar, festival, mahasiswa",
  authors: [{ name: "Universitas Nurul Huda" }],
  openGraph: {
    title: "Event Kampus | Universitas Nurul Huda",
    description: "Sistem Informasi Event Kampus Universitas Nurul Huda",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
