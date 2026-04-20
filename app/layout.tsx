import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Կարեն և Լիկա",
  description: "Կարեն և Լիկա",
  openGraph: {
    title: "Կարենի և Լիկայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://site-up-all-in-one-1.vercel.app/",
    siteName: "Կարեն և Լիկա",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
