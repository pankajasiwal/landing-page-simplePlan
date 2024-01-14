import React from 'react';
import style from '../style';
import img1 from '../assests/reasons/img1.svg';
import img2 from '../assests/reasons/img2.svg';
import img3 from '../assests/reasons/img3.svg';
import img4 from '../assests/reasons/img4.svg';
import img5 from '../assests/reasons/img5.svg';
import img6 from '../assests/reasons/img6.svg';
import vector from '../assests/reasons/Vector.svg';

const DUMMY = [
  { id: 1, img: img1, title: 'Interactive live online classes at your convenient time slots' },
  { id: 2, img: img2, title: 'Learning from passionate, talented and trusted teachers' },
  { id: 3, img: img3, title: 'Cross country sharing of interesting and unique hobbies from across the world' },
  { id: 4, img: img4, title: 'Age no bar for enroling into your cherished hobby or activity classes' },
  { id: 5, img: img5, title: 'Transparent and structured fee payment options' },
  { id: 6, img: img6, title: 'Contributing to the revival and nurturing of traditional art forms' },
];
export default function Reasons() {
  return (
    <div>
      <h2 className={`${style.heading} text-primary`}>Six reasons to choose our class</h2>
      <div className='flex flex-wrap justify-center md:justify-normal my-2 md:my-1 lg:my-7 md:gap-9 lg:gap-20'>
        {DUMMY.map((item) => {
          return (
            <div key={item.id} className='basis-[19.5rem] max-w-[19.5rem]'>
              <img src={item.img} alt='img' />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className='hidden lg:block absolute -top-44 right-0'>
        <img src={vector} alt='vector' />
      </div>
    </div>
  );
}
