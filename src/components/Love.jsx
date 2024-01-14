import React from 'react';
import style from '../style';
import img1 from '../assests/love/img1.svg';
import img2 from '../assests/love/img2.svg';
import img3 from '../assests/love/img3.svg';
import quote from '../assests/love/quote.svg';

const DUMMY = [
  {
    id: 1,
    img: img1,
    name: 'Karandeep',
    decp: 'It is nice to be on an international platform where there are teachers from around the world.',
  },
  {
    id: 2,
    img: img2,
    name: 'Karandeep',
    decp: 'The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.',
  },
  {
    id: 3,
    img: img3,
    name: 'Karandeep',
    decp: 'As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.',
  },
];
export default function Love() {
  return (
    <div>
      <h2 className={`${style.heading} text-primary`}>Love from Community</h2>
      <div className='my-2 md:my-1 lg:my-7 flex flex-wrap justify-center lg:justify-normal gap-4 md:gap-9 lg:gap-20'>
        {DUMMY.map((item) => {
          return (
            <div
              key={item.id}
              className='basis-[22.563rem] max-w-[22.563rem] border border-[#D3DEEC] px-6 py-4 relative [&:nth-child(2)]:bg-primary [&:nth-child(2)_p]:text-[#fff] '
            >
              <img src={item.img} alt='img' className='mx-auto' />
              <p className={`text-center  text-[#4D4D4D]`}>{item.name}</p>
              <p className={`text-center  text-[#4D4D4D] mb-auto`}>{item.decp}</p>
              <div className='absolute top-4 left-7'>
                <img src={quote} alt='quote' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
