import React from 'react';
import './styles.css';
import { useCharityAPI } from '../../clients';
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
import Article from '../Article';

const ArticlesList = ({ articles }) => {
  if (!articles) {
    return <div>Sorry, couldn't find the articles</div>;
  }

  return articles.map(
    (
      { title, link: { text, url: linkURL }, image: { url: imageURL }, id },
      index
    ) => (
      <Article
        title={title}
        linkText={text}
        linkURL={linkURL}
        imageURL={imageURL}
        key={id}
        index={index}
      />
    )
  );
};

const News = ({ data, loading, error }) => {
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

  if (error) {
    return (
      <div>
        <p>we can not fetch data</p>
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
          <div className=" md:col-span-5 head-section text-center md:text-left grid grid-cols-1 md:grid-cols-12 ">
            <animated.div
              style={slideHead}
              ref={ref}
              className="md:col-span-5 text-center md:text-left"
            >
              <Heading
                primaryText={`${heading_primary}`}
                secondaryText={`${heading_secondary}`}
                primaryTextColor="dark"
                primaryClassName="text-center md:text-left"
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
};
const NewsConatiner = () => {
  const { data, loading, dataError } = useCharityAPI('/news-and-articles');
  return <News data={data} loading={loading} error={dataError} />;
};
export { News, NewsConatiner };
