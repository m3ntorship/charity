import React from 'react';
import MainNavigation from '../MainNavigation';
import './styles.css';
import left_arrow_icon from './img/left-arrow-icon.png';
import right_arrow_icon from './img/right-arrow-icon.png';
import plant_left from './img/plant-left.png';
import plant_right from './img/plant-right.png';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
const HeaderCarousel = () => {
  return (
    <section className="slider py-0 bg-cover bg-center bg-c800 relative">
      <div className="container">
        <MainNavigation />
      </div>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={2}
        className="h-full header__carousel"
      >
        <Slider className="h-full">
          <Slide className="h-full">
            <div className="header__carousel__slide h-full flex items-center justify-center">
              <div className="text text-center text-c000">
                <p className="text-lg italic">Make an Impact</p>
                <div className="main flex items-center justify-center">
                  <img src={plant_left} alt="left-spike" />
                  <p className="font-bold leading-none">
                    You Can Make <br />A
                    <span className="underline text-c300 font-hairline">
                      Difference
                    </span>
                  </p>
                  <img src={plant_right} alt="right-spike" />
                </div>
                <a className="btn-md bg-c200 inline-block mt-6" href="#a">
                  View Causes
                </a>
              </div>
            </div>
          </Slide>
          <Slide className="h-full">
            <div className="header__carousel__slide h-full flex items-center justify-center">
              <div className="text text-center text-c000">
                <p className="text-lg italic">Make an Impact</p>
                <div className="main flex items-center justify-center">
                  <img src={plant_left} alt="left-spike" />
                  <p className="font-bold leading-none">
                    You Can Make <br />A
                    <span className="underline text-c300 font-hairline">
                      Difference
                    </span>
                  </p>
                  <img src={plant_right} alt="right-spike" />
                </div>
                <a className="btn-md bg-c200 inline-block mt-6" href="#a">
                  View Causes
                </a>
              </div>
            </div>
          </Slide>
        </Slider>

        <div className="header__carousel__arrows absolute w-full flex text-c000 border-c000 justify-between px-16">
          <ButtonBack className="rounded-full">
            <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
              <i class="fas fa-arrow-left"></i>
            </div>
          </ButtonBack>
          <ButtonNext className="rounded-full  ">
            <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
              <i className="fas fa-arrow-right"></i>
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
};

export default HeaderCarousel;
