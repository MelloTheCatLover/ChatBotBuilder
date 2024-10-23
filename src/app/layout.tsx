import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";


const font = DM_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Chat Bot Builder",
  description: "Create bots with our app easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
      </body>
    </html>
  );
}
