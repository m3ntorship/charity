import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
// Date Package
import {parseISO} from 'date-fns';
// Images
import bg_1 from './img/bg_1.png';

// Some Other Components
export const BackgroundImage = () => (
  <div className="upcoming-events__bg-image absolute w-2/5">
    <img src={bg_1} alt="upcoming events Background" />
  </div>
);



const Events = props => {
  
function getDate(myDate) {
  const theDate = parseISO(myDate);
  const strDate = theDate.toString();
  const arrayDate = strDate.split(' ');

  const dateNeeded = {
    month: arrayDate[1],
    day: arrayDate[2],
    year: arrayDate[3],
    time: arrayDate[4]
  }

  return(dateNeeded)
}

  return (
    <div>
      {props.data.map(({ id, title, user: {username}, address, date, image: { url, name } }) => (
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
      ))}
    </div>
  );
};

export const UpcomingEvents = () => {
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
    <div className="sm:w-full w-3/5 h-full">
      <h2 className="upcoming-events__header font-bold leading-tighter text-c100">
        {data.Heading[0].heading_primary}
        <span className="text-c200 font-hairline underline">
          {data.Heading[0].heading_secondary}
        </span>
      </h2>
      <p className="upcoming-events_description text-c600 leading-loose mb-12">
        {data.description}
      </p>
      <Events data={data.upcoming_events} />
    </div>
  );
};
