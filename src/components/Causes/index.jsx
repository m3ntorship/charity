import React, { useState, useEffect } from 'react';
import './style.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';

const numberToLocal = number => Number(number).toLocaleString();

const Cause = ({ title, description, raised, goal, image }) => {
  const progress = Math.floor((raised / goal) * 100);
  return (
    <div className="causes__card border-gray-900 border border-solid z-10 bg-c000">
      <div className="causes__img pb-5">
        <img src={image} alt="Raise Funds For Poverity Kids" />
      </div>

      <div className="causes__text">
        <h3 className="causes__card--heading text-c100 text-lg font-bold pb-8">
          {title}
        </h3>
        <p className="causes__card--descriptio text-c600 text-sm pb-5">
          {description}
        </p>
      </div>

      <div className="causes__info pb-10">
        <div className="causes__raised relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-hand-holding-usd text-lg"></i>
          </span>
          <span className="causes__icon--funds font-bold text-c200 text-sm text-center inline-block absolute">
            ${numberToLocal(raised)}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Raised
          </span>
        </div>
        <div className="causes__goal mb-3 relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-bullseye text-lg"></i>
          </span>
          <span className="causes__icon--goal font-bold text-c200 text-sm absolute">
            ${numberToLocal(goal)}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Goal
          </span>
        </div>
      </div>

      <div className="causes__progress mb-2 relative h-2 w-full bg-c800">
        <div
          className="causes__progress__progress-bar bg-c200"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="causes__progress__tooltip bg-c200"
          style={{ left: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <button className="causes__btn font-bold bg-c800 text-c600 hover:bg-c300 hover:text-c100 transition duration-200 ease-out">
        Donate Now
      </button>
    </div>
  );
};

const Causes = () => {
  const [dataState, setDataState] = useState({});
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState({
    error: false,
    errorMessage: ''
  });

  const getData = () => {
    charityAPI('/popular-causes')
      .then(({ data }) => {
        setDataState(data);
        setLoadingState(false);
        setErrorState({ error: false });
      })
      .catch(error => {
        setLoadingState(false);
        setErrorState({
          error: true,
          errorMessage: " Couldn't fetch data"
        });
      });
  };

  useEffect(() => {
    setLoadingState(true);
    getData();
  }, []);

  if (loadingState) {
    return <div>Loading...</div>;
  }

  if (errorState.error) {
    return (
      <div>
        {this.state.errorMessage},{' '}
        <a href="#/" onClick={getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  }

  return (
    <section className="causes relative">
      <div className="causes__container container">
        <div className="causes__headings">
          <Heading
            primaryText={dataState.causes_heading.heading_primary}
            secondaryText="Causes"
            align="center"
            primaryTextColor="dark"
          />
        </div>

        <div className="causes__wrapper grid grid-cols-3 gap-8">
          {dataState.causes.map(item => {
            return (
              <Cause
                key={item.id}
                title={item.title}
                description={item.description}
                raised={item.raised}
                goal={item.goal}
                image={item.image.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
