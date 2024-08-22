import styles from "./Connect.module.css";
import connect1 from "../../../public/assets/connect/1.jpg";
import connect2 from "../../../public/assets/connect/2.png";
import connect3 from "../../../public/assets/connect/3.png";
import connect4 from "../../../public/assets/connect/4.png";
import Image from "next/image";

const Connect = () => {
  return (
    <div className={`bg-[#EEFAFF] py-24 ${styles.connect_bg}`}>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-center text-2xl lg:text-3xl font-bold text-slate-800 mb-10'>
          Connect with Us on WhatsApp
        </h2>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <div
              className={`p-10 space-y-3 text-center bg-white rounded-xl w-fit ${styles.container_shadow}`}>
              <div className=''>
                <Image
                  className={`w-28 inline-block h-28 rounded-full ${styles.img_shadow}`}
                  src={connect2}
                  width={200}
                  height={200}
                  alt=''
                />
              </div>
              <div className='space-y-2'>
                <h4 className='text-lg font-medium text-slate-800'>
                  Kasyap Trader
                </h4>
                <p className='text-base text-slate-600'>
                  WhatsApp: +916203416379
                </p>
                <button className='bg-[#ECA404] px-5 py-2 rounded-full text-white font-medium'>
                  WhatsApp Now
                </button>
              </div>
            </div>
            <div
              className={`p-10 space-y-3 text-center bg-white rounded-xl w-fit ${styles.container_shadow}`}>
              <div className=''>
                <Image
                  className={`w-28 inline-block h-28 rounded-full ${styles.img_shadow}`}
                  src={connect1}
                  width={200}
                  height={200}
                  alt=''
                />
              </div>
              <div className='space-y-2'>
                <h4 className='text-lg font-medium text-slate-800'>
                  Kislay Trader
                </h4>
                <p className='text-base text-slate-600'>
                  WhatsApp: +917368869621
                </p>
                <button className='bg-[#ECA404] px-5 py-2 rounded-full text-white font-medium'>
                  WhatsApp Now
                </button>
              </div>
            </div>
            <div
              className={`p-10 space-y-3 text-center bg-white rounded-xl w-fit ${styles.container_shadow}`}>
              <div className=''>
                <Image
                  className={`w-28 inline-block h-28 rounded-full ${styles.img_shadow}`}
                  src={connect3}
                  width={200}
                  height={200}
                  alt=''
                />
              </div>
              <div className='space-y-2'>
                <h4 className='text-lg font-medium text-slate-800'>
                  Affiliate
                </h4>
                <p className='text-base text-slate-600'>
                  WhatsApp: +918708199718
                </p>
                <button className='bg-[#ECA404] px-5 py-2 rounded-full text-white font-medium'>
                  WhatsApp Now
                </button>
              </div>
            </div>
            <div
              className={`p-10 space-y-3 text-center bg-white rounded-xl w-fit ${styles.container_shadow}`}>
              <div className=''>
                <Image
                  className={`w-28 inline-block h-28 rounded-full ${styles.img_shadow}`}
                  src={connect4}
                  width={200}
                  height={200}
                  alt=''
                />
              </div>
              <div className='space-y-2'>
                <h4 className='text-lg font-medium text-slate-800'>
                  Exchanger
                </h4>
                <p className='text-base text-slate-600'>
                  WhatsApp: +919973701301
                </p>
                <button className='bg-[#ECA404] px-5 py-2 rounded-full text-white font-medium'>
                  WhatsApp Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
