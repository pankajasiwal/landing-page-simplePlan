import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import navImg from '../assests/nav/nav.svg';
import style from '../style';
import { useState } from 'react';

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div
      className={`${style.paddingX} h-max fixed inset-0 z-30 ${style.mid}  ${navToggle ? 'bg-[#E9EFFF]' : 'bg-[#fff]'}`}
    >
      <div className={`${style.boxWidth} `}>
        <nav>
          <div className={`flex items-center justify-between ${style.paddingY} `}>
            <div className={`flex items-center text-primary ${style.gap}`}>
              <h1 className={`${style.heading}`}>Logo</h1>
              <p
                className={`uppercase cursor-pointer flex items-center gap-1 ${style.subHeading}`}
                onClick={() => setNavToggle((prev) => !prev)}
              >
                categories
                <span>
                  <FaAngleDown />
                </span>
              </p>
            </div>
            <div className={`flex items-center ${style.gap} `}>
              <p className={`uppercase text-primary ${style.subHeading}`}>teach</p>
              <div className={`hidden sm:block space-x-2 ${style.subHeading}`}>
                <button className={`${style.btnSecondry}`}>login</button>
                <button className={`${style.btnPrimary}`}>signup</button>
              </div>
            </div>
          </div>

          <div className={`${navToggle ? 'block' : 'hidden'} flex justify-between text-primary `}>
            <div className={`${style.gap} flex`}>
              <div className={`${style.subHeading} space-y-1 ${navToggle ? 'mb-4 md:mb-0' : ''}`}>
                <p>
                  <a href='#'>Language</a>
                </p>
                <p className='text-[#FB7356]'>
                  <a href='#' className='flex items-center gap-4'>
                    Cooking{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </a>
                </p>
                <p>
                  <a href='#'>Music</a>
                </p>
                <p>
                  <a href='#'>Arts & Craft</a>
                </p>
                <p>
                  <a href='#'>Yoga</a>
                </p>
                <p>
                  <a href='#'>Academic</a>
                </p>
                <p>
                  <a href='#'>Back to Roots</a>
                </p>
                <p>
                  <a href='#'>Funteresting</a>
                </p>
                <div className={`sm:hidden block space-x-1 mt-4 ${style.subHeading}`}>
                  <button className={`${style.btnSecondry}`}>login</button>
                  <button className={`${style.btnPrimary}`}>signup</button>
                </div>
              </div>

              <div className={`${style.subHeading} space-y-1`}>
                <p>
                  <a href='#'>All</a>
                </p>
                <p className='text-[#FB7356]'>
                  <a href='#' className='flex items-center gap-4'>
                    Indian{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </a>
                </p>
                <p>
                  <a href='#'>Norwegian</a>
                </p>
                <p>
                  <a href='#'>Category 04</a>
                </p>
              </div>
            </div>
            <img src={navImg} alt='navImg' className='sm:block hidden' />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
