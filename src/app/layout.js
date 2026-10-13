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
  metadataBase: new URL("https://agency.appseapro.com"),
  title: "AppSeaPro | IT-Бутик цифровых экосистем Елены Сотниковой",
  description:
    "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
  keywords: [
    "PWA визитка",
    "цифровая визитка",
    "Smart QR меню",
    "разработка меню для ресторанов",
    "HoReCa меню",
    "NFC визитка",
    "кожа Crazy Horse",
    "IT бутик",
    "Елена Сотникова",
    "веб разработка под ключ",
    "PWA для салонов красоты",
    "электронная визитка",
    "AppSeaPro",
  ],
  authors: [{ name: "Елена Сотникова", url: "https://t.me/elenlime" }],
  creator: "Елена Сотникова",
  publisher: "AppSeaPro",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AppSeaPro | IT-Бутик цифровых экосистем Елены Сотниковой",
    description:
      "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
    url: "https://agency.appseapro.com",
    siteName: "AppSeaPro",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/elena-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "AppSeaPro — IT-Бутик цифровых экосистем Елены Сотниковой",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppSeaPro | IT-Бутик цифровых экосистем Елены Сотниковой",
    description:
      "Премиальные PWA-визитки, Smart QR-меню и NFC-аксессуары из кожи Crazy Horse под ключ. Разработка в вашу собственность: без процентов с заказов и кабальных подписок.",
    images: ["/elena-portrait.jpg"],
    creator: "@elenlime",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://agency.appseapro.com/#organization",
      "name": "AppSeaPro",
      "alternateName": "IT-Бутик цифровых экосистем Елены Сотниковой",
      "url": "https://agency.appseapro.com",
      "logo": "https://agency.appseapro.com/favicon.png",
      "image": "https://agency.appseapro.com/elena-portrait.jpg",
      "description":
        "Премиальные PWA-визитки, Smart QR-меню для HoReCa и авторские NFC-аксессуары из винтажной кожи Crazy Horse под ключ.",
      "founder": {
        "@type": "Person",
        "name": "Елена Сотникова",
        "jobTitle": "IT-Архитектор, Веб-разработчик",
        "url": "https://t.me/elenlime",
      },
      "sameAs": [
        "https://t.me/appseapro",
        "https://t.me/elenlime",
        "https://t.me/restaurant_appseapro",
      ],
      "priceRange": "$$$",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "60",
        "highPrice": "800",
        "offerCount": "6",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://agency.appseapro.com/#website",
      "url": "https://agency.appseapro.com",
      "name": "AppSeaPro",
      "description": "IT-Бутик цифровых экосистем Елены Сотниковой",
      "publisher": {
        "@id": "https://agency.appseapro.com/#organization",
      },
      "inLanguage": "ru-RU",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#050505] text-[#F3F4F6]">
        {children}
      </body>
    </html>
  );
}