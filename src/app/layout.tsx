import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jack Cosméticos | Multimarcas de Beleza",
  description: "Descubra a sua beleza com os melhores produtos O Boticário, Natura e Avon com a Consultora Jack! Envio rápído e pagamento via Pix.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
