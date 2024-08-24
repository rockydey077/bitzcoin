"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./Navbar.module.css";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`flex justify-between items-center px-3 lg:px-10`}>
      <div>
        <Image
          className='w-40 lg:w-[185px] h-auto'
          src={logo}
          width={200}
          height={200}
          alt=''
        />
      </div>
      <ul className='hidden lg:flex gap-6 items-center text-base font-medium text-white'>
        <li>
          <Link className={`${pathName === "/" && "text-[#F2AB04]"}`} href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link
            className={`${pathName === "/contact" && "text-[#F2AB04]"}`}
            href='/contact'>
            Contact Us
          </Link>
        </li>
        <li>
          <button className='bg-gradient-to-t from-[#F2AB04] to-[#E49A01] px-5 py-3 rounded-full text-white'>
            Get Started
          </button>
        </li>
      </ul>
      <div className='lg:hidden'>
        <button
          onClick={toggleSidebar}
          className='text-2xl text-white bg-[#F1AA04] p-1 border border-white rounded'>
          <RxHamburgerMenu />
        </button>

        <div
          ref={sidebarRef}
          onClick={(event) => event.stopPropagation()}
          className={`fixed top-0 left-0 transform transition-transform duration-500 h-full w-[325px] bg-white z-50 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className='flex justify-between items-center px-3 py-5 '>
            <h3 className='text-3xl font-bold'>
              Bitz<span className='text-[#F2AB04]'>COIN</span>
            </h3>
            <button onClick={toggleSidebar}>
              <RxCross2 className='text-2xl bg-[#F2AB04] p-1 rounded-full text-white' />
            </button>
          </div>
          <ul className='text-base font-medium pl-5 space-y-5 text-slate-700'>
            <li>
              <Link
                className={`${pathName === "/" && "text-[#F2AB04]"}`}
                href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link
                className={`${pathName === "/contact" && "text-[#F2AB04]"}`}
                href='/contact'>
                Contact Us
              </Link>
            </li>
            <li>
              <button className='bg-gradient-to-t from-[#F2AB04] to-[#E49A01] px-5 py-3 rounded-full text-white'>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
