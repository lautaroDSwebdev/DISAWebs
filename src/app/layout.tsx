import type { Metadata } from "next";
import { LanguageContextProvider } from "./_context/LanguageContext";



export const metadata: Metadata = {
  title: "DISA Webs",
  description: "!Desarrollo tu pagina a medida para mejorar tu presencia digital¡",
  icons: {
    icon: "/logo-pagina1.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body >
        <LanguageContextProvider>
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  );
}
