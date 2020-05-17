import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import cn from 'classnames';
import { charityAPI } from '../../clients';
import Loader from './ContentLoader';
import './styles.scss';
const MainContact = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = () => {
    setLoading(true);
    charityAPI('/main-contacts')
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
    opacity: inView ? 1 : 0
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
    return (
      <animated.div style={fade}>
        <div ref={ref} className="contact-info flex items-center justify-end">
          {data.map(({ _id, title, sub_title, icon: { url } }, index) => {
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
                key={_id}
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
export default MainContact;
