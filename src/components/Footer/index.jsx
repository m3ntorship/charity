import React from 'react';
import {
  AboutLoader,
  NewsletterLoader,
  ArticlesLoader,
  LinksLoader
} from './FooterContentLoading';
import { useCharityAPI } from '../../clients';
import Links from './Links/index';
import Articles from './Articles/index';
import About from './About/index';
import Newsletter from './NewsLetter/index';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const Footer = () => {
  const { data, loading, dataError } = useCharityAPI('/footer');

  //Scroll observation

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true
  });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });

  const fadeLeft = useSpring({
    opacity: inViewLeft ? 1 : 0,
    transform: inViewLeft ? 'translateX(0%)' : 'translateX(-50%)'
  });

  const fadeRight = useSpring({
    opacity: inViewRight ? 1 : 0,
    transform: inViewRight ? 'translateX(0%)' : 'translateX(50%)'
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
      <footer className="footer">
        <div className="container w-9/12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-16">
          <AboutLoader />
          <ArticlesLoader />
          <LinksLoader />
          <NewsletterLoader />
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100"></p>
        </div>
      </footer>
    );
  }

  if (data) {
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 py-16 text-sm font-hairline">
          <div className="ref-container" ref={refLeft}>
            <animated.div
              style={fadeLeft}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
            >
              <About
                title={data.About_title}
                description={data.about_description}
                Right
                url={data.about_button.url}
                cta={data.about_button.text}
              />
              <Articles title={data.news_title} articles={data.articles} />
            </animated.div>
          </div>
          <div className="ref-container" ref={refRight}>
            <animated.div
              style={fadeRight}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
            >
              <Links title="Links" links={data.links} />
              <Newsletter
                title={data.newsletter_title}
                description={data.newsletter_description}
              />
            </animated.div>
          </div>
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            {data.Disclaimer}
          </p>
        </div>
      </footer>
    );
  }
  return 'generic error';
};

export default Footer;
