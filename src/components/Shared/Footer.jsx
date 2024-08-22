import React from "react";
import Newsletter from "../HomeComponents/Newsletter";
import styles from "./Footer.module.css";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className={`${styles.footer_bg}`}>
        <div className=''>
          <svg
            className='fill-[#EEFAFF] rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1000 100'
            preserveAspectRatio='none'>
            <path
              className='elementor-shape-fill'
              d='M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z'></path>
          </svg>
        </div>
        <div className='max-w-screen-xl mx-auto  px-5 lg:px-0'>
          <div className='flex flex-col lg:flex-row pt-10 lg:pt-5 pb-14 lg:pb-20 gap-6 lg:gap-0'>
            <div className='lg:w-[40%] space-y-4'>
              <div>
                <Image
                  className='w-40 lg:w-[185px] h-auto'
                  src={logo}
                  width={200}
                  height={200}
                  alt=''
                />
              </div>
              <p className='text-sm text-[#B797F1] lg:w-3/4'>
                Reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur vel illum qui dolorem eum Quia voluptas
                sit aspernatur aut odit aut fugit, sed quia conse
              </p>
              <div className='flex items-center gap-4'>
                <div className='text-2xl cursor-pointer hover:text-[#F1AA04] w-fit text-white'>
                  <TiSocialFacebook />
                </div>
                <div className='text-2xl cursor-pointer hover:text-[#F1AA04] w-fit text-white'>
                  <TiSocialTwitter />
                </div>
                <div className='text-2xl cursor-pointer hover:text-[#F1AA04] w-fit text-white'>
                  <IoLogoInstagram />
                </div>
                <div className='text-2xl cursor-pointer hover:text-[#F1AA04] w-fit text-white'>
                  <TiSocialPinterest />
                </div>
              </div>
            </div>
            <div className='lg:w-[60%] grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-3'>
              <div className='space-y-3'>
                <h4 className='text-xl text-white font-medium'>About us</h4>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Home</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>About</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Services</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Pricing</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Portfolio</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Blog</p>
                </div>
              </div>
              <div className='space-y-3'>
                <h4 className='text-xl text-white font-medium'>Useful links</h4>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Help desk</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Software</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Forum</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>FAQs</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Resources</p>
                </div>
                <div className='text-sm flex items-center gap-1 text-[#B797F1]'>
                  <IoIosArrowForward className='text-[#DF9300]' />
                  <p className='hover:text-[#DF9300]'>Payments</p>
                </div>
              </div>
              <div className='space-y-3'>
                <h4 className='text-xl text-white font-medium'>Contact us</h4>
                <div>
                  <h5 className='text-white font-normal'>Address:</h5>
                  <p className='text-sm text-[#B797F1]'>
                    121 King Street Melbourne, 3000, Australia
                  </p>
                </div>
                <div>
                  <h5 className='text-white font-normal'>Email:</h5>
                  <p className='text-sm text-[#B797F1]'>info@strackcoin.com</p>
                </div>
                <div>
                  <h5 className='text-white font-normal'>Phone:</h5>
                  <p className='text-sm text-[#B797F1]'>+61 3 8376 6284</p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 border-t text-center border-[#B797F1] text-[#B797F1]'>
            <p>BitzCoin copyright © 2022. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
