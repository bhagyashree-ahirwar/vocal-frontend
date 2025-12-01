

"use client";

import { usePathname } from "next/navigation";
import "./globals.css";

// Correct imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer only on landing page
  const hideLayout = pathname === "/";

  return (
    <html lang="en">
      <body>
        {!hideLayout && <Navbar />}

        {children}

        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
