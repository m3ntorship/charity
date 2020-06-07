import React from 'react';
import {
  AboutLoader,
  NewsletterLoader,
  ArticlesLoader,
  LinksLoader
} from './FooterContentLoading';
import Links from './Links/index';
import Articles from './Articles/index';
import About from './About/index';
import Newsletter from './NewsLetter/index';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';


const Footer = ({ data, loading, error }) => {
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

  if (error) {
    return (
      <div>
        <p>Failed to Fetch Data</p>
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
    const {
      About_title,
      about_description,
      about_button: { url: about_button_url, text: about_button_text },
      news_title,
      newsletter_description,
      newsletter_title,
      articles,
      links,
      Disclaimer
    } = data;
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 py-16 text-sm font-hairline">
          <div className="ref-container" ref={refLeft}>
            <animated.div
              style={fadeLeft}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
            >
              <About
                title={About_title}
                description={about_description}
                Right
                url={about_button_url}
                cta={about_button_text}
              />
              <Articles title={news_title} articles={articles} />
            </animated.div>
          </div>
          <div className="ref-container" ref={refRight}>
            <animated.div
              style={fadeRight}
              className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
            >
              <Links title="Links" links={links} />
              <Newsletter
                title={newsletter_title}
                description={newsletter_description}
              />
            </animated.div>
          </div>
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            {Disclaimer}
          </p>
        </div>
      </footer>
    );
  }
  return 'generic error';
};

export {  Footer };
