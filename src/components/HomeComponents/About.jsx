import bitcoinImg from "../../../public/assets/coins/bitcoin.png";
import usdcImg from "../../../public/assets/coins/usdc.png";
import xrpImg from "../../../public/assets/coins/xrp-symbol-white-128.png";
import solanaImg from "../../../public/assets/coins/solana.png";
import tetherImg from "../../../public/assets/coins/Tether.png";
import Image from "next/image";
import styles from "./About.module.css";
import aboutImg from "../../../public/assets/about-dec-v3.png";

const About = () => {
  return (
    <div id='about' className='pb-24'>
      <div className='relative'>
        <svg
          className='rotate-180 fill-white -mt-9 lg:-mt-36'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 100'
          preserveAspectRatio='none'>
          <path
            className='elementor-shape-fill'
            d='M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z'></path>
        </svg>
        <div className='max-w-screen-xl mx-auto flex justify-center'>
          <div className='absolute -top-[95%] lg:-top-1/4 grid grid-cols-2 lg:grid-cols-5 gap-8'>
            <div
              className={`bg-white ${styles.coins_shadow} p-8 lg:px-[69px] lg:py-12 rounded-xl`}>
              <div className='flex items-center gap-2 mb-1'>
                <Image
                  className='w-8'
                  src={bitcoinImg}
                  width={200}
                  height={200}
                  alt=''
                />
                <h5 className='text-slate-700 font-medium'>Bitcoin</h5>
              </div>
              <p className='text-lg text-slate-700'>$60,384.00</p>
            </div>
            <div
              className={`bg-white ${styles.coins_shadow} p-8 lg:px-[69px] lg:py-12 rounded-xl`}>
              <div className='flex items-center gap-2 mb-1'>
                <Image
                  className='w-8'
                  src={tetherImg}
                  width={200}
                  height={200}
                  alt=''
                />
                <h5 className='text-slate-700 font-medium'>Tether</h5>
              </div>
              <p className='text-lg text-slate-700'>$1.00</p>
            </div>
            <div
              className={`bg-white ${styles.coins_shadow} p-8 lg:px-[69px] lg:py-12 rounded-xl`}>
              <div className='flex items-center gap-2 mb-1'>
                <Image
                  className='w-8'
                  src={solanaImg}
                  width={200}
                  height={200}
                  alt=''
                />
                <h5 className='text-slate-700 font-medium'>Solana</h5>
              </div>
              <p className='text-lg text-slate-700'>$141.80</p>
            </div>
            <div
              className={`bg-white ${styles.coins_shadow} p-8 lg:px-[69px] lg:py-12 rounded-xl`}>
              <div className='flex items-center gap-2 mb-1'>
                <Image
                  className='w-8'
                  src={xrpImg}
                  width={200}
                  height={200}
                  alt=''
                />
                <h5 className='text-slate-700 font-medium'>XRP</h5>
              </div>
              <p className='text-lg text-slate-700'>$0.5985</p>
            </div>
            <div
              className={`bg-white ${styles.coins_shadow} p-8 lg:px-[69px] lg:py-12 rounded-xl`}>
              <div className='flex items-center gap-2 mb-1'>
                <Image
                  className='w-8'
                  src={usdcImg}
                  width={200}
                  height={200}
                  alt=''
                />
                <h5 className='text-slate-700 font-medium'>USDC</h5>
              </div>
              <p className='text-lg text-slate-700'>$1.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:pt-20 pt-[450px] ${styles.about_bg} bg-white px-5`}>
        <div className='max-w-screen-xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center'>
            <div>
              <Image
                className='w-full lg:w-3/4'
                src={aboutImg}
                width={400}
                height={400}
                alt=''
              />
            </div>
            <div className='space-y-4'>
              <h2 className='text-slate-800 text-3xl lg:text-4xl font-bold uppercase text-center lg:text-start'>
                What is icash.one?
              </h2>
              <p className='text-slate-600 text-lg text-center lg:text-start'>
                Our world-class proven platform offers the most seamless and
                convenient transactions through pre-paid vouchers in local or
                global currencies, access to multiple and sophisticated markets
                and merchants with ease.
              </p>
              <p className='text-slate-600 text-lg text-center lg:text-start'>
                Our dedicated team of professionals, with over a decade of
                experience in the business, will make sure you meet your
                particular and specific needs and will provide ongoing support.
              </p>
              <div className='flex justify-around text-xl lg:text-4xl text-slate-800 pt-5 lg:pt-10'>
                <h2>Trusted</h2>
                <h2>Seamless</h2>
                <h2>User-Oriented</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
