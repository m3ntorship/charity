import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import Loader from './ContentLoader';
import './styles.css';
import Heading from '../Heading';



const FeaturedBanner = ({ data, loading, error }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(10rem)'
  });
  if (error) {
    return (
      <div>
        <a href="#/" className="text-c200">
          Couldn't fetch data, retry?
        </a>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="donation-banner container flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (data) {
    const {
      text_primary,
      text_complementary,
      button_text,
      button_url,
      image_url,
      image_background_url
    } = data;
    const backgroundStyle = {
      backgroundImage: `linear-gradient( rgba(41, 68, 85, 0.5), rgba(41, 68, 85, 0.7) ), url('${image_background_url}')`
    };

    return (
      <section
        ref={ref}
        className="donation-banner flex bg-cover bg-center bg-no-repeat relative py-4 md:py-8 lg:py-28  mt-12"
        style={backgroundStyle}
      >
        <div className="donation-banner__icon bg-c000 rounded-full absolute flex items-center justify-center">
          <img className="" src={image_url} alt="Charity is hope" />
        </div>
        <div className="container self-center">
          <animated.div style={fade}>
            <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
              <Heading
                primaryText={text_primary}
                secondaryText={text_complementary}
                align="center"
                primaryClassName="donation-banner-desc"
              />
              <a
                className="donation-banner__btn btn btn-lg bg-c300"
                href={button_url}
              >
                {button_text}
              </a>
            </div>
          </animated.div>
        </div>
      </section>
    );
  }
};

export { FeaturedBanner };
