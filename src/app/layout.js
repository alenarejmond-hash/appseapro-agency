import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'AppSeaPro | Цифровые визитки и QR-меню премиум класса',
  description: 'Закажите премиальную цифровую визитку в телефон, NFC-брелок или электронное QR-меню для ресторана. WOW-эффект для бизнеса с первого клика.',
  keywords: ['цифровая визитка', 'электронная визитка в телефон', 'nfc визитка брелок', 'qr меню для ресторана', 'разработка сайтов', 'premium web'],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
