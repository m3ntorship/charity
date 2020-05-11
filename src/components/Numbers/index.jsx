import React, { useState, useEffect } from 'react';
import dotsImage from './img/dots.png';
import circleImage from './img/circle.png';
import { charityAPI } from '../../clients';
import { ImageLoader, NumberLoader } from './MyLoader';
import './style.css';

const Number = ({ number, title }) => {
  return (
    <div className="statistics-content__item justify-end flex flex-col w-1/2 md:w-1/4 pt-4">
      <span className="statistics-content__item__value text-center tracking-wide text-c200 text-xl font-light font-body leading-loose">
        {number}
      </span>
      <h3 className="statistics-content__item__name mt-3 tracking-wide capitalize font-light text-c100 text-md whitespace-no-wrap">
        {title}
      </h3>
    </div>
  );
};

const Numbers = () => {
  const [data, setData] = useState({ numbers: [], backgroundImage: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    _getData();
  }, []);

  const _getData = () => {
    setLoading(true);
    charityAPI('/speaking-numbers')
      .then(({ data: { speaking_numbers, image_background } }) => {
        setData({
          numbers: speaking_numbers,
          backgroundImage: image_background.url
        });
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
        setErrorMessage('can NOT fetch numbers');
      });
  };

  render() {
    const backgroundImageStyle = {
      backgroundImage: `url(${this.state.data.backgroundImage})`
    };

    //while getting data
    if (this.state.loading) {
      return (
        <div className="container flex flex-col pt-24">
          <div className="flex">
            <ImageLoader />
          </div>
          <div className="flex flex-row flex-wrap justify-evenly">
            <div className="flex w-1/2 md:w-1/5 justify-center">
              <NumberLoader />
            </div>
            <div className="flex w-1/2 md:w-1/5 justify-center">
              <NumberLoader />
            </div>
            <div className="flex w-1/2 md:w-1/5 justify-center">
              <NumberLoader />
            </div>
            <div className="flex w-1/2 md:w-1/5 justify-center">
              <NumberLoader />
            </div>
          </div>
        </div>
      );
    }

  if (error) {
    return (
      <div>
        {errorMessage}
        {', '}
        <a href="#/" className="text-c200 underline " onClick={this._getData}>
          retry?
        </a>
      </div>
    );
  }

  if (!loading && !error) {
    const numbersList = data.numbers.map(item => {
      return <Number title={item.title} number={item.number} key={item.id} />;
    });
    return (
      <section className="numbers z-0 relative bg-c800 pb-0">
        <div className="container">
          <div className="statistics-wrapper">
            <div
              className="statistics-wrapper__image bg-cover bg-no-repeat"
              style={backgroundImageStyle}
            ></div>
            <div className="statistics-numbers">
              <div className="statistics-numbers__speak relative text-center">
                <p className="statistics-numbers__speak__text p-4 font-normal absolute tracking-wide text-center capitalize text-lg font-body font-light text-c000 bg-c400">
                  numbers speak
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-content bg-c000">
          <div className="container">
            <div className="statistics-content__list p-8 md:p-16 bg-c800 flex text-center flex-wrap">
              {numbersList}
            </div>
          </div>
        </div>
        <div className="statistics-wrapper__dots-image absolute hidden md:block">
          <img src={dotsImage} alt="" />
        </div>
        <div className="statistics-wrapper__circle-image absolute hidden md:block">
          <img src={circleImage} alt="" />
        </div>
      </section>
    );
  }
};

export default Numbers;
