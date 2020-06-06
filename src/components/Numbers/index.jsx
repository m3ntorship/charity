import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import dotsImage from './img/dots.png';
import circleImage from './img/circle.png';
import { ImageLoader, NumberLoader } from './MyLoader';
import './style.css';

const Number = ({ number, title, string }) => {
  let intValue = parseInt(number);
  const [numbersRef, numbersInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  let countTo = useSpring({
    from: { value: numbersInView ? 1 : 0 },
    to: { value: numbersInView ? intValue : 0 },
    config: { delay: 300, easing: 3 }
  });
  return (
    <div className="statistics-content__item justify-end flex flex-col w-1/2 md:w-1/4 pt-4">
      <div ref={numbersRef}>
        <animated.span className="statistics-content__item__value text-center tracking-wide text-c200 text-xl font-light font-body leading-loose">
          {countTo.value.interpolate(value => Math.floor(value))}
        </animated.span>
        <span className="statistics-content__item__str text-center tracking-wide text-c200 text-xl font-light font-body leading-loose">
          {string}
        </span>
      </div>
      <h3 className="statistics-content__item__name mt-3 tracking-wide capitalize font-light text-c100 text-sm whitespace-no-wrap">
        {title}
      </h3>
    </div>
  );
};

const Numbers = ({ loading, error, data }) => {
  //while getting data
  if (error) {
    return (
      <div>
        We couuld not fetch data
        <a href="#/" className="text-c200 underline ">
          retry?
        </a>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="container flex flex-col pt-24">
        <div className="flex">
          <ImageLoader />
        </div>
        <div className="flex flex-row flex-wrap justify-evenly">
          <div className="flex w-1/2 md:w-1/5 justify-center">
            <NumberLoader />
          </div>
          <div className="flex w-1/2 md:w-1/5 justify-center">
            <NumberLoader />
          </div>
          <div className="flex w-1/2 md:w-1/5 justify-center">
            <NumberLoader />
          </div>
          <div className="flex w-1/2 md:w-1/5 justify-center">
            <NumberLoader />
          </div>
        </div>
      </div>
    );
  }
  if (!loading && !error && data) {
    const {
      speaking_numbers,
      image_background: { url }
    } = data;
    const numbersList = speaking_numbers.map(item => {
      if (item.number <= 1000) {
        item.string = '+';
      } else if (item.number < 10000) {
        item.string = '';
      } else if (item.number >= 10000) {
        item.number = item.number / 1000;
        item.string = 'K';
      }
      return (
        <Number
          title={item.title}
          number={item.number}
          string={item.string}
          key={item.id}
        />
      );
    });
    return (
      <section className="numbers z-0 relative bg-c800 pb-0">
        <div className="container">
          <div className="statistics-wrapper">
            <div
              className="statistics-wrapper__image bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${url})`
              }}
            ></div>
            <div className="statistics-numbers">
              <div className="statistics-numbers__speak relative text-center">
                <p className="statistics-numbers__speak__text p-4 font-normal absolute tracking-wide text-center capitalize text-lg font-body font-light text-c000 bg-c400">
                  numbers speak
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-content bg-c000">
          <div className="container">
            <div className="statistics-content__list p-8 md:p-16 bg-c800 flex text-center flex-wrap">
              {numbersList}
            </div>
          </div>
        </div>
        <div className="statistics-wrapper__dots-image absolute hidden md:block">
          <img src={dotsImage} alt="" />
        </div>
        <div className="statistics-wrapper__circle-image absolute hidden md:block">
          <img src={circleImage} alt="" />
        </div>
      </section>
    );
  } else {
    return 'Genaric error';
  }
};

export { Numbers };
