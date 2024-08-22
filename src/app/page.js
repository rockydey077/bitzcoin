import About from "@/components/HomeComponents/About";
import Connect from "@/components/HomeComponents/Connect";
import Currency from "@/components/HomeComponents/Currency";
import Header from "@/components/HomeComponents/Header";
import Newsletter from "@/components/HomeComponents/Newsletter";
import Review from "@/components/HomeComponents/Review";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Connect />
      <Currency />
      <Review />
      <Newsletter />
    </main>
  );
}
