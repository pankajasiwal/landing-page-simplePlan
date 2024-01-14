import React from 'react';
import style from '../style';
import acadmey from '../assests/category/acadmey.svg';
import cooking from '../assests/category/cooking.svg';
import music from '../assests/category/music.svg';
import art from '../assests/category/acadmey.svg';
import yoga from '../assests/category/yoga.svg';
import language from '../assests/category/language.svg';
import roots from '../assests/category/roots.svg';
import funteresting from '../assests/category/funteresting.svg';

const DUMMY = [
  { id: 1, img: language, title: 'Language' },
  { id: 2, img: yoga, title: 'Cooking' },
  { id: 3, img: music, title: 'Music' },
  { id: 4, img: art, title: 'Arts & Craft' },
  { id: 5, img: yoga, title: 'Yoga' },
  { id: 6, img: acadmey, title: 'Acadmemics' },
  { id: 7, img: roots, title: 'Back to Roots ' },
  { id: 8, img: funteresting, title: 'Funteresting' },
];

export default function Category() {
  return (
    <div>
      <h2 className={`${style.heading} text-primary`}>Browse by category </h2>
      <div className='my-2.5 md:my-7 lg:my-14 flex justify-center md:justify-normal gap-8 md:gap-16 lg:gap-[6.5rem] flex-wrap'>
        {DUMMY.map((item) => {
          return (
            <div key={item.id} className='category'>
              <img src={item.img} alt='img' />
              <p className='text-center text-[#1B1B1B] w-[156px] mx-auto border-b border-b-[#789CCA] py-4'>
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
