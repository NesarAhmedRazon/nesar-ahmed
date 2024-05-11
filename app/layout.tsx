import "@/styles/globals.scss";
import { poppins, tiro } from "@/utils/GlobalFonts";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${poppins.variable} ${tiro.variable}`}
    >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "",
    "https://nesarahmed.dev"
  ),
  type: "website",
  title: {
    default: "Nesar Ahmed",
    template: "%s | Nesar Ahmed"
  },

  alternates: {
    canonical: "/"
  }
};
