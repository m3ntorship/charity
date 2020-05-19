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
      <section
        className="articles__banner__wrapper py-0 bg-cover bg-center h-64"
        ref={ref}
      >
        <div
          className=" articles__banner grid h-full"
          style={{
            background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${image_url}) no-repeat center/cover`
          }}
        >
          <div className=" text text-center self-end text-c000">
            <animated.div
              style={fadeScale}
              className="main flex items-center justify-center"
            >
              <Heading
                primaryText={heading_primary}
                size="xxl"
                align="center"
                primaryClassName="heading_banner"
              />
            </animated.div>
            <div className="flex items-center justify-center ">
              <p className="text-c000 text-md article__banner_desc ">
                Lorem ipsum dolor sit amet, consectetur notted elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
                andhn.
              </p>
            </div>
          </div>
          <div className=" articles__banner__links self-end text-center ">
            <ul className=" nav__ul__items mr-0 inline-flex justify-around relative bg-c200 text-c000">
              {links.map(link => (
                <NavigationLink
                  title={link.text}
                  url={link.url}
                  key={link.id}
                  secondaryClassName="breadcrumb-list"
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export { Banner };
