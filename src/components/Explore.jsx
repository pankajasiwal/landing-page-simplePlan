import React from 'react';
import style from '../style';
import curlyArrow from '../assests/explore/curlyArrow.svg';
import img1 from '../assests/explore/img1.svg';
import img2 from '../assests/explore/img2.svg';
import img3 from '../assests/explore/img3.svg';
import img4 from '../assests/explore/img4.svg';

export default function Explore() {
  const DUMMY_DATA = [
    {
      id: 1,
      img: img2,
      title: 'Learn something new',
      desc: 'Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.',
    },
    {
      id: 2,
      img: img1,
      title: 'Skilled & Passionate Teachers',
      desc: 'We offers Interactive classes by experts who are qualified and trusted.',
    },
    {
      id: 3,
      img: img3,
      title: 'Take classes anytime, anywhere',
      desc: 'Join sessions at your own convenience and pace, from the comforts of your home.',
    },
    {
      id: 4,
      img: img4,
      title: 'Pay as you go',
      desc: 'No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.',
    },
  ];
  return (
    <div>
      <div className='flex flex-col items-center gap-2'>
        <img src={curlyArrow} alt='curlyArrow' className='w-20 md:w-auto' />
        <h2 className={`max-w-[655px] ${style.heading} text-center text-primary px-4 md:px-8 lg:px-0`}>
          Explore. Enroll. Have Fun. Repeat - here hobby meets happiness
        </h2>
      </div>

      <div className={`md:flex md:gap-5 py-6 md:py-20 w-[80%] md:w-auto mx-auto md:mx-0 `}>
        {DUMMY_DATA.map(({ id, img, title, desc }) => {
          return (
            <div key={id} className='md:flex-1 md:flex md:flex-col md:items-center md:gap-2 mb-3 md:mb-0'>
              <img src={img} alt={img} className='md:w-auto w-10' />
              <p className={`${style.subHeading}  my-auto`}>{title}</p>
              <p className='md:text-center  text-[#51557D] text-[0.5rem] md:text-[1rem]'>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
