import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import cn from 'classnames';
import Loader from './ContentLoader';
import './styles.scss';



const MainContact = ({ data, loading, error }) => {
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0
  });
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex  mx-8">
          <Loader />
        </div>
        <div className="flex mx-8">
          <Loader />
        </div>
        <div className="flex  mx-8">
          <Loader />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
      {Error}
      </div>
    );
  } else {
    return (
      <animated.div style={fade}>
        <div ref={ref} className="contact-info flex items-center justify-end">
          {data.map(({ id, title, sub_title, icon: { url } }, index) => {
            const isLast = index === data.length - 1;

            return (
              <div
                className={cn(
                  'contact-info--details flex items-center px-5 lg:px-10',
                  {
                    'border-right-header': !isLast,
                    'pr-0': isLast
                  }
                )}
                key={id}
              >
                <div className="icon items-center text-c500 w-8 lg:w-10">
                  <img className="pr-4 w-full" src={url} alt={title} />
                </div>
                <div className="text text-xxs lg:text-sm">
                  <p className="font-bold text-c100">{title}</p>
                  <small className="text-c600">{sub_title}</small>
                </div>
              </div>
            );
          })}
        </div>
      </animated.div>
    );
  }
};

export { MainContact };
