import React, { useState, useEffect } from 'react';
import useMedia from './useMedia';
import './style.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import ContentLoader from 'react-content-loader';

const numberToLocal = number => Number(number).toLocaleString();

const Cause = ({ title, description, raised, goal, image }) => {
  const progress = Math.floor((raised / goal) * 100);
  return (
    <div className="causes__card border-gray-900 border border-solid z-10 bg-c000">
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
        <div
          className="causes__progress__progress-bar bg-c200"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="causes__progress__tooltip bg-c200"
          style={{ left: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <button className="causes__btn font-bold bg-c800 text-c600 hover:bg-c300 hover:text-c100 transition duration-200 ease-out">
        Donate Now
      </button>
    </div>
  );
};

// Loader Component
const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={475}
    viewBox="0 0 400 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="inline-block w-2/6 my-10"
  >
    <rect x="38" y="15" rx="2" ry="2" width="300" height="600" />
  </ContentLoader>
);

const Causes = () => {
  const [dataState, setDataState] = useState({});
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState({
    error: false,
    errorMessage: ''
  });

  const getData = () => {
    charityAPI('/popular-causes')
      .then(({ data }) => {
        setDataState(data);
        setLoadingState(false);
        setErrorState({ error: false });
      })
      .catch(error => {
        setLoadingState(false);
        setErrorState({
          error: true,
          errorMessage: " Couldn't fetch data"
        });
      });
  };

  useEffect(() => {
    setLoadingState(true);
    getData();
  }, []);

  const isCarousel = useMedia(['(min-width: 768px)'], [false], true);

  if (loadingState) {
    return (
      <div className="causes__wrapper grid grid-row gap-8">
        <div className="container">
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </div>
      </div>
    );
  }

  if (errorState.error) {
    return (
      <div>
        {errorState.errorMessage},{' '}
        <a href="#/" onClick={getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  } else {
    return (
      <section className="causes relative">
        <div className="causes__container container">
          <div className="causes__headings">
            <Heading
              primaryText={dataState.causes_heading.heading_primary}
              secondaryText="Causes"
              align="center"
              primaryTextColor="dark"
            />
          </div>

          {isCarousel ? (
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={100}
              totalSlides={dataState.causes.length}
              isIntrinsicHeight="true"
              isPlaying="true"
              interval="5000"
              lockOnWindowScroll="true"
              className="causes__carousel causes__carousel__grid"
            >
              <Slider className="causes__carousel__slider col-start-2 col-end-3">
                {dataState.causes.map(item => {
                  return (
                    <Slide className="causes__carousel__slide">
                      <Cause
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        raised={item.raised}
                        goal={item.goal}
                        image={item.image.url}
                      />
                    </Slide>
                  );
                })}
              </Slider>
              <div className="causes__carousel__back-arrow causes__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg col-start-1 col-end-2 row-start-1 row-end-2 pr-2">
                <ButtonBack className="text-c100 border-c100 rounded-full ">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </ButtonBack>
              </div>
              <div className="causes__carousel__forward-arrow causes__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg col-start-3 col-end-4 row-start-1 row-end-2 pl-2">
                <ButtonNext className="text-c100 border-c100 rounded-full">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </ButtonNext>
              </div>
              <div className="causes__carousel__picker lg:bg-c800 flex items-center justify-center text-lg col-start-1 col-end-4 row-start-2 row-end-3 py-4">
                <DotGroup className="causes_dots_group" />
              </div>
            </CarouselProvider>
          ) : (
            <div className="causes__wrapper grid grid-cols-3 gap-8">
              {dataState.causes.map(item => {
                return (
                  <Cause
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    raised={item.raised}
                    goal={item.goal}
                    image={item.image.url}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
};

export default Causes;
