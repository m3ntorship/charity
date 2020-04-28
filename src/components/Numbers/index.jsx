import React, { Component } from 'react';
import dotsImage from './img/dots.png';
import circleImage from './img/circle.png';
import { charityAPI } from '../../clients';
import './style.css';

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
    data: {},
    loading: true,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    this.setState({ loading: true });
    charityAPI('/speaking-numbers')
      .then(({ data: numbers }) => {
        this.setState({
          loading: false,
          data: { numbers },
          error: false,
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: 'can NOT fetch numbers'
        });
      });
  };

  render() {
    //while getting data
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (this.state.error) {
      return (
        <div>
          {this.state.errorMessage}
          {', '}
          <a href="#/" className="text-c200 underline " onClick={this._getData}>
            retry?
          </a>
        </div>
      );
    }

    if (!this.state.loading && !this.state.error) {
      const {
        data: { numbers }
      } = this.state;

      const numbersList = numbers.map(item => {
        return <Number title={item.title} number={item.number} key={item.id} />;
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
}

export default Numbers;
