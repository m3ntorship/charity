import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import {
  AboutLoader,
  NewsletterLoader,
  ArticlesLoader,
  LinksLoader
} from './FooterContentLoading';
import { charityAPI } from '../../clients';
import Links from './Links/index';
import Articles from './Articles/index';
import About from './About/index';
import Newsletter from './NewsLetter/index';

const Footer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = () => {
    setLoading(true);
    charityAPI('/footer')
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
        setErrorMessage("couldn't fetch data");
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  //Scroll observation
  const [refLeft, inViewLeft] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [refRight, inViewRight] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fadeRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)'
  });
  const fadeLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)'
  });

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
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            {data.Disclaimer}
          </p>
        </div>
      </footer>
    );
  } else if (error) {
    return (
      <div>
        {errorMessage},{' '}
        <a href="#/" onClick={getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  } else {
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 py-16 text-sm font-hairline">
          <animated.div
            ref={refLeft}
            style={fadeLeft}
            className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
          >
            <About
              title={data.About_title}
              description={data.about_description}
              url={data.about_button.url}
              cta={data.about_button.text}
            />
            <Articles title={data.news_title} articles={data.articles} />
          </animated.div>
          <animated.div
            ref={refRight}
            style={fadeRight}
            class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
          >
            <Links title="Links" links={data.links} />
            <Newsletter
              title={data.newsletter_title}
              description={data.newsletter_description}
            />
          </animated.div>
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            {data.Disclaimer}
          </p>
        </div>
      </footer>
    );
  }
};

export default Footer;
