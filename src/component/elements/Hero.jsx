/** @format */

import React from "react";

const Hero = () => {
  return (
    <>
      <section className='hero mt-[4px] lg:mt-xs'>
        <div className='wide-container'>
          <div className='hero__wrapper relative flex flex-col rounded-[24px] bg-[url(../public/assets/hero-bg-mobile.jpg)] bg-cover bg-[0%_100%] bg-no-repeat px-[20px] pt-[108px] lg:rounded-[32px] lg:bg-[url(../public/assets/hero-bg-empty.jpg)] lg:bg-[50%_100%] lg:px-xxl lg:pt-160px'>
            <div className='hero__inner flex items-end justify-center text-gray-900'>
              <div className='hero__info mx-auto max-w-[561px] text-center'>
                <div
                  className='in-view '
                  style={{ opacity: 1, transform: "none" }}>
                  <h1 className='hero__title heading-mobile-h1 lg:heading-hero2'>
                    Ape, Better.
                  </h1>
                  <p className='body-text-l lg:body-text-xl hero__description mt-md'>
                    Ape Terminal is the fastest growing launchpad with the
                    industry's greatest yield generating tools.
                  </p>
                  <div className='hero__social mt-md flex justify-center'>
                    <div
                      className='social-icons flex w-max flex-wrap justify-center gap-[4px] rounded-[32px] p-[4px] '
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.20) 100%)",
                        boxShadow:
                          "0px 1px 2px 0px rgba(0, 0, 0, 0.15), 0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset",
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
              </div>
            </div>
            <div className='desktop-holder pointer-events-none relative mx-[-20px] mt-[-40px] select-none lg:mx-[-48px] xxl:mt-[-100px] xxxl:mt-[-200px]'>
              <div className='hidden lg:block'>
                <span className='block' style={{ opacity: 1 }}>
                  <img
                    alt='desktop holder'
                    loading='lazy'
                    width={761}
                    height={356}
                    decoding='async'
                    data-nimg={1}
                    className='w-full opacity-0'
                    style={{ color: "transparent" }}
                    src='assets/hero-image-desktop-holde.jpg'
                    srcSet='assets/hero-image-desktop-holde.jpg'
                  />
                </span>
              </div>
              <div className='lg:hidden'>
                <span className='block' style={{ opacity: 1 }}>
                  <img
                    alt='mobile holder'
                    loading='lazy'
                    width={188}
                    height={178}
                    decoding='async'
                    data-nimg={1}
                    className='w-full opacity-0'
                    style={{ color: "transparent" }}
                    src='assets/hero-image-mobile-holder.jpg'
                    srcSet='assets/hero-image-mobile-holder.jpg'
                  />
                </span>
              </div>
              <div className='hero__perspective pointer-events-none absolute bottom-0 left-0 h-full w-full select-none mix-blend-screen'>
                <div className='hero__anim absolute bottom-[47%] left-[13%] w-[85%] lg:bottom-[56%] lg:left-[36%] lg:w-[50%] xl:bottom-[52%] xl:left-[37%] xl:w-[46%] xxl:bottom-[44%] xxl:left-[40%] xxl:w-[38%]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
