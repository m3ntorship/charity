import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';
import UpcomingEventsCard from '../UpcomingEventsCard';
import { parseISO, format } from 'date-fns';
import bg_1 from './img/bg_1.png';

// Some Other Components
const BackgroundImage = () => (
  <div className="upcoming-events__bg-image absolute w-2/5">
    <img src={bg_1} alt="upcoming events Background" />
  </div>
);

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
    <div>
      {props.data.map(
        ({
          id,
          title,
          user: { username },
          address,
          date,
          image: { url, name }
        }) => (
          <div key={id} className="event-card-wrapper flex w-4/5 mb-4">
            <div className="event-card-wrapper_image">
              <img src={url} alt={name} />
            </div>
            <div className="event-card-wrapper__details relative self-center pl-16">
              <div className="event-card-wrapper__timing text-base text-c200 flex items-center leading-relaxed">
                <span className="tracking-wide">{username}</span>
                &nbsp; &nbsp;
                <span>{getDate(date).time}</span>
              </div>
              <div className="event-card-wrapper__topic">
                <p className="text-c100 font-bold text-lg leading-relaxed">
                  {title}
                </p>
              </div>
              <div className="event-card-wrapper__location">
                <p className="text-c600 text-base flex items-center leading-relaxed">
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
    <div className="upcoming-events sm:w-full w-3/5 h-full">
      <Heading
        primaryText={data.Heading[0].heading_primary}
        secondaryText={data.Heading[0].heading_secondary}
        primaryTextColor="dark"
        primaryClassName="upcoming-events__header"
      />
      <p className="upcoming-events_description text-c600 leading-loose mb-12">
        {data.description}
      </p>
      <Events data={data.upcoming_events} />
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
    <section className="flex upcoming-events relative">
      <BackgroundImage />
      <div className="container flex mb-4">
        <UpcomingEvents data={data} />
        <UpcomingEventsCard />
        <div className="vertical-text text-c800 font-hairline text-xxl leading-half tracking-widest">
          URGENT CAUSE
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
