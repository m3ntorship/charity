import React, { useState, useEffect } from 'react';
import './style.css';
import { charityAPI } from '../../clients';
import { animated } from 'react-spring';

const UpcomingEventsCard = ({ slideEnd }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = () => {
    setLoading(true);
    charityAPI('/featured-cause')
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
  const getProgressPrecentage = (raised, goal) => {
    return Math.floor((raised / goal) * 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {errorMessage},{' '}
        <a href="#/" onClick={getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  }
  let raised = data.cause.raised;
  let goal = data.cause.goal;
  const numberToLocal = number => Number(number).toLocaleString();
  return (
    <animated.div
      className="Upcoming-Events-Card col-start-8 col-end-13 row-start-1 row-end-3"
      style={slideEnd}
    >
      <div className="h-full right-fund-card text-c000 flex flex-col items-center justify-between pt-8 sm:pt-0 lg:pt-8 px-6 lg:px-0">
        <div className="guage mb-8 md:mb-0">
          <div className="percentage-circle">
            <div className="percent">
              <svg className="main_circle">
                <circle cx="100" cy="100" r="90"></circle>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  style={{
                    strokeDashoffset: `${
                      565 + getProgressPrecentage(raised, goal) * -5.65
                    }`
                  }}
                ></circle>
              </svg>
              <div className="number">
                <h2>{getProgressPrecentage(raised, goal)}%</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="urgent-cause-event_info flex flex-col justify-between pt-8 lg:pt-0">
          <h3 className="text-lg text-center font-semibold m-auto urgent-case__title">
            {data.cause.title}
          </h3>
          <p className="my-4 text-center m-auto leading-loose urgent-case__desc tracking-wider font-light">
            {data.cause.description}
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
};

export default UpcomingEventsCard;
