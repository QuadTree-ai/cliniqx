/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./Metadata";

const inter = Inter({ subsets: ["latin"] });

type IconsType = string | string[];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const renderIcons = (icons: IconsType) => {
    if (Array.isArray(icons)) {
      return icons.map((icon, index) => (
        <link key={index} rel="icon" href={icon} />
      ));
    }
    return <link rel="icon" href={icons} />;
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {renderIcons(metadata.icons.icon)}
        {renderIcons(metadata.icons.apple)}
        {renderIcons(metadata.icons.shortcut)}
        <link rel="manifest" href={metadata.manifest} />
        <link
          href="https://fonts.googleapis.com/css2?family=Capriola&family=Baumans&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  );
}
