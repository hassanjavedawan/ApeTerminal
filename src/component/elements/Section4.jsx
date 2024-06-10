/** @format */

import React from "react";

const Section4 = () => {
  return (
    <section className='feature'>
      <div className='wide-container'>
        <div className='feature__wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-[24px] border-[0.5px] border-white border-opacity-[0.15] bg-white bg-opacity-[0.07] px-sm pb-sm pt-xl lg:rounded-[32px] lg:px-xxl lg:pb-xxl lg:pt-[120px]'>
          <div className='feature__inner mx-auto mb-xl flex max-w-[1000px] flex-col gap-xl lg:mb-[88px] lg:flex-row lg:items-center lg:justify-between'>
            <div className='feature__info flex basis-[40%] flex-col gap-sm'>
              <p className='body-text-s md:body-text-m lg:body-text-l feature__text'>
                Our unique MEV-tech runs high-frequency trades that profit from
                sell side slippage.
              </p>
              <p className='body-text-s md:body-text-m lg:body-text-l feature__text'>
                Deposit any token to generate yield from people selling that
                token.
              </p>
              <p className='body-text-s md:body-text-m lg:body-text-l feature__text'>
                As a result, our users get access for{/* */}{" "}
                <span className='gradient-text font-bold'>
                  to as much as 2%* auto-compounding gains in real yield
                </span>{" "}
                {/* */}when ever a high slippage sell happens.
              </p>
            </div>
            <div className='feature__image relative mx-auto hidden w-[132%] select-none sm:w-full sm:max-w-[600px] lg:mx-0 lg:block lg:max-w-[443px]'>
              <span className='block' style={{ opacity: 1 }}>
                <img
                  alt='Feature'
                  loading='lazy'
                  width={1329}
                  height={1041}
                  decoding='async'
                  data-nimg={1}
                  className='relative z-2 w-full'
                  style={{ color: "transparent" }}
                  srcSet='assets/feature-image.0a7996ca.png'
                  src='assets/feature-image.0a7996ca.png'
                />
              </span>
            </div>
            <div className='feature__image--phone relative mx-auto w-[132%] select-none sm:w-full sm:max-w-[600px] lg:mx-0 lg:hidden lg:max-w-[443px]'>
              <span className='block' style={{ opacity: 1 }}>
                <img
                  alt='Feature'
                  loading='lazy'
                  width={1329}
                  height={933}
                  decoding='async'
                  data-nimg={1}
                  className='relative z-2 w-full'
                  style={{ color: "transparent" }}
                  srcSet='assets/feature-image.0a7996ca.png'
                  src='assets/feature-image.0a7996ca.png'
                />
              </span>
            </div>
          </div>
          <div className='feature__bottom mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-sm border-t border-gray-800 pt-md lg:flex-row lg:gap-lg lg:pt-xxl'>
            <p className='body-text-medium-xs sm:body-text-medium-s feature__bottom-text w-full max-w-[250px] text-center text-gray-700 sm:max-w-[275px] lg:text-right'>
              Our transactions algorithm functions on the following principle:
            </p>
            <div className='feature__note flex items-center gap-[12px] rounded-[32px] bg-white bg-opacity-[0.04] p-[4px] pr-md'>
              <img
                src='assets/note.92ff21da.svg'
                alt='Note'
                className='feature__note-icon h-xxl w-xxl'
              />
              <p className='body-text-s feature__note-text gradient-text-v2'>
                If you don’t generate yield, the transaction doesn’t go through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
