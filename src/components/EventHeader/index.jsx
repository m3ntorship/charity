import React, { useEffect, useState } from 'react';
import './style.scss';
import { countDownToEventTime } from '../../Helpers/Helpers';
import EventDate from './../Date/index';

const EventHeader = ({ date, image }) => {
  const [countDown, setCountDown] = useState(countDownToEventTime(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(countDownToEventTime(date));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const eventImageStyle = {
    backgroundColor: 'rgba(37, 65, 81, 1)',
    backgroundImage: `linear-gradient(
  to top,
  rgba(37, 65, 81, 1) 10%,
  rgba(37, 65, 81, 0.4) 42%
  ),
  url(${image})`
  };

  return (
    <div className="event__header container relative">
      <div
        className="event__image w-full bg-cover"
        style={eventImageStyle}
      ></div>

      {countDown && (
        <div className="flex text-large md:text-medium leading-tighter sm:leading-none text-center flex-col sm:flex-row justify-start sm:justify-between w-8/12 m-auto absolute text-c000 inset-x-0 bottom-0 h-32 font-bold">
          <span>{countDown.day} </span>
          <span>{countDown.hour} </span>
          <span className="hidden sm:block">{countDown.minute}</span>
        </div>
      )}

      {date && (
        <div className="event__date absolute">
          <EventDate date={date} />
        </div>
      )}
    </div>
  );
};

export default EventHeader;
