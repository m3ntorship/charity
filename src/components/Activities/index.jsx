import React, { Component, useState, useEffect } from 'react';
import { CardLoader, TitleLoader } from './ActivitiesContentLoading/index';
import { charityAPI } from '../../clients';
import Heading from '../Heading/index';
import { Fragment } from 'react';
import './styles.css';

const Activities = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const getData = () => {
    setLoading(true);
    charityAPI('/what-we-do')
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  if (loading) {
    return (
      <div className="container activites px-5 py-5">
        <div className="flex flex-wrap justify-center  lg:justify-between   ">
          <TitleLoader />
          <TitleLoader />
        </div>
        <div className="showcase-row -mt-3 px-8 grid gap-4 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:row-gap-0">
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      </div>
    );
  } else if (error) {
    return <div>we can not fetch data</div>;
  }else {
    return (
      // fix data intery (this.state.....)
      <Fragment>
        <div className="activites container px-5 py-5 font-body text-c600">
          <div className="activities__intro flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
            <Heading
              primaryTextColor="dark"
              primaryText={data.title_primary}
              secondaryText={data.title_complementary}
            />
            <p className="w-4/5 lg:w-2/5 lg:text-justify text-center mt-12 lg:mt-0">
              {data.description}
            </p>
          </div>
      

          <div className="showcase-row -mt-3 px-8 grid gap-4 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:row-gap-0">
            {data.how_we_work_cards.map(card => (
              <div className=" activity relative text-center" key={card._id}>
                <img
                  className="mx-auto"
                  src={card.image_main.url}
                  alt={card.image_main.alternativeText}
                />
                <h3 className="showcase-row__heading text-lg py-4">{card.Title}</h3>
                <p className="text-base px-5">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="heart-bg w-1/2 h-48 -mt-48 p-0 xl:block hidden"></div>
      </Fragment>
    );
  }
};




export default Activities;
