/** @format */

import React, { useEffect } from "react";
const Section3 = () => {
 
  useEffect(() => {
    const sliderItems = document.querySelectorAll(".hover-slider__item");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.10, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      });
    }, observerOptions);

    sliderItems.forEach((item) => {
      observer.observe(item);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className='tools'>
      <div className='wide-container'>
        <div className='pin-spacer'>
          <div
            className='tools__wrapper relative flex flex-col items-center justify-center rounded-[24px] border-[0.5px] border-white border-opacity-[0.15] bg-white bg-opacity-[0.07] px-sm py-xl lg:min-h-[100vh] lg:rounded-[32px] lg:px-xxl lg:pb-0 lg:pt-[140px]'
            id='tools-container'>
            <div className='tools__heading mb-lg text-center lg:mb-88px'>
              <div className='in-view'>
                <h3 className='tools__title heading-h3 lg:heading-h1'>
                  Exclusive, Easy, Cutting Edge.
                </h3>
                <p className='subtitle-xs sm:subtitle-s md:subtitle-m tools__subtitle mx-auto mt-xs max-w-[488px] text-gray-500 md:mt-sm lg:mt-md'>
                  Tools that maximize your financial opportunities.
                </p>
              </div>
            </div>
            <div className='tools__inner mx-auto flex w-full max-w-[1060px] flex-col-reverse gap-xxl lg:flex-row lg:items-start lg:justify-between'>
              <div id='slider-container'>
                <div
                  className='slider-item'
                  id='slider-item-1'
                  style={{ opacity: 1, transition: "opacity 1s" }}>
                  <div className='hover-slider__item group cursor-pointer py-[12px] lg:pointer-events-none active'>
                    <div className='hover-slider__item-inner flex items-start gap-sm overflow-hidden lg:gap-lg'>
                      <div className='hover-slider__item-left relative flex w-64px flex-col items-center justify-center'>
                        <div className='mt-[6px] h-sm w-sm rounded-full bg-gray-800 transition-colors duration-300 group-hover:bg-gray-700' />
                        <img
                          src='assets/tools-icon-1.252d207e.svg'
                          alt='Sandwich Automation'
                          className='hover-slider__item-icon absolute left-1/2 top-[6px] h-sm w-sm origin-center -translate-x-1/2 select-none rounded-full opacity-0 transition-all duration-[850ms]'
                        />
                      </div>
                      <div className='hover-slider__item-info relative'>
                        <p className='hover-slider__item-title heading-h5 lg:heading-h5 text-[22px] text-gray-100 group-hover:text-gray-700'>
                          Sandwich Automation
                        </p>
                        <div className='hover-slider__item-info-inner pointer-events-none max-h-0 w-full max-w-[346px] opacity-0 transition-all duration-[850ms]'>
                          <p className='body-text-s md:body-text-m lg:body-text-l hover-slider__item-subtitle font-semibold hover-slider__green'>
                            Put all your idle coins to work.
                          </p>
                          <p className='body-text-s md:body-text-m hover-slider__item-text mt-sm text-gray-600'>
                            Ape Terminal’s automated sandwich protocol generates
                            yield by sandwich attacking any token on the market,
                            for you.
                          </p>
                        </div>
                        <div className='hover-slider__item-line pointer-events-none absolute left-[-44px] top-80px h-0 w-[1px] origin-bottom bg-gray-800 transition-all duration-[850ms] group-last:hidden lg:left-[-64px]' />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='slider-item'
                  id='slider-item-2'
                  style={{ opacity: 1, transition: "opacity 1s" }}>
                  <div className='hover-slider__item group cursor-pointer py-[12px] lg:pointer-events-none '>
                    <div className='hover-slider__item-inner flex items-start gap-sm overflow-hidden lg:gap-lg'>
                      <div className='hover-slider__item-left relative flex w-64px flex-col items-center justify-center'>
                        <div className='mt-[6px] h-sm w-sm rounded-full bg-gray-800 transition-colors duration-300 group-hover:bg-gray-700' />
                        <img
                          src='assets/tools-icon-2.7aa52cdb.svg'
                          alt='Presale Sniping'
                          className='hover-slider__item-icon absolute left-1/2 top-[6px] h-sm w-sm origin-center -translate-x-1/2 select-none rounded-full opacity-0 transition-all duration-[850ms]'
                        />
                      </div>
                      <div className='hover-slider__item-info relative'>
                        <p className='hover-slider__item-title heading-h5 lg:heading-h5 text-[22px] text-gray-100 group-hover:text-gray-700'>
                          Presale Sniping
                        </p>
                        <div className='hover-slider__item-info-inner pointer-events-none max-h-0 w-full max-w-[346px] opacity-0 transition-all duration-[850ms]'>
                          <p className='body-text-s md:body-text-m lg:body-text-l hover-slider__item-subtitle font-semibold hover-slider__orange'>
                            Never miss a sale again.
                          </p>
                          <p className='body-text-s md:body-text-m hover-slider__item-text mt-sm text-gray-600'>
                            Ape Terminal has the industry's most advanced
                            sniping technology, able to front run every
                            competitor - for you.
                          </p>
                        </div>
                        <div className='hover-slider__item-line pointer-events-none absolute left-[-44px] top-80px h-0 w-[1px] origin-bottom bg-gray-800 transition-all duration-[850ms] group-last:hidden lg:left-[-64px]' />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='slider-item'
                  id='slider-item-3'
                  style={{ opacity: 1, transition: "opacity 1s" }}>
                  <div className='hover-slider__item group cursor-pointer py-[12px] lg:pointer-events-none '>
                    <div className='hover-slider__item-inner flex items-start gap-sm overflow-hidden lg:gap-lg'>
                      <div className='hover-slider__item-left relative flex w-64px flex-col items-center justify-center'>
                        <div className='mt-[6px] h-sm w-sm rounded-full bg-gray-800 transition-colors duration-300 group-hover:bg-gray-700' />
                        <img
                          src='assets/tools-icon-3.20a2af1b.svg'
                          alt='Copy Trading'
                          className='hover-slider__item-icon absolute left-1/2 top-[6px] h-sm w-sm origin-center -translate-x-1/2 select-none rounded-full opacity-0 transition-all duration-[850ms]'
                        />
                      </div>
                      <div className='hover-slider__item-info relative'>
                        <p className='hover-slider__item-title heading-h5 lg:heading-h5 text-[22px] text-gray-100 group-hover:text-gray-700'>
                          Copy Trading
                        </p>
                        <div className='hover-slider__item-info-inner pointer-events-none max-h-0 w-full max-w-[346px] opacity-0 transition-all duration-[850ms]'>
                          <p className='body-text-s md:body-text-m lg:body-text-l hover-slider__item-subtitle font-semibold hover-slider__orange'>
                            Move with the whales.
                          </p>
                          <p className='body-text-s md:body-text-m hover-slider__item-text mt-sm text-gray-600'>
                            Ape Terminal labels industry smart money wallets to
                            let you know their moves. Automatically align your
                            portfolio with the whales in a single click.
                          </p>
                        </div>
                        <div className='hover-slider__item-line pointer-events-none absolute left-[-44px] top-80px h-0 w-[1px] origin-bottom bg-gray-800 transition-all duration-[850ms] group-last:hidden lg:left-[-64px]' />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='slider-item'
                  id='slider-item-3'
                  style={{ opacity: 1, transition: "opacity 1s" }}>
                  <div className='hover-slider__item group cursor-pointer py-[12px] lg:pointer-events-none '>
                    <div className='hover-slider__item-inner flex items-start gap-sm overflow-hidden lg:gap-lg'>
                      <div className='hover-slider__item-left relative flex w-64px flex-col items-center justify-center'>
                        <div className='mt-[6px] h-sm w-sm rounded-full bg-gray-800 transition-colors duration-300 group-hover:bg-gray-700' />
                        <img
                          src='assets/tools-icon-4.0a00b0f5.svg'
                          alt='Limits, DCA, Stop-Loss'
                          className='hover-slider__item-icon absolute left-1/2 top-[6px] h-sm w-sm origin-center -translate-x-1/2 select-none rounded-full opacity-0 transition-all duration-[850ms]'
                        />
                      </div>
                      <div className='hover-slider__item-info relative'>
                        <p className='hover-slider__item-title heading-h5 lg:heading-h5 text-[22px] text-gray-100 group-hover:text-gray-700'>
                          Limits, DCA, Stop-Loss
                        </p>
                        <div className='hover-slider__item-info-inner pointer-events-none max-h-0 w-full max-w-[346px] opacity-0 transition-all duration-[850ms]'>
                          <p className='body-text-s md:body-text-m lg:body-text-l hover-slider__item-subtitle font-semibold hover-slider__green'>
                            Advanced trading on-chain.
                          </p>
                          <p className='body-text-s md:body-text-m hover-slider__item-text mt-sm text-gray-600'>
                            Ape Terminal brings advanced centralized exchange
                            trading experience to any DEX, any chain. Benefit
                            from the technology of professional trading hedge
                            funds, with a tap of a single button.
                          </p>
                        </div>
                        <div className='hover-slider__item-line pointer-events-none absolute left-[-44px] top-80px h-0 w-[1px] origin-bottom bg-gray-800 transition-all duration-[850ms] group-last:hidden lg:left-[-64px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tools__image relative mx-auto w-full max-w-[600px] select-none lg:mx-0 lg:mb-[180px] lg:max-w-[491px]'>
                <span className='block'>
                  {/* Placeholder image */}
                  {/* Replace with your actual image */}
                  <img
                    alt='Tools'
                    loading='lazy'
                    width={1473}
                    height={1380}
                    decoding='async'
                    data-nimg={1}
                    className='relative z-2 w-full'
                    style={{ color: "transparent" }}
                    src='assets/tools-image.13620f93.png'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Add any other components or sections as needed
  );
};

export default Section3;
