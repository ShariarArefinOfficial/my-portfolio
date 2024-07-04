import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


//====Shared Component
import Header from "@/components/Shared/Header";
import PageTransition from "@/components/PageTransition/PageTransition";
import StairTransition from "@/components/PageTransition/StairTransition";
import Footer from "@/components/Footer";

const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-jetBrainMono"

});

export const metadata = {
  title: "Shariar's Portfolio",
  description: "A Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header></Header>
        <StairTransition></StairTransition>
        <PageTransition>
        {children}

        </PageTransition>
        <Footer></Footer>



        



      </body>
    </html>
  );
}
