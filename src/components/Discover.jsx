import React, { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import style from '../style';
import discoverImg from '../assests/discover/discoverImg.svg';

const DISCOVER = [
  {
    id: 1,
    img: discoverImg,
    lang: 'language',
    title: 'Class name - Lorem ipsum sit elit varsit lectusi sit amet',
    caption: 'by John Doe',
    rating: '* 4.7',
    dec: 'Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...',
    newPrice: 'kr 1000',
    oldPrice: 'kr 2000',
    enroll: 'Enroll now',
  },
  {
    id: 2,
    img: discoverImg,
    lang: 'language',
    title: 'Class name - Lorem ipsum sit elit varsit lectusi sit amet',
    caption: 'by John Doe',
    rating: '* 4.7',
    dec: 'Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...',
    newPrice: 'kr 1000',
    oldPrice: 'kr 2000',
    enroll: 'Enroll now',
  },
  {
    id: 3,
    img: discoverImg,
    lang: 'language',
    title: 'Class name - Lorem ipsum sit elit varsit lectusi sit amet',
    caption: 'by John Doe',
    rating: '* 4.7',
    dec: 'Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...',
    newPrice: 'kr 1000',
    oldPrice: 'kr 2000',
    enroll: 'Enroll now',
  },
  {
    id: 4,
    img: discoverImg,
    lang: 'language',
    title: 'Class name - Lorem ipsum sit elit varsit lectusi sit amet',
    caption: 'by John Doe',
    rating: '* 4.7',
    dec: 'Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...',
    newPrice: 'kr 1000',
    oldPrice: 'kr 2000',
    enroll: 'Enroll now',
  },
];
export default function Discover() {
  const [isInr, setIsInr] = useState(false);
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <div className='flex gap-2 items-baseline'>
            <h2 className={`${style.heading} text-primary`}>Discover classes</h2>
            <p className='uppercase text-[8px] md:text-[14px] underline text-[#E25753] '>show all</p>
          </div>
          <p className='text-secondry text-[8px] md:text-[16px]'>
            Choose from a variety of classes from around the world.
          </p>
        </div>

        <div>
          <p className={`${style.subHeading}`}>
            Show price in:{' '}
            <span className='cursor-pointer'>
              <span
                className={` rounded-l-full px-1 py-0.5 md:px-2 md:py-1 ${
                  !isInr ? 'bg-primary text-[#fff] border border-primary' : ''
                }`}
                onClick={() => setIsInr(false)}
              >
                NOK{' '}
              </span>
              <span
                className={`${
                  isInr ? 'border border-primary bg-primary text-[#fff]' : ''
                } rounded-r-full px-1 py-0.5 md:px-2 md:py-1`}
                onClick={() => setIsInr(true)}
              >
                INR
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className='flex gap-6 justify-center md:justify-normal md:gap-9 lg:gap-20 my-9 flex-wrap'>
        {DISCOVER.map((item) => {
          return (
            <div className='grow basis-[16.25rem] max-w-[16.25rem] '>
              <div className='relative'>
                <img src={item.img} alt='img' />
                <div className='px-4 w-full flex justify-between items-center absolute top-3'>
                  <p className='bg-[#fff] text-primary px-2 rounded-sm'>60% OFF</p>
                  <p className='bg-[#fff] p-1 rounded-sm'>
                    <FaRegBookmark />
                  </p>
                </div>
              </div>
              <div className='px-4'>
                <p className='uppercase text-primary'>{item.lang}</p>
                <p className='text-[1rem] text-[#1B1B1B]'>{item.title}</p>
                <p className='text-[14px] text-[#7B7B7B]'>
                  {item.caption} <span className='text-[#FFB051]'>{item.rating}</span>
                </p>
                <p className='my-2 text-[#3E3E3E] text-[14px]'>{item.dec}</p>
              </div>
              <div className='bg-primary py-2 rounded-b-md'>
                <div className='px-4 flex justify-between text-[#fff]'>
                  <p>
                    {item.newPrice} <span className='line-through'>{item.oldPrice}</span>
                  </p>
                  <p>{item.enroll}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
