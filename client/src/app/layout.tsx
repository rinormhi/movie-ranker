"use client";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);
// export const metadata: Metadata = {
//   title: "MovieRanker",
//   description: "Made by Rinor",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className="text-white">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
