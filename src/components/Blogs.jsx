import React from 'react';
import style from '../style';
import img1 from '../assests/blogs/img1.svg';
import img2 from '../assests/blogs/img2.svg';
import img3 from '../assests/blogs/img3.svg';

const DUMMY = [
  {
    id: 1,
    img: img1,
    title: 'Blog name - Lorem ipsum dolor sit amet, et varius et consectetur',
    desc: 'Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...',
    publisher: 'Publisher name',
    count: 0,
    cat: 'category 01',
  },
  {
    id: 2,
    img: img2,
    title: 'Blog name - Lorem ipsum dolor sit amet, et varius et consectetur',
    desc: 'Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...',
    publisher: 'Publisher name',
    count: 12,
    cat: 'category 02',
  },
  {
    id: 3,
    img: img3,
    title: 'Blog name - Lorem ipsum dolor sit amet, et varius et consectetur',
    desc: 'Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...',
    publisher: 'Publisher name',
    count: 0,
    cat: 'category 03',
  },
];

export default function Blogs() {
  return (
    <div className='my-1 md:my-2 lg:my-4'>
      <div className='flex gap-2 items-baseline'>
        <h2 className={`${style.heading} text-primary `}>Our blogs</h2>
        <p className='uppercase text-[8px] md:text-[14px] underline text-[#E25753] '>show all</p>
      </div>
      <div className='flex gap-6 justify-center md:justify-normal md:gap-9 lg:gap-20 my-9 flex-wrap'>
        {DUMMY.map((item) => {
          return (
            <div className='grow basis-[22.938rem] max-w-[22.938rem] border border-[#D3DEEC] rounded-md px-4 py-4'>
              <div className='relative'>
                <img src={item.img} alt='img' />
                <div className='px-4 w-full flex justify-between items-center absolute top-3'>
                  <p className='bg-[#FFF0F4] text-[#E25753] px-2 rounded-sm'>{item.cat}</p>
                </div>
              </div>
              <div>
                <p className='text-[1rem] text-[#1B1B1B]'>{item.title}</p>
                <p className='my-2 text-[#3E3E3E] text-[14px]'>{item.desc}</p>
              </div>
              <div>
                <div className='flex justify-between text-[#fff]'>
                  <p className='text-primary'>{item.publisher}</p>
                  <p className='text-secondry'>{item.count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
