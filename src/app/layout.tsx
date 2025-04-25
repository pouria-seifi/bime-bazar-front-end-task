import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import Home from "@/src/routes/home";
import "@/src/app/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "BimeBazar Front-end Task",
  description: "BimeBazar Front-end Task",
};

export default function RootLayout({
  children,
  modal,
  success,
  failedSubmit,
}: Readonly<{
  children: React.ReactNode;
  success: React.ReactNode;
  modal: React.ReactNode;
  failedSubmit: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className}`}>
        {children}
        {success}
        {modal}

        {/* i wanted to have failedSubmit modal inside VehicleOwnerDetailsForm  */}
        {/* because i wanted to have button with type submit to be able to submit form */}
        {/* on clicking on retry button in failed submit modal */}
        <Home>{failedSubmit}</Home>
      </body>
    </html>
  );
}
