import React, { useRef } from 'react';
import useMedia from '../../Helpers/useMedia';
import './style.css';
import { useCharityAPI } from '../../clients';
import Heading from '../Heading';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import { MyLoader, TitleLoader } from './myLoader';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, useChain } from 'react-spring';

const numberToLocal = number => Number(number).toLocaleString();

const Cause = ({ title, description, raised, goal, image, index }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  const slideCardRef = useRef();
  const slideCard = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView ? 'translateY(0%)' : 'translateY(-25%)',
    delay: isMobile ? 0 : 300 * index,
    ref: slideCardRef
  });

  const progress = Math.floor((raised / goal) * 100);
  const aspiringRef = useRef();
  const aspiring = useSpring({
    percent: cardInView ? progress : 0,
    from: { percent: 0 },
    delay: isMobile ? 0 : 300 + 300 * index,
    ref: aspiringRef
  });

  useChain([slideCardRef, aspiringRef]);

  const progressNumber = aspiring.percent.interpolate(percent =>
    Math.floor(percent)
  );
  const progressWidth = aspiring.percent.interpolate(
    percent => Math.floor(percent) + '%'
  );

  return (
    <animated.div
      className="causes__card border-gray-900 border border-solid z-10 bg-c000"
      ref={cardRef}
      style={isMobile ? null : slideCard}
    >
      <div className="causes__img pb-5">
        <img src={image} alt="Raise Funds For Poverity Kids" />
      </div>

      <div className="causes__text">
        <h3 className="causes__card--heading text-c100 text-lg font-bold pb-8">
          {title}
        </h3>
        <p className="causes__card--descriptio text-c600 text-sm pb-5">
          {description}
        </p>
      </div>

      <div className="causes__info pb-10">
        <div className="causes__raised relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-hand-holding-usd text-lg"></i>
          </span>
          <span className="causes__icon--funds font-bold text-c200 text-sm text-center inline-block absolute">
            ${numberToLocal(raised)}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Raised
          </span>
        </div>
        <div className="causes__goal mb-3 relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-bullseye text-lg"></i>
          </span>
          <span className="causes__icon--goal font-bold text-c200 text-sm absolute">
            ${numberToLocal(goal)}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Goal
          </span>
        </div>
      </div>

      <div className="causes__progress mb-2 relative h-2 w-full bg-c800">
        <animated.div
          className="causes__progress__progress-bar bg-c200"
          style={{
            width: progressWidth
          }}
        ></animated.div>
        <animated.div
          className="causes__progress__tooltip bg-c200"
          style={{
            left: progressWidth
          }}
        >
          <animated.span>{progressNumber}</animated.span>%
        </animated.div>
      </div>

      <button className="causes__btn font-bold bg-c800 text-c600 hover:bg-c300 hover:text-c100 transition duration-200 ease-out">
        Donate Now
      </button>
    </animated.div>
  );
};

const Causes = () => {
  const { data, loading, dataError } = useCharityAPI('/popular-causes');

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const slide = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)'
  });

  const isCarousel = useMedia(['(min-width: 768px)'], [false], true);

  if (dataError) {
    return <div>{dataError} </div>;
  }

  if (loading) {
    return (
      <div className="causes__wrapper container flex flex-col items-center my-24">
        <div className="flex w-full justify-center pb-16">
          <TitleLoader />
        </div>
        {isCarousel ? (
          <div className=" flex w-full justify-center">
            <MyLoader />
          </div>
        ) : (
          <div className=" w-full grid grid-cols-12 gap-8">
            <div className="flex col-span-4">
              <MyLoader />
            </div>
            <div className="flex col-span-4">
              <MyLoader />
            </div>
            <div className="flex col-span-4">
              <MyLoader />
            </div>
          </div>
        )}
      </div>
    );
  }
  if (data) {
    return (
      <section className="causes relative">
        <div className="causes__container container">
          <animated.div className="causes__headings" ref={ref} style={slide}>
            <Heading
              primaryText={data.causes_heading.heading_primary}
              secondaryText="Causes"
              align="center"
              primaryTextColor="dark"
            />
          </animated.div>

          {isCarousel ? (
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={100}
              totalSlides={data.causes.length}
              isIntrinsicHeight="true"
              isPlaying="true"
              interval="5000"
              lockOnWindowScroll="true"
              className="causes__carousel causes__carousel__grid"
            >
              <Slider className="causes__carousel__slider col-start-2 col-end-3">
                {data.causes.map((item, index) => {
                  return (
                    <Slide className="causes__carousel__slide" key={item.id}>
                      <Cause
                        title={item.title}
                        description={item.description}
                        raised={item.raised}
                        goal={item.goal}
                        image={item.image.url}
                        index={index}
                      />
                    </Slide>
                  );
                })}
              </Slider>
              <div className="causes__carousel__back-arrow causes__carousel__arrow flex items-center justify-center text-lg col-start-1 col-end-2 row-start-1 row-end-2 pr-2">
                <ButtonBack className="text-c100 border-c100 rounded-full ">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </ButtonBack>
              </div>
              <div className="causes__carousel__forward-arrow causes__carousel__arrow flex items-center justify-center text-lg col-start-3 col-end-4 row-start-1 row-end-2 pl-2">
                <ButtonNext className="text-c100 border-c100 rounded-full">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </ButtonNext>
              </div>
              <div className="causes__carousel__picker flex items-center justify-center text-lg col-start-1 col-end-4 row-start-2 row-end-3 py-4">
                <DotGroup className="causes_dots_group" />
              </div>
            </CarouselProvider>
          ) : (
            <div className="causes__wrapper grid grid-cols-3 gap-8">
              {data.causes.map((item, index) => {
                return (
                  <Cause
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    raised={item.raised}
                    goal={item.goal}
                    image={item.image.url}
                    index={index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
  return 'Generic error';
};

export default Causes;
