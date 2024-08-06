import type { Metadata } from "next";
import {  Ubuntu} from "next/font/google";
import "./styles/global.scss";
import TopBar from "./components/common/TopBar/TopBar";
import Footer from "./components/common/Footer/Footer";

const ubuntu = Ubuntu(
  {
    weight: ["400", "700"],
    subsets: ["latin"],
  }
);
export const metadata: Metadata = {
  title: "Khana Bana - Restaurant & Food Delivery Application",
  description: "The Restaurant Application is a comprehensive platform enabling users to reserve tables, order food online, and manage accounts, developed using Next js. This application aims to provide an immersive and user-friendly experience for food enthusiasts, featuring real-time updates, and efficient data handling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div>
          <TopBar/>
        {children}
          <Footer/>

        </div>
        
        
        </body>
    </html>
  );
}
