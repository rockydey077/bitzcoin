import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";

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
      <body
        suppressHydrationWarning={true}
        className={`${roboto.className} max-w-screen-2xl mx-auto`}>
        <section>
          <StoreProvider>{children}</StoreProvider>
        </section>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
