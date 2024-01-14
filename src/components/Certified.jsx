import React from 'react';
import style from '../style';
import img from '../assests/certified/certified.svg';
import rightArrow from '../assests/hero/rightArrow.svg';

export function Li({ desc }) {
  return (
    <li className={`${style.subHeading} text-secondry flex items-center gap-1 md:gap-3`}>
      <span className='w-2 h-2 block bg-[#FFB051]' />
      <span>{desc}</span>
    </li>
  );
}

export default function Certified() {
  return (
    <div className='flex my-3 md:my-6 lg:my-12'>
      <div className={`w-1/2 `}>
        <img src={img} alt='img' />
      </div>
      <div className={`w-1/2  px-4 md:px-8 lg:px-16`}>
        <h2 className={`${style.heading} text-primary`}>Become a certified teacher</h2>
        <p className={`${style.subHeading} my-1 md:my-2 lg:my-3 text-secondry`}>
          We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share
          it.
        </p>
        <ul className='my-1 md:my-3 lg:my-6'>
          <Li desc={'Make your own schedule'} />
          <Li desc={'Teach students on an international platform'} />
          <Li desc={'Become part of an international community of passionate educators'} />
        </ul>
        <button
          className={`${style.btnPrimary} flex items-center gap-3 text-[0.59rem] md:text-[1rem] lg:text-[1.25rem]`}
        >
          start Teaching
          <span>
            <img src={rightArrow} alt='rightArrow' />
          </span>
        </button>
      </div>
    </div>
  );
}
