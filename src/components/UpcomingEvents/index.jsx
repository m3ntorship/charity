import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
// Images
import bg_1 from './img/bg_1.png';
import bg_2 from './img/bg_2.png';

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
  });

  if (loading) {
    return <div>Loading ....</div>;
  }

  if (fetchingDataError) {
    return <div>{fetchingDataError} : an Error Occured While Loading</div>;
  }

  return (
    <section className="flex upcoming-events relative">
      <div className="upcoming-events__bg-image absolute w-2/5">
        <img src={bg_1} alt="upcoming events Background" />
      </div>
      <div className="container flex mb-4">
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

        <div className="w-3/5 relative z-20">
          <div className="absolute z-30">
            <img src={bg_2} alt="upcoming events right-bg" />
          </div>
          <div className="h-full z-40 right-fund-card text-c000 flex flex-col items-center justify-evenly">
            <div className="guage">
              <div className="percentage-circle">
                <div className="percent">
                  <svg className="main_circle">
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>88%</h2>
                  </div>
                  <svg className="dot">
                    <circle cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="urgent-cause-event_info flex flex-col justify-between">
              <h3 className="text-lg w-48 text-center font-bold m-auto urgent-case__title">
                Raise Fund to Save Lives
              </h3>
              <p className="font-hairline w-40 my-4 text-sm text-center m-auto leading-loose urgent-case__desc tracking-wider r-card-font-color">
                Aliq is notm hendr erit a augue insu image pellen tes
              </p>
              <div className="text-center">
                <p className="r-card-font-color">
                  <span className="text-c300 text-base tracking-wide">
                    $25,270
                  </span>
                  Raised
                </p>
                <p className="r-card-font-color">
                  <span className="text-c300 text-base tracking-wide">
                    $30,000
                  </span>
                  Goal
                </p>
              </div>
            </div>
            <button className="event-btn btn-md bg-c300">Donate Now</button>
          </div>
        </div>
      </div>

      <div className="vertical r-line-overlay sm:text-6xl">
        <div className="vertical-text text-c800 font-hairline">
          URGENT CAUSE
        </div>
      </div>
    </section>
  );
};
