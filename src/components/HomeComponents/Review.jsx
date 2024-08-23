"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import styles from "./Review.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "@/lib/redux/features/api/apiSlice";
import HashLoader from "react-spinners/HashLoader";
import toast from "react-hot-toast";

// const reviews = [
//   {
//     id: 1,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 4.0,
//   },
//   {
//     id: 3,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 4.8,
//   },
//   {
//     id: 4,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 3.9,
//   },
//   {
//     id: 5,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 3.5,
//   },
//   {
//     id: 6,
//     img: "https://i.ibb.co/hCsWc0x/teacher2.jpg",
//     name: "Prakash Sharma",
//     text: "Best for payment and vouchers requirements and everything is fine in this no risk payments related queries best service ever.",
//     rating: 3.7,
//   },
// ];

const Review = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: reviews, isLoading } = useGetReviewsQuery();
  const [addReview, { isLoading: addLoading, isSuccess, isError, error }] =
    useAddReviewMutation();
  const [reviewValue, setReviewValue] = useState(false);
  const [emailValue, setEmailValue] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (addLoading) {
      toast.loading("Adding...", { id: "addReview" });
    }

    if (!addLoading && isSuccess) {
      toast.success("Review added", { id: "addReview" });
    }

    if (!addLoading && isError) {
      toast.error(error, { id: "addReview" });
    }
  }, [addLoading, isError, error, isSuccess]);

  const handleReviewValue = (e) => {
    setReviewValue(e.target.value !== "");
  };

  const handleEmail = (e) => {
    setEmailValue(e.target.value !== "");
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleReview = async (event) => {
    setOpen(false);
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const review = form.review.value;
    const rating = ratingValue;
    const visibility = false;

    if (rating > 5) {
      toast.error("Maximum rating value is 5!");
      return;
    }

    const reviewInfo = {
      email,
      review,
      rating,
      visibility,
    };

    try {
      await addReview(reviewInfo).unwrap();
    } catch (err) {
      toast.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className='text-center text-yellow-500'>
        <HashLoader />
      </div>
    );
  }

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
                : activeIndex === reviews.length - 3
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
              <SwiperSlide key={review._id} className='px-1 py-5'>
                <div
                  className={`space-y-3 ${styles.review_shadow} w-fit text-center p-5`}>
                  {/* <div className='mx-auto'>
                    <Image
                      className='w-16 inline-block h-16 rounded-full'
                      src={review.img}
                      width={200}
                      height={200}
                      alt=''
                    />
                  </div> */}
                  <div className='space-y-2'>
                    <h3 className='text-lg text-slate-700 font-semibold'>
                      {review.email}
                    </h3>
                    <div className='flex justify-center'>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={24}
                        edit={false}
                        activeColor='#ffd700'
                        isHalf={true}
                      />
                    </div>
                    <p className='text-sm font-normal text-slate-700'>
                      {review.review}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='text-center'>
          <button
            onClick={onOpenModal}
            className='bg-gradient-to-t from-[#F2AB04] to-[#E49A01] px-4 py-2 rounded text-white font-semibold'>
            Add Review
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className='p-5'>
          <form onSubmit={handleReview} action='' className='w-full space-y-5'>
            <div className='relative' data-twe-input-wrapper-init>
              <input
                type='email'
                name='email'
                id='email'
                onInput={handleEmail}
                className={`${
                  emailValue ? "data-[has-value=true]" : ""
                } peer block min-h-[auto] w-full rounded border border-slate-300 bg-transparent px-5 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:slate-700 dark:placeholder:text-slate-700 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0`}
                placeholder='Email'
              />
              <label
                htmlFor='email'
                className={`${
                  emailValue
                    ? "-translate-y-[1.15rem] scale-[0.8] text-primary px-2 bg-white w-fit"
                    : ""
                } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-slate-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-500 dark:peer-focus:text-primary peer-focus:bg-white peer-focus:w-fit peer-focus:px-2`}>
                Email
              </label>
            </div>
            <div>
              <label
                htmlFor='rating'
                className='text-sm font-medium text-slate-700'>
                Your Rating
              </label>
              <ReactStars
                id='rating'
                count={5}
                onChange={(newRating) => setRatingValue(newRating)}
                size={24}
                activeColor='#ffd700'
              />
            </div>
            <div className='relative' data-twe-input-wrapper-init>
              <textarea
                type='text'
                name='review'
                id='message'
                onInput={handleReviewValue}
                className={`${
                  reviewValue ? "data-[has-value=true]" : ""
                } peer block min-h-[auto] w-full rounded border border-slate-300 bg-transparent px-5 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:slate-700 dark:placeholder:text-slate-700 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0`}
                placeholder='Review'
              />
              <label
                htmlFor='message'
                className={`${
                  reviewValue
                    ? "-translate-y-[1.15rem] scale-[0.8] text-primary px-2 bg-white w-fit"
                    : ""
                } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-slate-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-slate-500 dark:peer-focus:text-primary peer-focus:bg-white peer-focus:w-fit peer-focus:px-2`}>
                Review
              </label>
            </div>
            <div>
              <input
                type='submit'
                value='Add Review'
                className='bg-[#F2AB04] w-fit px-5 py-3 rounded-md text-white font-medium text-base cursor-pointer'
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Review;
