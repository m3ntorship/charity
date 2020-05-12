import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { charityAPI } from '../../clients';
import Loader from './ContentLoader';
import './styles.css';
import Heading from '../Heading';

const FeaturedBanner = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = () => {
    setLoading(true);
    charityAPI('/featured-banner')
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setError(false);
      })

      .catch(error => {
        setLoading(false);
        setError(true);
        setErrorMessage("Couldn't fetch data");
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(10rem)',
    config: {
      duration: 500
    }
  });
  if (loading) {
    return (
      <div className="donation-banner container flex justify-center items-center">
        <Loader />
      </div>
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
    const backgroundStyle = {
      backgroundImage: `linear-gradient( rgba(41, 68, 85, 0.5), rgba(41, 68, 85, 0.7) ), url('${data.image_background.url}')`
    };
    return (
      <section
        ref={ref}
        className="donation-banner flex bg-cover bg-center bg-no-repeat relative py-4 md:py-8 lg:py-28  mt-12"
        style={backgroundStyle}
      >
        <div className="donation-banner__icon bg-c000 rounded-full absolute flex items-center justify-center">
          <img className="" src={data.image_top.url} alt="Charity is hope" />
        </div>
        <div className="container self-center">
          <animated.div style={fade}>
            <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
              <Heading
                primaryText={data.text_primary}
                secondaryText={data.text_complementary}
                align="center"
                primaryClassName="donation-banner-desc"
              />
              <a
                className="donation-banner__btn btn btn-lg bg-c300"
                href={data.button_url}
              >
                {data.button_text}
              </a>
            </div>
          </animated.div>
        </div>
      </section>
    );
  }
};

export default FeaturedBanner;
