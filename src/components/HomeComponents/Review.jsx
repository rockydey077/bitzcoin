"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Rating from "react-rating";
import styles from "./Review.module.css";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 4.5,
  },
  {
    id: 2,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 4.0,
  },
  {
    id: 3,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 4.8,
  },
  {
    id: 4,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 3.9,
  },
  {
    id: 5,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 3.5,
  },
  {
    id: 6,
    img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
    name: "Prakash Sharma",
    text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
    rating: 3.7,
  },
];

const Review = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className='max-w-screen-xl mx-auto py-24 px-5 lg:px-0'>
      <div className='mb-5 flex justify-between items-center gap-3'>
        <div className='text-2xl lg:text-3xl font-bold text-slate-800'>
          <p>Customers Review</p>
        </div>
        <div className='space-x-4'>
          <button
            disabled={activeIndex === 0}
            onClick={handlePrev}
            className='p-3 bg-[#fff] text-slate-700 shadow-md rounded-xl disabled:bg-[#EBEBE4] disabled:text-slate-400 disabled:cursor-default'>
            <FaAngleLeft />
          </button>
          <button
            disabled={
              isMobile
                ? activeIndex === reviews.length - 1
                : activeIndex === reviews.length / 2
            }
            onClick={handleNext}
            className='p-3 bg-[#fff] text-slate-700 shadow-md rounded-xl disabled:bg-[#EBEBE4] disabled:text-slate-400 disabled:cursor-default'>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className=''>
        <div>
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            ref={swiperRef}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className='mySwiper'>
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className='px-1 py-5'>
                <div
                  className={`space-y-3 ${styles.review_shadow} w-fit text-center p-5`}>
                  <div className='mx-auto'>
                    <Image
                      className='w-16 inline-block h-16 rounded-full'
                      src={review.img}
                      width={200}
                      height={200}
                      alt=''
                    />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg text-slate-700 font-semibold'>
                      {review.name}
                    </h3>
                    <p className='text-sm font-normal text-slate-700'>
                      {review.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='text-center'>
          <button className='bg-gradient-to-t from-[#F2AB04] to-[#E49A01] px-4 py-2 rounded text-white font-semibold'>
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
