import React from "react";

const Newsletter = () => {
  return (
    <div className='bg-[#EEFAFF] py-24 px-5 lg:px-0'>
      <div className='max-w-screen-md mx-auto text-center space-y-4'>
        <h2 className='text-2xl lg:text-3xl font-bold text-slate-800'>
          Subscribe to our newsletter
        </h2>
        <p className='text-base lg:text-lg text-slate-700'>
          Solorem aue laudantium, totam rem aperiam eaue isa uae ab illo
          inventore veritatis ero uasier reatae vitae dicta sunt explicabo nemo
          enim.
        </p>
        <div className=''>
          <input
            className='px-5 outline-none py-[18px] rounded-s-full lg:w-[85%]'
            type='text'
            name=''
            placeholder='Enter your email address'
            id=''
          />
          <button className='bg-gradient-to-t lg:w-[20%] -ml-5 lg:-ml-10 from-[#F2AB04] to-[#E49A01] px-9 py-[18px] rounded-full text-white font-semibold '>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
