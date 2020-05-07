import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';
import UpcomingEventsCard from '../UpcomingEventsCard';
import { parseISO, format } from 'date-fns';

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
    <div className="col-start-1 articles-component col-end-8 flex flex-col justify-between lg:pr-8">
      {props.data.map(
        ({
          id,
          title,
          user: { username },
          address,
          date,
          image: { url, name }
        }) => (
          <div key={id} className="event-card-wrapper flex mb-4">
            <div className="event-card-wrapper_image w-1/4">
              <img src={url} alt={name} />
            </div>
            <div className="event-card-wrapper__details pr-0 relative self-center p-10 pl-16 flex flex-col justify-between h-full w-3/4">
              <div className="event-card-wrapper__timing text-c200 flex items-center leading-none">
                <span className="tracking-wide">{username}</span>
                &nbsp; &nbsp;
                <span>{getDate(date).time}</span>
              </div>
              <div className="event-card-wrapper__topic">
                <p className="text-c100 font-bold leading-none">{title}</p>
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
    </div>
  );
};

const UpcomingEvents = ({ data }) => {
  return (
    <div className="upcoming-events mb-8 col-start-1 col-end-8 pr-8">
      <Heading
        primaryText={data.Heading[0].heading_primary}
        secondaryText={data.Heading[0].heading_secondary}
        primaryTextColor="dark"
        primaryClassName="upcoming-events__header"
      />
      <p className="upcoming-events_description text-c600">
        {data.description}
      </p>
    </div>
  );
};

const UpcomingEventsSection = () => {
  const [data, setData] = useState(null);
  const [fetchingDataError, setFetchingDataError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading ....</div>;
  }

  if (fetchingDataError) {
    return <div>{fetchingDataError} : an Error Occured While Loading</div>;
  }

  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-section__container lg:grid gap-8 grid-cols-12 container">
        <UpcomingEvents data={data} />
        <Events data={data.upcoming_events} />
        <div className="vertical-text text-c800 font-hairline text-xxl">
          URGENT CAUSE
        </div>
        <UpcomingEventsCard />
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
