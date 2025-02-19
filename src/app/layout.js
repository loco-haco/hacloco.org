import { Inter } from "next/font/google";
import "./globals.css";

import Head from 'next/head'
import Link from 'next/link'
import Footer from "./components/footer"



import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HacLoCo.org",
  description: "digital hacking community",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <SignedOut>
       {/*** <SignInButton /> */}  
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
        <Footer/>
        </body>
     
    </html>
   
      </ClerkProvider>
      
  );
}
