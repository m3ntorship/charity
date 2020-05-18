import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import bg from './img/blocks.png';
import './styles.css';

export const Volunte = ({ data, loading, error }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1
  });
  const fade1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)'
  });
  const fade2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)'
  });

  if (error) {
    return (
      <div className="volunte bg-c200 text-center text-xl text-c000 py-12 mt-5">
        <h2>Sorry we got an error</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="volunte py-12 mt-5 relative">
        <div className="container">
          <div className="description w-full text-center md:w-5/12 inline-block text-c000 mb-10 md:mb-auto md:ml-20">
            <PLoader />
          </div>
          <div className="inline-block w-full md:w-5/12 text-center">
            <BtnLoader className="md:float-right" />
          </div>
        </div>
      </div>
    );
  }

  const {
    description,
    button: { title, link }
  } = data;
  return (
    <div
      ref={ref}
      className="volunte bg-c200 py-12 mt-5 relative overflow-hidden"
    >
      <div className="container">
        <img src={bg} className="absolute" />
        <animated.div
          style={fade2}
          className="description w-full text-center md:text-left md:w-5/12 inline-block text-c000 mb-10 md:mb-auto md:ml-20"
        >
          <p className="font-bold">{description}</p>
        </animated.div>
        <animated.div
          style={fade1}
          className="inline-block w-full md:w-5/12 text-center"
        >
          <button className="btn btn-sm md:float-right px-10 text-c100 text-sm font-bold bg-c300">
            {' '}
            <a href={link} className="text-lg">
              {title}
            </a>{' '}
          </button>
        </animated.div>
      </div>
    </div>
  );
};

const PLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={40}
    viewBox="0 0 300 40"
    backgroundColor="#f5f5f5"
    foregroundColor="#f5f5f5"
  >
    <rect x="10" y="10" rx="0" ry="0" width="300" height="10" />
    <rect x="10" y="30" rx="0" ry="0" width="200" height="10" />
  </ContentLoader>
);

const BtnLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={40}
    viewBox="0 0 300 40"
    backgroundColor="#f5f5f5"
    foregroundColor="#f5f5f5"
  >
    <rect x="48" y="3" rx="0" ry="0" width="168" height="50" />
  </ContentLoader>
);
