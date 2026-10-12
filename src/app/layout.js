import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "AppSeaPro | IT-Бутик цифровых экосистем Елены",
  description:
    "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AppSeaPro | IT-Бутик цифровых экосистем Елены",
    description:
      "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
    url: "https://agency.appseapro.com",
    siteName: "AppSeaPro",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppSeaPro | IT-Бутик цифровых экосистем Елены",
    description:
      "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#050505] text-[#F3F4F6]">
        {children}
      </body>
    </html>
  );
}