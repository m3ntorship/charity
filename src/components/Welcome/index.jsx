import React from 'react';
import { Fragment } from 'react';
import './styles.css';
import { MainLoader, ImageLoader, ListLoader, ButtonLoader } from './MyLoader';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../Helpers/useMedia';

export const Welcome = ({ data, loading, error }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const slideStart = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)'
  });

  const slideText = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : 'translateX(50%)'
  });

  if (error) {
    return <div className="error">error here</div>;
  }

  if (loading) {
    return (
      <div
        className="container grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 md:gap-8 md:row-gap-8 overflow-hidden"
        style={{ gridTemplateRows: '.6fr .4fr .1fr' }}
      >
        <div className="hidden md:flex md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-4">
          <ImageLoader />
        </div>
        <div className="flex justify-center mt-24 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-2 ">
          <MainLoader />
        </div>
        <div className="flex flex-col items-center sm:flex-row justify-between md:col-start-7 md:col-end-13 md:row-start-2 md:row-end-3">
          <div className="flex justify-center my-8 w-1/2">
            <ListLoader />
          </div>
          <div className="flex justify-center my-8 w-1/2">
            <ListLoader />
          </div>
        </div>
        <div className="flex justify-center md:justify-start md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-4">
          <ButtonLoader />
        </div>
      </div>
    );
  }

  if (data) {
    let {
      imageUrl,
      heading_primary,
      heading_secondary,
      description,
      linkText,
      linkUrl,
      welcome_cards
    } = data;
    return (
      <Fragment>
        <section className="welcome py-0 text-c600 pt-16 md:pt-0" ref={ref}>
          <div
            className="welcome_wrap container grid grid-cols-12 gap-6
            md:grid-rows-3"
            style={{ gridTemplateRows: '.6fr .4fr .0fr' }}
          >
            <WelcomeImage url={imageUrl} slideStart={slideStart} />

            <WelcomeHeader
              header={heading_primary}
              title_complementary={heading_secondary}
              desc={description}
              slideText={slideText}
            />
            <animated.ul
              className="welcome_list col-start-1 col-end-13 sm:text-center 
              sm:flex sm:col-start-1 sm:col-end-13
              md:col-start-7 md:col-end-13 md:flex md:flex-col md:text-left 
              lg:flex-row md:row-start-2 md:row-end-3"
              style={slideText}
            >
              <MiniCard cardInfo={welcome_cards} />
            </animated.ul>

            <animated.div
              className="welcome_btn w-full block text-center md:text-left col-start-1 col-end-13 sm:col-start-3 sm:col-end-11
              md:col-start-7 md:col-end-13 md:row-start-4"
              style={slideText}
            >
              <WelcomeBtn linkText= {linkText} linkUrl={linkUrl} />
            </animated.div>
          </div>
        </section>
      </Fragment>
    );
  }
};

// left side card DONE

const WelcomeImage = ({ url, slideStart }) => {
  return (
    <animated.div
      className="welcome__start hidden sm:block  sm:col-start-1 sm:col-end-6 
      md:col-start-1 md:col-end-6  md:row-span-4"
      style={slideStart}
    >
      <div className="welcome__start__img h-full relative ">
        <img
          src={url}
          alt="childern smiling"
          className="object-cover object-center w-full h-full"
        />
        <div className="welcome__start__side absolute top-0 h-full bg-c200 w-12"></div>
      </div>
    </animated.div>
  );
};

// right side card in done

const WelcomeHeader = ({ header, title_complementary, desc, slideText }) => {
  return (
    <Fragment>
      <animated.div
        className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13
        md:col-start-7 md:col-end-13  md:row-span-1 md:pt-32"
        style={slideText}
      >
        <h2
          className="welcome_header text-c100 leading-tighter text-large text-center md:text-left font-bold  mb-8 lg:mb-12
          md:text-xl"
        >
          {header}
          <span className="text-c200 font-hairline underline border-b-2">
            {title_complementary}
          </span>
        </h2>
        <p className="welcome_description tracking-wide  text-center md:text-left">
          {desc}
        </p>
      </animated.div>
    </Fragment>
  );
};

// loop over two cards
const MiniCard = ({ cardInfo }) => {
  return cardInfo.map(card => {
    return (
      <li key={card.id} className="welcome__list__item pl-4">
        <h3 className="welcome__list__item__title relative mb-6 sm:my-4 text-md font-bold text-c100 lg:my-10">
          {card.title}
        </h3>
        <p className="mb-8">{card.description}</p>
      </li>
    );
  });
};

// card btn
const WelcomeBtn = ({ linkText, linkUrl}) => {
  return (
    <button href={linkUrl} className="btn btn-lg bg-c300">
      {linkText}
    </button>
  );
};
