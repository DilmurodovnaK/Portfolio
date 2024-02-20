
import type { Metadata } from "next";
import {Domine} from 'next/font/google'
import "./globals.css";
import "./index.css";
import Nav from "@/components/header/nav";
import { Footer } from "@/components/footer/footer";
import ThemeSwitch from "@/components/switch";
import ThemeContextProvider from "./context/theme";
const domine= Domine({subsets: ['latin-ext']}) ;

export const metadata = {
  title: "Portfolio",
  description: "my first portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 <body className={`${domine.className}  bg-[#A5D7E8] text-black dark:bg-gradient-to-t from-teal-900 to-indigo-900 dark:text-white `}> 
 <ThemeContextProvider>
 <header>
  <Nav/>
 </header>
 <main>{children}</main>
 <footer>
 
  <ThemeSwitch/>
 </footer>
 </ThemeContextProvider>
 </body>
    </html>
  );
}
