import React from 'react'

const Section2 = () => {
  return (
    <section className="about">
    <div className="wide-container">
      <div className="about__wrapper relative flex flex-col items-center justify-center rounded-[24px] border-[0.5px] border-white border-opacity-[0.15] bg-white bg-opacity-[0.07] px-sm py-xl lg:rounded-[32px] lg:px-xxl lg:pb-[200px] lg:pt-140px">
        <div className="about__heading mx-auto max-w-[842px] text-center">
          <div className="in-view " style={{ opacity: 1, transform: "none" }}>
            <h3 className="about__title heading-h3 lg:heading-h1">
              <span className="gradient-text">Ape Terminal</span> Unique
              Offerings.
            </h3>
            <p className="subtitle-xs sm:subtitle-s md:subtitle-m about__subtitle mx-auto mt-xs max-w-[488px] text-gray-500 md:mt-sm lg:mt-md">
              We provide straight forward tools that maximize financial
              opportunities.
            </p>
          </div>
        </div>
        <div className="icons-cards flex w-full flex-col gap-lg lg:flex-row lg:justify-center lg:gap-y-64px mt-xl lg:mt-[88px]">
          <div
            className="in-view border-b border-gray-800 pb-md last:border-none last:pb-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-[76px]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="icons-cards__item flex items-start gap-md lg:gap-lg ">
              <img
                src="assets/about-icon-1.ba6308ff.svg"
                alt="Native super-app + trading terminal supported on desktop & mobile."
                width={64}
                height={64}
                className="icons-cards__image h-xxl w-xxl select-none"
              />
              <div className="icons-cards__info lg:max-w-[218px]">
                <p className="body-text-s md:body-text-m text-gray-600">
                  <span className="block">
                    <b>Native super-app + trading terminal</b> supported on
                    desktop &amp; mobile.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="in-view border-b border-gray-800 pb-md last:border-none last:pb-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-[76px]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="icons-cards__item flex items-start gap-md lg:gap-lg ">
              <img
                src="assets/about-icon-2.34914225.svg"
                alt="Uses MEV-tech to generate yield, on opportunity, automatically."
                width={64}
                height={64}
                className="icons-cards__image h-xxl w-xxl select-none"
              />
              <div className="icons-cards__info lg:max-w-[218px]">
                <p className="body-text-s md:body-text-m text-gray-600">
                  <span className="block">
                    <b>Uses MEV-tech to generate yield</b>, on opportunity,
                    automatically.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="in-view border-b border-gray-800 pb-md last:border-none last:pb-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-[76px]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="icons-cards__item flex items-start gap-md lg:gap-lg ">
              <img
                src="assets/about-icon-3.617c1e95.svg"
                alt="The most user-friendly experience for all your on-chain needs."
                width={64}
                height={64}
                className="icons-cards__image h-xxl w-xxl select-none"
              />
              <div className="icons-cards__info lg:max-w-[218px]">
                <p className="body-text-s md:body-text-m text-gray-600">
                  <span className="block">
                    <b>The most user-friendly experience</b> for all your on-chain
                    needs.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Section2