/** @format */

import React from "react";

const CTA = () => {
  return (
    <section className='cta'>
      <div className='wide-container'>
        <div className='cta__wrapper relative flex min-h-[65vh] flex-col items-center overflow-hidden rounded-[24px] bg-[url(../public/assets/cta-bg-mobile.svg)] bg-cover bg-[50%_100%] bg-no-repeat px-[20px] pb-[188px] pt-xl lg:min-h-[85vh] lg:justify-center lg:rounded-[32px] lg:bg-[url(../public/assets/cta-bg.svg)] lg:bg-[50%_100%] lg:px-xxl lg:py-[248px]'>
          <div className='cta__heroes pointer-events-none absolute bottom-0 z-1 hidden w-full select-none lg:block'>
            <img
              src='assets/cta-bg-heroes.ecf7d397.svg'
              alt='Ape'
              className='w-full transform-gpu animate-[flying_5s_ease-in-out_infinite]'
            />
          </div>
          <div className='cta__inner relative z-2 flex items-center justify-center text-gray-900'>
            <div className='cta__info mx-auto max-w-[564px] text-center'>
              <div
                className='in-view '
                style={{ opacity: 1, transform: "none" }}>
                <h3 className='cta__title heading-h2 lg:heading-hero2'>
                  Ape, Better.
                </h3>
              </div>
              <div
                className='cta-buttons mx-auto flex w-max items-center justify-center gap-sm rounded-[32px] p-xs text-gray-900 md:rounded-[42px] md:p-[4px] mt-md md:mt-xxl'
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.20) 100%)",
                  boxShadow:
                    "0px 1px 2px 0px rgba(0, 0, 0, 0.15), 0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset",
                }}>
                <div className='cta-buttons__links flex flex-col gap-xs md:flex-row md:gap-[4px]'>
                  <a
                    href='#!'
                    target='_blank'
                    rel='nofollow noreferrer'
                    className='cta-buttons__link group flex h-xxl min-w-[203px] items-center justify-center gap-xs rounded-[31px] bg-black px-sm text-white hover:bg-opacity-80 md:min-w-[160px]'>
                    <span className='cta-button__text arrow body-text-s select-none'>
                      Launchpad
                    </span>
                    <span className='flex justify-center items-center  cta-button__icon arrow  h-lg w-lg transition-all'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={22}
                        height={22}
                        fill='currentColor'
                        className='bi bi-arrow-right-circle'
                        viewBox='0 0 16 16'>
                        <path
                          fillRule='evenodd'
                          d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href='https://app.apeterminal.io/'
                    target='_blank'
                    rel='nofollow noreferrer'
                    className='cta-buttons__link group flex h-xxl min-w-[203px] items-center justify-center gap-xs rounded-[31px] bg-black px-sm text-white hover:bg-opacity-80 md:min-w-[160px]'>
                    <span className='cta-button__text web body-text-s select-none'>
                      Yield App
                    </span>
                    <span className='flex justify-center items-center cta-button__icon web  h-lg w-lg transition-all'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={22}
                        height={22}
                        fill='currentColor'
                        className='bi bi-globe'
                        viewBox='0 0 16 16'>
                        <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z' />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
