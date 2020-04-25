import React, { Component } from 'react';
import dotsImage from './img/dots.png';
import circleImage from './img/circle.png';
import peopleImage from './img/people-we-help.jpg';

const Number = ({ number, title }) => {
  return (
    <div className="statistics-content__item justify-end flex flex-col w-1/4">
      <span className="statistics-content__item__value text-center tracking-wide text-c200 text-xl font-light font-body leading-loose">
        {number}
      </span>
      <h3 className="statistics-content__item__name mt-3 tracking-wide capitalize font-light text-c100 text-md">
        {title}
      </h3>
    </div>
  );
};

class Numbers extends Component {
  state = {
    numbers: [
      { title: 'donations', number: '88k', id: 1 },
      { title: 'campaigns', number: '66k', id: 2 },
      { title: 'volunteers', number: '70+', id: 3 },
      { title: 'funds raised', number: '66k', id: 4 }
    ]
  };

  getData = () => {
    // get data from api
    fetch('').then(res => {
      this.setState({
        numbers: res.data
      });
    });
  };

  componentDidMount() {
    //this.getData();
  }

  render() {
    const { numbers } = this.state;

    const numbersList = numbers.map(item => {
      return (
        <Number title={item.title} number={item.number} key={item.title} />
      );
    });
    return (
      <section className="numbers z-0 relative bg-c800 pb-0">
        <div className="container">
          <div className="statistics-wrapper">
            <div className="statistics-wrapper__image bg-cover bg-no-repeat"></div>
            <div className="statistics-numbers">
              <div className="statistics-numbers__speak relative">
                <p className="statistics-numbers__speak__text p-4 font-normal absolute text-center capitalize text-lg font-body font-light text-c000 bg-c400">
                  numbers speak
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-content bg-c000">
          <div className="container">
            <div className="statistics-content__list p-16 bg-c800 flex text-center">
              {numbersList}
            </div>
          </div>
        </div>
        <div className="statistics-wrapper__dots-image absolute">
          <img src={dotsImage} alt="" />
        </div>
        <div className="statistics-wrapper__circle-image absolute">
          <img src={circleImage} alt="" />
        </div>
      </section>
    );
  }
}

export default Numbers;
