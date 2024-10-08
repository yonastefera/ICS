import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import { AppThemeProvider } from "./_components/theme-provider";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "ICS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <Header />
          {children}
          <Footer />
          <CssBaseline />
        </AppThemeProvider>
      </body>
    </html>
  );
}
