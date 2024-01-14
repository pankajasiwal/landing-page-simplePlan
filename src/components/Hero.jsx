import React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import style from '../style';
import hero from '../assests/hero/hero.svg';
import rightArrow from '../assests/hero/rightArrow.svg';
import heart from '../assests/hero/heart.svg';

export default function Hero() {
  return (
    <div className='pt-10 md:pt-20 relative '>
      <div className='flex items-center justify-between'>
        <div className='space-y-2 md:space-y-4 lg:space-y-6'>
          <h2 className={`${style.heading} text-primary flex items-center`}>
            Hobbies{' '}
            <span>
              <img src={heart} alt='heart' />
            </span>{' '}
            Happiness{' '}
            <span>
              <img src={heart} alt='heart' />
            </span>{' '}
            Home
          </h2>
          <p className={`${style.subHeading} max-w-[25.5rem] text-primary`}>
            A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.
          </p>

          <div className='relative'>
            <input
              type='text'
              placeholder='Enter your Email'
              className='w-full border border-primary rounded-full outline-none px-2 md:px-4 lg:px-6 md:py-1 lg:py-2 placeholder:text-[0.5rem]  placeholder:md:text-[1rem] placeholder:lg:text-[1.25rem]'
            />
            <button
              className={`${style.btnPrimary} absolute top-0 right-0  flex items-center gap-3 text-[0.59rem] md:text-[1rem] lg:text-[1.25rem]`}
            >
              start exploring
              <span>
                <img src={rightArrow} alt='rightArrow' />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={hero} alt='heroImg' />
        </div>
      </div>
      <div className='bg-primary float-right rounded-full p-2 lg:p-4 animate-bounce cursor-pointer '>
        <HiOutlineChatAlt2 color='white' />
      </div>
    </div>
  );
}
