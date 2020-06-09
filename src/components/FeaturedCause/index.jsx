import React, { useRef } from 'react';
import './style.css';
import { animated, useSpring, useChain } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import useMedia from '../../Helpers/useMedia';
import { CauseLoader } from './MyLoader';

const FeaturedCause = ({ data: { featuredCause, loading, error } }) => {
  const isMobile = useMedia(['(min-width: 1024px)'], [false], true);

  const getProgressPrecentage = (raised, goal) => {
    return Math.floor((raised / goal) * 100);
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const slideEndRef = useRef();
  const slideEnd = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(50%)',
    delay: isMobile ? 0 : 600,
    ref: slideEndRef
  });
  const aspiringRef = useRef();
  const aspiring = useSpring({
    percent:
      inView && !loading
        ? getProgressPrecentage(featuredCause.raised, featuredCause.goal)
        : 0,
    from: { percent: 0 },
    delay: isMobile ? 300 : 900,
    ref: aspiringRef
  });

  const strokeRef = useRef();
  const stroke = useSpring({
    percent:
      inView && !loading
        ? 565 +
          getProgressPrecentage(featuredCause.raised, featuredCause.goal) *
            -5.65
        : 565,
    from: { percent: 565 },
    delay: isMobile ? 300 : 900,
    ref: strokeRef
  });

  useChain([slideEndRef, aspiringRef, strokeRef]);

  if (error) {
    return <div> Couldn't fetch data</div>;
  }

  if (loading) {
    return <CauseLoader />;
  }
  if (!featuredCause) {
    return <div>We will announce for urgent cause soon</div>;
  }
  if (featuredCause) {
    const numberToLocal = number => Number(number).toLocaleString();
    let { raised, goal, title, description } = featuredCause;
    return (
      <animated.div className="Upcoming-Events-Card" style={slideEnd}>
        <div
          className="h-full right-fund-card text-c000 flex flex-col items-center justify-between pt-8 sm:pt-0 lg:pt-8 px-6 lg:px-0"
          ref={ref}
        >
          <div className="guage mb-8 md:mb-0">
            <div className="percentage-circle">
              <div className="percent">
                <svg className="main_circle">
                  <circle cx="100" cy="100" r="90"></circle>
                  <animated.circle
                    cx="100"
                    cy="100"
                    r="90"
                    strokeDashoffset={stroke.percent}
                  ></animated.circle>
                </svg>
                <div className="number">
                  <h2>
                    <animated.span>
                      {aspiring.percent.interpolate(percent =>
                        Math.floor(percent)
                      )}
                    </animated.span>
                    %
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="urgent-cause-event_info flex flex-col justify-between pt-8 lg:pt-0">
            <h3 className="text-lg text-center font-semibold m-auto urgent-case__title">
              {title}
            </h3>
            <p className="my-4 text-center m-auto leading-loose urgent-case__desc tracking-wider font-light">
              {description}
            </p>
            <div className="text-center">
              <p className="text-sm font-light tracking-normal">
                <span className="text-c300 text-lg tracking-wide font-bold">
                  ${numberToLocal(raised)}{' '}
                </span>
                Raised
              </p>
              <p className="text-sm font-light tracking-normal">
                <span className="text-c300 text-lg tracking-wide font-bold font">
                  ${numberToLocal(goal)}{' '}
                </span>
                Goal
              </p>
            </div>
            <button className="btn btn-card bg-c300 px-24 self-center mt-5">
              Donate Now
            </button>
          </div>
        </div>
      </animated.div>
    );
  }
  return 'Generic Error';
};

export { FeaturedCause };
