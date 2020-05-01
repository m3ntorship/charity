import React from 'react';
import MainNavigation from '../MainNavigation';
import './styles.css';
import left_arrow_icon from './img/left-arrow-icon.png';
import right_arrow_icon from './img/right-arrow-icon.png';
import plant_left from './img/plant-left.png';
import plant_right from './img/plant-right.png';

const Carousel = () => {
  return(
    <section className="slider pt-0 bg-cover bg-center relative bg-c800 relative">
      <div className="overlay absolute h-full w-full">
        <div className="container h-full flex flex-col">
          <MainNavigation />

          <div className="header-slider h-full flex items-center justify-center">
            <div className="text text-center text-c000">
              <p className="text-lg italic">Make an Impact</p>
              <div className="main flex items-center justify-center">
                <img
                  src={plant_left}
                  alt="left-spike"
                />
                <p className="font-bold leading-none">
                  You Can Make <br />A
                  <span className="underline text-c300 font-hairline">
                    Difference
                  </span>
                </p>
                <img
                  src={plant_right}
                  alt="right-spike"
                />
              </div>
              <a className="btn-md bg-c200 inline-block mt-6" href="#a">
                View Causes
              </a>
            </div>
          </div>
        </div>

        <div className="arrows absolute w-full flex justify-between px-16">
          <button className="left-arrow rounded-full border-solid border-c000 border p-4 opacity-50">
            <img
              src={left_arrow_icon}
              alt="left-arrow-icon"
            />
          </button>
          <button className="right-arrow rounded-full border-solid border-c000 border p-4">
            <img
              src={right_arrow_icon}
              alt="right-arrow-icon"
            />
          </button>
        </div>
      </div>
    </section>
  )
}


export {Carousel}
