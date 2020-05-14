import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { charityAPI } from '../../clients/charity';
import './style.scss';
import cn from 'classnames';
import Loader from './ContentLoader';

const ContactTopContainer = props => {
  const [data, setDataState] = useState({});
  const [loading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState(false);

  const getData = () => {
    setLoadingState(true);
    charityAPI('/socialmedias')
      .then(({ data }) => {
        setDataState(data);
        setLoadingState(false);
        setErrorState(false);
      })
      .catch(error => {
        setLoadingState(false);
        setErrorState(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ContactTop
      data={data}
      loading={loading}
      error={error}
      // donated={false} //==> just for test
      haveBtn={props.haveBtn}
      getData={getData}
    />
  );
};

const ContactTop = ({
  data,
  loading,
  error,
  haveBtn,
  getData,
  donated
  // clicked
}) => {
  const transitions = useTransition(loading, item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  if (error) {
    return (
      <div>
        {error},{' '}
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
        <section
          className={cn(
            'contact-top',
            'p-0',
            'items-center',
            'bg-c100',
            'hidden',
            'md:flex',
            {
              'bg-c300': donated
            }
          )}
        >
          <div className="container px-20 w-full max-w-full md:flex justify-between">
            <div className="welcome-text text-sm">
              Welcome to the best
              <span className="text-c300 underline italic">Lovims</span> charity
              platform
            </div>
            <div className="social flex text-sm">
              <div>Follow us:</div>
              <div className="ml-1">
                <ul className="inline-block ">
                  {data.map(item => {
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
          <button
            onClick={() => {}} // here The function when click button
            className={cn(
              'btn',
              'w-2/12',
              'h-full',
              'text-c100',
              'text-sm',
              'font-bold',
              'bg-c300',
              {
                hidden: !haveBtn
              }
            )}
          >
            Start Donation
          </button>
        </section>
      </animated.div>
    )
  );
};
export { ContactTop, ContactTopContainer };
