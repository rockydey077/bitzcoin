"use client";
import Navbar from "@/components/Shared/Navbar";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={`${styles.background} pb-48`}>
        {/* Navbar */}
        <div className='pt-8 pb-20'>
          <Navbar />
        </div>
        {/* Header */}
        <div className='text-center space-y-6 text-white'>
          <h3 className='text-5xl lg:text-6xl font-black'>Contact Us</h3>
          <p className='text-lg font-medium'>
            We are always on the lookout to work with new clients.
          </p>
          <p className='px-6 py-3 mx-auto border border-white rounded-full w-fit'>
            Home / Contact Us
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className=''>
        {/* Shape */}
        <div>
          <svg
            className='rotate-180 fill-[#EEFAFF] -mt-36'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1000 100'
            preserveAspectRatio='none'>
            <path
              className='elementor-shape-fill'
              d='M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z'></path>
          </svg>
        </div>
        {/* Content */}
        <div className='bg-[#EEFAFF] -mt-[1px] lg:-mt-0'>
          <div className='py-10 px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto'>
            {/* Get in touch */}
            <div className='bg-[#4C4C4C] rounded-t-md lg:rounded-t-none lg:rounded-s-md px-5 lg:px-14 py-12 lg:py-24 text-white space-y-6'>
              <h3 className='text-4xl font-medium'>Get in touch</h3>
              <p className='text-lg text-slate-200 font-medium'>
                We are always on the lookout to work with new clients. If you
                are interested in working with us, please get in touch in one of
                the following ways.
              </p>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <svg
                    className='fill-[#794DDA]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-geo'
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z'></path>
                  </svg>
                  <div className='space-y-3'>
                    <h5 className='text-2xl'>Address</h5>
                    <p className='text-sm text-slate-200'>
                      8014 Edith Blvd NE, Albuquerque, New York, United States
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0'>
                  <div className='flex gap-4'>
                    <svg
                      className='fill-[#794DDA]'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='currentColor'
                      class='bi bi-telephone-outbound'
                      viewBox='0 0 16 16'>
                      <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z'></path>
                    </svg>
                    <div className='space-y-3'>
                      <h5 className='text-2xl'>Phone</h5>
                      <p className='text-sm text-slate-200'>+918092619471</p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <svg
                      className='fill-[#794DDA]'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='currentColor'
                      class='bi bi-envelope-at'
                      viewBox='0 0 16 16'>
                      <path d='M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z'></path>
                      <path d='M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z'></path>
                    </svg>
                    <div className='space-y-3'>
                      <h5 className='text-2xl'>E-Mail</h5>
                      <p className='text-sm text-slate-200'>support@paymm.in</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <svg
                    className='fill-[#794DDA]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-alarm'
                    viewBox='0 0 16 16'>
                    <path d='M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z'></path>
                    <path d='M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z'></path>
                  </svg>
                  <div>
                    <h5 className='text-2xl'>Opening 25 Hours</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className='border-2 border-[#4C4C4C] rounded-b-md lg:rounded-b-none lg:rounded-e-md bg-white flex items-center py-12 lg:py-0'>
              <form action='' className='px-5 lg:px-[60px] w-full space-y-10'>
                <div className='group relative z-0 transition-all focus-within:z-10'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder=''
                    className='peer block w-full border border-slate-300 dark:border-slate-300 bg-transparent dark:bg-white px-6 pb-3 pt-4 text-base/6 text-slate-700 dark:text-slate-700 ring-4 ring-transparent transition focus:border-slate-200 dark:focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md'
                  />
                  <label
                    htmlFor='name'
                    className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-600 dark:text-slate-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-600 dark:peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-600 dark:peer-[:not(:placeholder-shown)]:text-slate-600'>
                    Full Name
                  </label>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6'>
                  <div className='group relative z-0 transition-all focus-within:z-10'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder=''
                      className='peer block w-full border border-slate-300 dark:border-slate-300 bg-transparent dark:bg-white px-6 pb-3 pt-4 text-base/6 text-slate-700 dark:text-slate-700 ring-4 ring-transparent transition focus:border-slate-200 dark:focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md'
                    />
                    <label
                      htmlFor='email'
                      className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-600 dark:text-slate-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-600 dark:peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-600 dark:peer-[:not(:placeholder-shown)]:text-slate-600'>
                      Email
                    </label>
                  </div>
                  <div className='group relative z-0 transition-all focus-within:z-10'>
                    <input
                      type='number'
                      name='number'
                      id='number'
                      placeholder=''
                      className='peer block w-full border border-slate-300 dark:border-slate-300 bg-transparent dark:bg-white px-6 pb-3 pt-4 text-base/6 text-slate-700 dark:text-slate-700 ring-4 ring-transparent transition focus:border-slate-200 dark:focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md'
                    />
                    <label
                      htmlFor='number'
                      className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-600 dark:text-slate-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-600 dark:peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-600 dark:peer-[:not(:placeholder-shown)]:text-slate-600'>
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className='group relative z-0 transition-all focus-within:z-10'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder=''
                    className='peer block w-full border border-slate-300 dark:border-slate-300 bg-transparent dark:bg-white px-6 pb-3 pt-4 text-base/6 text-slate-700 dark:text-slate-700 ring-4 ring-transparent transition focus:border-slate-200 dark:focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md'
                  />
                  <label
                    htmlFor='subject'
                    className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-600 dark:text-slate-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-600 dark:peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-600 dark:peer-[:not(:placeholder-shown)]:text-slate-600'>
                    Subject
                  </label>
                </div>
                <div className='group relative z-0 transition-all focus-within:z-10'>
                  <textarea
                    type='text'
                    name='message'
                    id='message'
                    placeholder=''
                    className='peer block w-full border border-slate-300 dark:border-slate-300 bg-transparent dark:bg-white px-6 pb-4 pt-8 text-base/6 text-slate-700 dark:text-slate-700 ring-4 ring-transparent transition focus:border-slate-200 dark:focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md'
                  />
                  <label
                    htmlFor='message'
                    className='pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-600 dark:text-slate-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-600 dark:peer-focus:text-slate-600 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-600 dark:peer-[:not(:placeholder-shown)]:text-slate-600'>
                    Message
                  </label>
                </div>
                <div>
                  <input
                    type='submit'
                    value='Send Message'
                    className='bg-[#F2AB04] w-full py-3 rounded-md text-white font-medium text-base cursor-pointer'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
