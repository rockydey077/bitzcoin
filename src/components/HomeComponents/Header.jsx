import React from "react";
import Navbar from "../Shared/Navbar";
import styles from "./Header.module.css";
import headerImg from "../../../public/assets/header/home-front.png";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

const Header = () => {
  return (
    <div className={`${styles.background} pb-96`}>
      <div className='pt-8 pb-[182px]'>
        <Navbar />
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20 lg:gap-10 px-5 lg:px-0'>
        <div className='space-y-5 text-center lg:text-start'>
          <div className='flex justify-center lg:justify-start'>
            <div className='flex items-center gap-3 bg-[#6937bc] w-fit pl-[5px] pr-2 rounded-full py-1'>
              <p className='bg-[#FFFFFF] text-[#794DDA] text-sm font-semibold py-1 px-3 rounded-full'>
                News
              </p>
              <p className='text-white text-sm'>
                Subscribe to our channel/strack
              </p>
            </div>
          </div>
          <h2 className='text-4xl font-bold text-white'>
            The Best Exchange to Buy, Sell and Trade Crypto, Icash.one
          </h2>
          <p className='text-lg font-normal text-white'>
            Get started with us and start earning money with us. We are here to
            help you in every possible way.
          </p>
          <button
            className={`bg-gradient-to-t from-[#F2AB04] to-[#E49A01] px-9 py-[18px] rounded-full text-white font-semibold hover:from-white hover:to-white hover:text-[#794DDA] ${styles.btn_animation} hover:duration-1000`}>
            Get Started
          </button>
          <div className='flex flex-col lg:flex-row items-center gap-4 pt-10 justify-center lg:justify-start'>
            <div className='w-24 lg:w-8 border-b border-white'></div>
            <div className='flex items-center gap-4'>
              <div className='text-xl cursor-pointer hover:bg-[#F1AA04] p-1 border border-white w-fit rounded-full text-white'>
                <TiSocialFacebook />
              </div>
              <div className='text-xl cursor-pointer hover:bg-[#F1AA04] p-1 border border-white w-fit rounded-full text-white'>
                <TiSocialTwitter />
              </div>
              <div className='text-xl cursor-pointer hover:bg-[#F1AA04] p-1 border border-white w-fit rounded-full text-white'>
                <IoLogoInstagram />
              </div>
              <div className='text-xl cursor-pointer hover:bg-[#F1AA04] p-1 border border-white w-fit rounded-full text-white'>
                <TiSocialPinterest />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className={`${styles.img_animation} w-[270px] lg:w-full h-auto mx-auto`}
            src={headerImg}
            width={570}
            height={560}
            alt='header image'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
