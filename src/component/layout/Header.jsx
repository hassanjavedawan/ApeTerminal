/** @format */

import React from "react";

const Header = () => {
  return (
    <header className='header absolute inset-x-0 top-0 z-50 flex h-[88px] items-center px-md py-sm transition-all duration-300 lg:absolute lg:mt-xs lg:h-auto lg:py-md   undefined'>
      <div className='header__bg pointer-events-none absolute inset-x-0 top-0  h-full w-full opacity-0 transition-all duration-300 ' />
      <div className='wide-container'>
        <div className='header__navbar flex w-full items-center justify-between'>
          <div className='header__inner flex items-center gap-xxl'>
            <div className='header__logo z-110 flex items-center'>
              <a className='header__logo-link relative' href='/'>
                <img
                  className='logo-black w-[128px] lg:w-[153px] menu-not-active'
                  width={153}
                  height={44}
                  src='https://apeterminal.io/_next/static/media/logo.b4550ac7.svg'
                  alt='Logo'
                />
                <img
                  className='logo-white pointer-events-none absolute left-0 top-0 z-2 w-[128px] select-none opacity-0 lg:w-[153px]  menu-not-active'
                  width={153}
                  height={44}
                  src='https://apeterminal.io/_next/static/media/logo-white.5362b1a8.svg'
                  alt='Logo'
                />
              </a>
            </div>
          </div>
          <nav className='header__menu block lg:absolute lg:left-1/2 lg:right-auto lg:-translate-x-1/2'>
            <div className='header__menu-bg pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-[calc(100%+24px)] w-[calc(100%+64px)] -translate-x-1/2 -translate-y-1/2 rounded-[80px]  bg-black transition-all duration-300 lg:flex' />
            <ul className=' header__menu-list fixed bottom-0 left-full right-0 top-0 z-100 m-0 hidden h-full w-full flex-col justify-start overflow-y-auto overflow-x-hidden overscroll-y-contain p-0 px-md pt-120px text-left text-gray-900 transition-all duration-300 lg:relative lg:left-0 lg:z-1 lg:flex lg:flex-row lg:overflow-x-visible lg:bg-transparent lg:px-0 lg:pt-0'>
              <li className='header__menu-list-item'>
                <a
                  href='!#'
                  target='_blank'
                  rel='nofollow noreferrer'
                  className='header__menu-list-link body-text-s w-full py-md text-white transition-colors hover:text-brand-200 lg:py-0'>
                  Launchpad
                </a>
              </li>
              <li className='header__menu-list-item'>
                <a
                  className='header__menu-list-link body-text-s w-full py-md text-white transition-colors hover:text-brand-200 lg:py-0'
                  href='/consult'>
                  Ape &amp; Co
                </a>
              </li>
              <ul className='header__menu-list-buttons mt-md flex lg:hidden'>
                <li className='grow basis-1/2'>
                  <div className='header__button'>
                    <a className='button-ghost-s w-full' href='/contact'>
                      Contact
                    </a>
                  </div>
                </li>
              </ul>
            </ul>
          </nav>
          <div className='header__buttons hidden lg:flex lg:items-center lg:gap-xs '>
            <div className='header__button'>
              <a
                href='#!'
                target='_blank'
                rel='nofollow noreferrer'
                className='button-left-icon-m button-web'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={16}
                  height={16}
                  fill='currentColor'
                  className='bi bi-globe'
                  viewBox='0 0 16 16'>
                  <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z' />
                </svg>

                <span>Yield App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
