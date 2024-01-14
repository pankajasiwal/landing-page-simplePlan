import React from 'react';
import rightArrow from '../assests/hero/rightArrow.svg';
import style from '../style';

export default function Passion() {
  return (
    <div className='rounded-full bg-[#FB7356] px-16 md:px-32 lg:px-60 py-6 md:py-9 lg:py-11 my-6 md:my-12 lg:my-24'>
      <h2 className={`text-[0.61rem] md:text-[1.22rem] lg:text-[2.441rem] text-center text-[#fff]`}>
        Start learning new skills today and pursue your passion
      </h2>
      <p className='text-[#fff] text-[0.22rem] md:text-[0.52rem] lg:text-[1.125rem] text-center py-2 md:py-2 lg:py-3'>
        Join the community of global learners and start exploring today.
      </p>
      <div className='flex gap-4 justify-center'>
        <input
          type='text'
          placeholder='Enter your email'
          className='w-[6rem] md:w-[12.1rem] lg:w-[24.2rem] rounded-full pl-4'
        />
        <button
          className={`uppercase border  rounded-full  px-2 md:px-4 lg:px-6 md:py-1 lg:py-2  text-[#FB7356] border-[#fff] bg-[#fff]  flex items-center gap-3 text-[0.59rem] md:text-[1rem] lg:text-[1.25rem]`}
        >
          Get started
          <span>
            <img src={rightArrow} alt='rightArrow' />
          </span>
        </button>
      </div>
    </div>
  );
}
