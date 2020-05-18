import React from 'react';
import { useInView } from 'react-intersection-observer';
import NavigationLink from '../NavigationLink';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import Heading from '../Heading';
import Loader from './ContentLoader/index';

const Banner = ({ data, loading, error }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fadeScale = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0)'
  });

  if (error) {
    return <div className="error">Couldn't Fetch data</div>;
  }

  if (loading) {
    return (
      <div className="header__loader container flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (data) {
    const {
      links,
      heading: { heading_primary },
      image: { url: image_url }
    } = data;
    return (
      <section className="slider py-0 bg-cover bg-center relative" ref={ref}>
        <div
          className="header__carousel__slide h-full flex items-center justify-center bg-cover"
          style={{
            background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${image_url}) no-repeat center/cover`
          }}
        >
          <div className="header__carouser__slide__textContent text text-center text-c000">
            <animated.div
              style={fadeScale}
              className="main flex items-center justify-center"
            >
              <Heading
                primaryText={heading_primary}
                secondaryText={''}
                secondaryTextColor="yellow"
                size="xxl"
                align="center"
              />
            </animated.div>
            <div className="main flex items-center justify-center px-32">
              <p className="text-c600 text-md">
                lorem ipsum dolor sit amet, consectetur notted elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
                andhn
              </p>
            </div>
            <div className="menu-navbar-wrapper flex flex-col md:flex-row justify-between">
              <ul className="nav__ul mr-0 sm:w-full   flex flex-col  md:items-center md:flex-row md:justify-around bg-c200 md:mr-2  text-c000">
                {links.map(link => (
                  <NavigationLink
                    title={link.text}
                    url={link.url}
                    key={link.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export { Banner };
