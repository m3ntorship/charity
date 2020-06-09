import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Heading from '../Heading';
import { FeaturedCause } from '../FeaturedCause';
import { parseISO, format } from 'date-fns';
import { MainLoader, CardLoader } from './MyLoader';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const UpcomingEventsSectionContainer = () => {
  const { data, loading, error } = useSelector(store => store.upcomingEvents);
  const getFeturedCause = useSelector(
    ({ causes: { data, loading, error } }) => {
      if (data) {
        let featuredCause = data.causes.find(cause => {
          return cause.is_featured;
        });
        return {
          featuredCause,
          loading,
          error
        };
      }
      else {
        return {
          featuredCause:null,
          loading,
          error,
        }
      }
    }
  );
  return (
    <UpcomingEventsSection
      data={data}
      loading={loading}
      error={error}
      cardData={getFeturedCause}
    />
  );
};

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

const Event = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex w-full h-full">
        <CardLoader />
      </div>
    );
  }

  if (data) {
    const {
      id,
      title,
      user: { username },
      address,
      date,
      image: { url, name }
    } = data;
    return (
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
    );
  }
};

const Events = ({ data, slideStart, loading }) => {
  return (
    <animated.div
      className="col-start-1 articles-component col-end-8 flex flex-col justify-between lg:pr-8"
      style={slideStart}
    >
      {data.map(eventData => {
        return <Event data={eventData} loading={loading} key={eventData.id} />;
      })}
    </animated.div>
  );
};

const UpcomingEventsText = ({ data, slideTop }) => {
  const primaryText = data.Heading[0].heading_primary;
  const secondaryText = data.Heading[0].heading_secondary;
  return (
    <animated.div className="upcoming-events " style={slideTop}>
      <Heading
        primaryText={primaryText}
        secondaryText={secondaryText}
        primaryTextColor="dark"
        primaryClassName="upcoming-events__header"
      />
      <p className="upcoming-events_description text-c600">
        {data.description}
      </p>
    </animated.div>
  );
};

const UpcomingEventsSection = ({ data, loading, error, cardData }) => {
  //Scroll observation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  //Data Error Handling
  if (error) {
    return <div>Couldn't fetch data</div>;
  }

  //Content loader in loading state
  if (loading) {
    return (
      <div className="upcoming-events__loader container grid grid-cols-12 md:gap-8 row-gap-8 my-24">
        <div className="flex w-full h-full col-start-1 col-end-13 md:col-end-8 md:row-start-1 md:row-end-2">
          <MainLoader />
        </div>
        <div className="flex flex-col justify-between w-full h-full upcoming-events__loader__cards col-start-1 col-end-13 md:col-end-8 md:row-start-2 md:row-end-3">
          <div className="flex w-full h-full mb-4">
            <Event data={false} loading={true} />
          </div>
          <div className="flex w-full h-full mt-4">
            <Event data={false} loading={true} />
          </div>
        </div>
        <div className=" col-start-1 col-end-13 md:col-start-8 md:row-start-1 md:row-end-3 h-full w-full flex">
          <FeaturedCause data={false} loading={true} error={error} />
        </div>
      </div>
    );
  }

  //Main component
  if (data) {
    const { upcoming_events } = data;
    return (
      <section className="upcoming-events-section">
        <div className="upcoming-events-section__container lg:grid gap-8 grid-cols-12 container">
          <div className="mb-8 col-start-1 col-end-8 pr-8" ref={ref}>
            <UpcomingEventsText data={data} slideTop={slideTop} />
          </div>
          <Events data={upcoming_events} slideStart={slideStart} />
          <animated.div
            className="vertical-text text-c800 font-hairline text-xxl"
            style={fade}
          >
            URGENT CAUSE
          </animated.div>
          <div className=" col-start-8 col-end-13 row-start-1 row-end-3 h-full w-full flex">
            <FeaturedCause data={cardData} />
          </div>
        </div>
      </section>
    );
  }
};
export { UpcomingEventsSection, UpcomingEventsSectionContainer, Event };
