import React from 'react';
import img from '../assests/footer/img.svg';
import icons from '../assests/footer/icons.svg';

export default function Footer() {
  return (
    <div className='lg:py-11 md:py-6 py-3'>
      <div className='flex justify-between [&_li]:text-secondry lg:[&_li]:text-[0.875rem] [&_li]:text-[0.475rem]'>
        <div>
          <p className='text-primary text-[0.648rem] lg:text-[1.125rem]'>Class Categoried</p>
          <ul>
            <li>Language</li>
            <li>Cooking</li>
            <li>Music</li>
            <li>Arts & Craft</li>
            <li>Yoga</li>
            <li>Academic</li>
            <li>Back to Roots</li>
            <li>Funteresting</li>
          </ul>
        </div>

        <div>
          <p className='text-primary text-[0.648rem]  lg:text-[1.125rem]'>Company</p>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-primary text-[0.648rem]  lg:text-[1.125rem]'>Learn</p>
          <ul>
            <li>All Classes</li>
          </ul>
        </div>

        <div>
          <p className='text-primary text-[0.648rem]  lg:text-[1.125rem]'>Teach</p>
          <ul>
            <li>Become a Teacher</li>
          </ul>
        </div>

        <div>
          <img src={img} alt='img' />
          <p className='text-primary text-[0.813rem] text-center'>Sell your products with us</p>
        </div>
      </div>

      <div className='border-t border-t-secondry mt-1 md:mt-2 lg:mt-3 flex justify-between lg:[&_p]:text-[0.875rem] [&_p]:text-[0.475rem]'>
        <p>Project 2021. All rights reserved.</p>
        <p>Made with ❤️ by simplePlan</p>
        <img src={icons} alt='icons' />
      </div>
    </div>
  );
}
