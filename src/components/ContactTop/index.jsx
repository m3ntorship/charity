import React from 'react';
import { useSpring, animated } from 'react-spring';
import './style.scss';
import Loader from './ContentLoader';

const ContactTop = ({ data, loading, error }) => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: loading ? 0 : 1 }
  });

  if (error) {
    return (
      <div>
        <div className="bg-c200 text-center text-c000 py-5">
          {' '}
          <h2> Error: Couldn't fetch data</h2>{' '}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="hidden md:block">
        <Loader style={{ width: '100%', height: 'auto' }} />
      </div>
    );
  }

  if (data) {
    return (
      <animated.div style={fade}>
        <section className="contact-top p-0 items-center bg-c100 hidden md:flex">
          <div className="container px-20 w-full max-w-full md:flex justify-between">
            <div className="welcome-text text-sm">
              Welcome to the best{' '}
              <span className="text-c300 underline italic">Lovims</span> charity
              platform
            </div>
            <div className="social flex text-sm">
              <div>Follow us:</div>
              <div className="ml-1">
                <ul className="inline-block ">
                  {data.map(({ id, url, fontawesome_icons }) => {
                    return (
                      <li key={id} className="inline px-3 hover:text-c000">
                        <a href={url}>
                          <i className={fontawesome_icons}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={() => {}} // here The function when click button
            className="btn w-2/12 h-full text-c100 text-sm font-bold bg-c300"
          >
            Start Donation
          </button>
        </section>
      </animated.div>
    );
  }
  return 'Generic Error';
};
export { ContactTop };
