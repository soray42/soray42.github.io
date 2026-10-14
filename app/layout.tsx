import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const caslon = localFont({
  src: [
    {
      path: "./fonts/LibreCaslonText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LibreCaslonText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/LibreCaslonText-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/LibreCaslonText-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Haotian Yang (Sora)",
  description:
    "Haotian Yang (Sora), second-year BEMACS undergraduate at Bocconi University. Independent research on LLM post-training, reinforcement learning, and language-model behavior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caslon.className}>{children}</body>
    </html>
  );
}
