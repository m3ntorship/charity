import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
// Images
import bg_1 from './img/bg_1.png';

// Some Other Components
export const BackgroundImage = () => (
  <div className="upcoming-events__bg-image absolute w-2/5">
    <img src={bg_1} alt="upcoming events Background" />
  </div>
);

const 

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
        // const d = new Date(data.upcoming_events[0].date);
        // console.log(d.split(' '));
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
      {data.upcoming_events.map(
        ({ id, title, address, date, image: { url, name } }) => (
          <div key={id} className="event-card-wrapper flex w-4/5 mb-4">
            <div className="event-card-wrapper_image">
              <img src={url} alt={name} />
            </div>
            <div className="event-card-wrapper__details relative self-center pl-16">
              <div className="event-card-wrapper__timing text-base text-c200 flex items-center leading-relaxed">
                <span className="tracking-wide">admin</span>
                &nbsp; &nbsp;
                <span>12:00 am</span>
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
                  <span> 07</span>
                  <span> Feb</span>
                  <span>2017</span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
