import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { charityAPI } from '../../clients/charity';
import './style.scss';
import Loader from './ContentLoader';
const ContactTop = () => {
  const [dataState, setDataState] = useState({});
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState({
    error: false,
    errorMessage: ''
  });

  const getData = () => {
    charityAPI('/socialmedias')
      .then(({ data }) => {
        setDataState(data);
        setLoadingState(false);
        setErrorState({ error: false });
      })
      .catch(error => {
        setLoadingState(false);
        setErrorState({
          error: true,
          errorMessage: " Couldn't fetch data"
        });
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const transitions = useTransition(loadingState, item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000
    }
  });
  if (errorState.error) {
    return (
      <div>
        {errorState.errorMessage},{' '}
        <a href="#/" onClick={getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  }
  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div style={props}>
        <Loader style={{ width: '100%', height: 'auto' }} />
      </animated.div>
    ) : (
      <animated.div style={props}>
        <section className="contact-top px-8 bg-c100 py-4 hidden md:block">
          <div className="container hidden md:flex justify-between">
            <div className="welcome-text text-sm">
              Welcome to the best
              <span className="text-c300 underline italic">Lovims</span> charity
              platform
            </div>
            <div className="social flex text-sm">
              <div>Follow us:</div>
              <div className="ml-6">
                <ul className="inline-block ">
                  {dataState.map(item => {
                    return (
                      <li key={item.id} className="inline px-3 hover:text-c000">
                        <a href={item.url}>
                          <i className={item.fontawesome_icons}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </animated.div>
    )
  );
};
export default ContactTop;
