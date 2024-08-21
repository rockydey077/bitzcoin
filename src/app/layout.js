import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BitzCoin - Crypto Exchange",
  description: "Crypto Exchange Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} max-w-screen-2xl mx-auto`}>
        {/* <Navbar /> */}
        <section>{children}</section>
      </body>
    </html>
  );
}
