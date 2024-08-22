import { Roboto } from "next/font/google";
import "./globals.css";

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
        <section>{children}</section>
      </body>
    </html>
  );
}
