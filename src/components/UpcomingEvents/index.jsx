import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';
import UpcomingEventsCard from '../UpcomingEventsCard';
import { parseISO, format } from 'date-fns';
import { MainLoader, CardLoader, CauseLoader } from './MyLoader';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';

const Events = props => {
  // Function to get add dates needed
  function getDate(myDate) {
    const theDate = parseISO(myDate);

    return {
      time: format(theDate, 'hh:mm a').toLowerCase(),
      day: format(theDate, 'dd'),
      month: format(theDate, 'MMM'),
      year: format(theDate, 'yyyy')
    };
  }

  return (
    <animated.div
      className="col-start-1 articles-component col-end-8 flex flex-col justify-between lg:pr-8"
      style={props.slideStart}
    >
      {props.data.map(
        ({
          id,
          title,
          user: { username },
          address,
          date,
          image: { url, name }
        }) => (
          <div key={id} className="event-card-wrapper flex mb-4 lg:mb-0">
            <div className="event-card-wrapper_image w-1/3 md:w-1/4 ">
              <img src={url} alt={name} />
            </div>
            <div className="event-card-wrapper__details relative self-center p-6 pl-16 sm:pl-6 lg:pl-16 flex flex-col justify-between h-full w-2/3 md:w-3/4 lg:py-10">
              <div className="event-card-wrapper__timing text-c200 flex items-center leading-none">
                <span className="tracking-wide">{username}</span>
                &nbsp; &nbsp;
                <span>{getDate(date).time}</span>
              </div>
              <div className="event-card-wrapper__topic">
                <p className="text-c100 font-bold">{title}</p>
              </div>
              <div className="event-card-wrapper__location">
                <p className="text-c600 text-base flex items-center leading-none">
                  {address}
                </p>
              </div>
              <div className="event-card-wrapper__date">
                <div className="event_date">
                  <span> {getDate(date).day} </span>
                  <span> {getDate(date).month} </span>
                  <span> {getDate(date).year} </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </animated.div>
  );
};

const UpcomingEvents = ({ data, slideTop }) => {
  return (
    <animated.div
      className="upcoming-events mb-8 col-start-1 col-end-8 pr-8"
      style={slideTop}
    >
      <Heading
        primaryText={data.Heading[0].heading_primary}
        secondaryText={data.Heading[0].heading_secondary}
        primaryTextColor="dark"
        primaryClassName="upcoming-events__header"
      />
      <p className="upcoming-events_description text-c600">
        {data.description}
      </p>
    </animated.div>
  );
};

const UpcomingEventsSection = () => {
  const [data, setData] = useState(null);
  const [fetchingDataError, setFetchingDataError] = useState(null);
  const [loading, setLoading] = useState(true);

  const isMobile = useMedia(['(min-width: 768px)'], [false], true);
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.2 : 0.3,
    triggerOnce: true
  });
  console.log(inView);
  //Animation
  const slideTop = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-50%)'
  });

  const slideStart = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
    delay: 300
  });

  const fade = useSpring({
    opacity: inView ? 1 : 0,
    delay: 900
  });

  useEffect(() => {
    charityAPI('/upcoming-events')
      .then(({ data }) => {
        setData(data);
        setFetchingDataError(false);
        setLoading(false);
      })
      .catch(error => {
        setFetchingDataError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="upcoming-events__loader container grid grid-cols-12 md:gap-8 row-gap-8 my-24">
        <div className="flex w-full h-full col-start-1 col-end-13 md:col-end-8 md:row-start-1 md:row-end-2">
          <MainLoader />
        </div>
        <div className="flex flex-col justify-between w-full h-full upcoming-events__loader__cards col-start-1 col-end-13 md:col-end-8 md:row-start-2 md:row-end-3">
          <div className="flex w-full h-full mb-4">
            <CardLoader />
          </div>
          <div className="flex w-full h-full mt-4">
            <CardLoader />
          </div>
        </div>
        <div className="flex justify-center w-full h-full upcoming-events__loader__cause col-start-1 col-end-13 md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-3">
          <CauseLoader />
        </div>
      </div>
    );
  }

  if (fetchingDataError) {
    return <div>{fetchingDataError} : an Error Occured While Loading</div>;
  }

  return (
    <section className="upcoming-events-section overflow-x-hidden" ref={ref}>
      <div className="upcoming-events-section__container lg:grid gap-8 grid-cols-12 container">
        <UpcomingEvents data={data} slideTop={slideTop} />
        <Events data={data.upcoming_events} slideStart={slideStart} />
        <animated.div
          className="vertical-text text-c800 font-hairline text-xxl"
          style={fade}
        >
          URGENT CAUSE
        </animated.div>
        <UpcomingEventsCard />
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
