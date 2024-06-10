/** @format */

import React from "react";

const TextSection = () => {
  return (
    <div className='text-section__box'>
      <section className='text-section'>
        <div className='wide-container'>
          <div className='text-section__wrapper relative flex flex-col items-center justify-center rounded-[24px] bg-gray-100 px-sm py-xl lg:rounded-[32px] lg:px-xxl lg:py-[140px]'>
            <div className='text-section__inner flex items-center justify-center text-gray-900'>
              <div className='text-section__info mx-auto flex max-w-[792px] flex-col gap-md'>
                <p
                  className='text-section__info-item heading-h4 lg:content-heading-m'
                  style={{ opacity: "0.6201" }}>
                  Ape Terminal is on a{/* */}{" "}
                  <img
                    src='assets/text-decoration01.a18515ea.svg'
                    height={40}
                    width={40}
                    className='mr-[2px] inline h-lg w-lg lg:h-xl lg:w-xl'
                    alt='mission'
                  />
                  mission to even the playing field.
                </p>
                <p
                  className='text-section__info-item heading-h4 lg:content-heading-m'
                  style={{ opacity: "0.9147" }}>
                  Bringing{/* */}{" "}
                  <img
                    src='assets/text-decoration03.1f36ea77.svg'
                    height={40}
                    width={40}
                    className='mr-[2px] inline h-lg w-lg lg:h-xl lg:w-xl'
                    alt='tools'
                  />
                  tools used by VCs, market makers and parasitic devs... to your
                  hands.
                </p>
                <p
                  className='text-section__info-item heading-h4 lg:content-heading-m'
                  style={{ opacity: "0.2" }}>
                  Supercharge your portfolio with the{/* */}{" "}
                  <img
                    src='assets/text-decoration02.461e4bac.svg'
                    height={40}
                    width={40}
                    className='mr-[2px] inline h-lg w-lg lg:h-xl lg:w-xl'
                    alt='power'
                  />
                  power of high-frequency trading, algorithms, MEV, and more.
                </p>
                <img
                  src='assets/text-decor.c28a2355.png'
                  width={407}
                  height={65}
                  className='text-section__info-item mt-xs max-w-[320px] lg:max-w-[407px]'
                  alt='Ape together, strong'
                  style={{ opacity: "0.2" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextSection;
