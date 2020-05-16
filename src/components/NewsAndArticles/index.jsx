import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI, useCharityAPI } from '../../clients';
import Heading from '../Heading/index';
import {
  HeaderLoader,
  BtnLoader,
  ParagraphLoader,
  ArticleLoader
} from './myLoader';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';

const ArticlesList = ({ articles }) => {
  if (!articles) {
    return <div>Sorry, couldn't find the articles</div>;
  }

  return articles.map(
    (
      { title, link: { text, url: linkURL }, image: { url: imageURL }, _id },
      index
    ) => (
      <Article
        title={title}
        linkText={text}
        linkURL={linkURL}
        imageURL={imageURL}
        key={_id}
        index={index}
      />
    )
  );
};

const News = () => {
  const { data, loading, dataError } = useCharityAPI('/news-and-articles');
  // //Meida query
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const slideHead = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : 'translateX(-50%)'
  });
  const slideP = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)',
    delay: isMobile ? 0 : 300
  });

  const slideBtn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0%)'
      : isMobile
      ? 'translateY(-50%)'
      : 'translateX(50%)',
    delay: isMobile ? 0 : 600
  });

  if (dataError) {
    return (
      <div>
        <p>{dataError}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="news font-body bg-c800 mb-20 md:mb-64 pt-18 pb-1 md:pb-48 relative">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <HeaderLoader />
            <p className=" news_description text-c600 text-base leading-loose">
              <ParagraphLoader />
            </p>
            <div className="btn-div">
              <BtnLoader />
            </div>
          </div>
          <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:gap-4 md:absolute w-full overflow-hidden ">
            <ArticleLoader />
            <ArticleLoader />
            <ArticleLoader />
          </div>
        </div>
      </section>
    );
  }

  if (data) {
    const {
      heading: { heading_primary, heading_secondary },
      link: { text, url },
      home_articles
    } = data;
    return (
      <section className="news font-body bg-c800 mb-20 md:mb-64 pt-18 pb-1 md:pb-48 relative">
        <div className="container">
          <div className="head-section text-center md:text-left grid grid-cols-1 md:grid-cols-12 ">
            <animated.div
              style={slideHead}
              ref={ref}
              className="md:col-span-5 text-center md:text-left"
            >
              <Heading
                primaryText={`${heading_primary}`}
                secondaryText={`${heading_secondary}`}
                primaryTextColor="dark"
                // primaryClassName="md:col-span-5 text-center md:text-left"
              />
            </animated.div>

            <animated.p
              style={slideP}
              className=" news_description text-c600  md:col-span-4 text-base leading-loose"
            >
              {data.description}
            </animated.p>
            <animated.div style={slideBtn} className="btn-div md:col-span-3">
              <button className="btn btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3 cursor-pointer">
                <a className="news__btn" href={url}>
                  {text}
                </a>
              </button>
            </animated.div>
          </div>
        </div>
        <div className="container relative">
          <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:gap-4 md:absolute w-full sm:grid-cols-2 ">
            <ArticlesList articles={home_articles} />
          </div>
        </div>
      </section>
    );
  }

  return 'generic error';
};

const Article = ({ title, linkText, linkURL, imageURL, index }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  const slideCard = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView
      ? 'translate(0%)'
      : isMobile
      ? index % 2 === 0
        ? 'translateX(-50%)'
        : 'translateX(50%)'
      : 'translateY(-50%)',
    delay: isMobile ? 0 : 900 + 250 * index
  });

  return (
    <animated.div className="article relative" style={slideCard} ref={cardRef}>
      <img className="article__image" src={imageURL} alt="article thumbnail" />
      <div className="article-info transform -translate-y-1/2 bg-c000 text-center shadow-lg">
        <div className="content-info">
          <span className="text-c600 mx-2">
            <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
          </span>
          <span className="text-c600 mx-2">
            <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
          </span>
          <h4 className="text-c100 font-bold">{title}</h4>
        </div>
        <div className="block text-c100 text-center spicial-info cursor-pointer">
          <a
            href={linkURL}
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fas fa-long-arrow-alt-right"></i>
            {linkText}
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default News;
