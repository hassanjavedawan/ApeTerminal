/** @format */

import React from "react";

const Footer = () => {
  return (
    <footer className='footer pb-64px pt-xl md:py-80px'>
      <div className='container'>
        <div className='footer__wrapper flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='footer__logo w-full border-b-[0.5px] border-gray-800 pb-md md:w-auto md:border-none md:pb-0'>
            <a href='/'>
              <img
                src='https://apeterminal.io/_next/static/media/logo-white.5362b1a8.svg'
                className='w-[164px]'
                width={164}
                height={47}
                alt='Logo'
              />
            </a>
          </div>
          <div className='footer__social mt-md flex flex-col gap-sm md:mt-0 md:flex-row md:items-center'>
            <p className='body-text-s md:body-text-m footer__social-title'>
              Join our Community
            </p>
            <div
              className='social-icons flex w-max flex-wrap justify-center gap-[4px] rounded-[32px] p-[4px] '
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)",
                boxShadow:
                  "0px 1px 0px 0px rgba(255, 255, 255, 0.15), 0px 1px 0px 0px rgba(255, 255, 255, 0.16) inset",
              }}>
              <a
                href='#!'
                target='_blank'
                rel='nofollow noreferrer'
                aria-label='Telegram'
                className='social-icons__link group flex items-center justify-center rounded-[31px] bg-gray-900 h-xxl w-[80px]'>
                <span className='flex justify-center items-center transition-all text-white  h-lg w-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={25}
                    height={25}
                    fill='currentColor'
                    className='bi bi-telegram'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09' />
                  </svg>
                </span>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='nofollow noreferrer'
                aria-label='Twitter'
                className='social-icons__link group flex items-center justify-center rounded-[31px] bg-gray-900 h-xxl w-[80px]'>
                <span className='flex justify-center items-center transition-all text-white  h-lg w-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={25}
                    height={25}
                    fill='currentColor'
                    className='bi bi-twitter-x'
                    viewBox='0 0 16 16'>
                    <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z' />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='footer__copy mt-md flex flex-col gap-xs border-t-[0.5px] border-gray-800 pt-md text-gray-700 md:mt-xxl md:flex-row md:items-center md:justify-between md:gap-md md:border-none md:pt-0'>
          <p className='body-text-xs footer__copy-copyright text-gray-500 md:text-gray-700'>
            Ape Terminal © {/* */}2024{/* */}. All rights reserved.
          </p>
          <div className='footer__copy-terms flex gap-sm'>
            <a
              className='footer__copy-terms-link to-go-link body-text-xs transition-colors hover:text-gray-100'
              href='/terms-of-service'>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
