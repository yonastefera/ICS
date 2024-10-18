import type { Metadata, Viewport } from "next";

import "./globals.css";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import { AppThemeProvider } from "./_components/providers/theme-provider";
import { CssBaseline } from "@mui/material";
import { SnackBarProvider } from "./_components/providers/snackbar-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082158",
};

const description =
  "Founded in 2017, Icreativv Consulting and Service, LLC offers Enterprise IT Solutions, Software Engineering, Cybersecurity, and Program & Project Management.";
const title = "Icreativv Consulting and Service";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Software engineering",
    "Cyber Security",
    "Cloud Migration",
    "Enterprise IT Solutions",
    "Digital Transformation",
    "Artificial Intelligence (AI)",
  ],
  authors: {
    name: "Yonas Tefera",
    url: "https://www.linkedin.com/company/icreativv-consulting-services"
  },
  alternates: {
    canonical: `https://www.icreativv.com`,
  },
  twitter: {
    card: "summary",
    title,
    description,
    // site: "@twitterhandle",
  },
  openGraph: {
    url: `https://www.icreativv.com`,
    type: "website",
    title,
    description,
  },
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
          <SnackBarProvider>
            <Header />
            {children}
            <Footer />
            <CssBaseline />
          </SnackBarProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
