import styles from "./Currency.module.css";
import indiaImg from "../../../public/assets/currency/Icash.one-India.png";
import mexicoImg from "../../../public/assets/currency/Icash.one-Mexico.png";
import japanImg from "../../../public/assets/currency/Icash.one-Japan.png";
import arabImg from "../../../public/assets/currency/Icash.one-Arab-Emirates.png";
import Image from "next/image";

const Currency = () => {
  return (
    <div className={`${styles.currency_bg}`}>
      <div className=''>
        <svg
          className='fill-[#EEFAFF] rotate-180'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 100'
          preserveAspectRatio='none'>
          <path
            class='elementor-shape-fill'
            d='M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z'></path>
        </svg>
      </div>
      <div className='max-w-screen-xl mx-auto pt-5 pb-24'>
        <h3 className='text-center text-2xl lg:text-3xl font-bold text-white mb-10'>
          AVAILABLE ASTROPAY WITH THEIR RESPECTIVE CURRENCY
        </h3>
        <div className='flex flex-col lg:flex-row justify-evenly items-center gap-6'>
          <div className='w-fit'>
            <div className='bg-[#18181C] rounded-t-md'>
              <Image
                className='-z-10'
                src={indiaImg}
                width={200}
                height={200}
                alt=''
              />
            </div>
            <p className=' py-3 text-center bg-white text-lg text-slate-800 border border-slate-400 rounded-b-md'>
              Astropay India INR
            </p>
          </div>
          <div className='w-fit'>
            <div className='bg-[#18181C] rounded-t-md'>
              <Image
                className='-z-10'
                src={mexicoImg}
                width={200}
                height={200}
                alt=''
              />
            </div>
            <p className=' py-3 text-center bg-white text-lg text-slate-800 border border-slate-400 rounded-b-md'>
              Astropay Mexico MXN
            </p>
          </div>
          <div className='w-fit'>
            <div className='bg-[#18181C] rounded-t-md'>
              <Image
                className='-z-10'
                src={japanImg}
                width={200}
                height={200}
                alt=''
              />
            </div>
            <p className=' py-3 text-center bg-white text-lg text-slate-800 border border-slate-400 rounded-b-md'>
              Astropay Japan JPY
            </p>
          </div>
          <div className='w-fit'>
            <div className='bg-[#18181C] rounded-t-md'>
              <Image
                className='-z-10'
                src={arabImg}
                width={200}
                height={200}
                alt=''
              />
            </div>
            <p className=' py-3 text-center bg-white text-lg text-slate-800 border border-slate-400 rounded-b-md'>
              Astropay UAE AED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
