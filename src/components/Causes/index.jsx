import React, { Component } from 'react';
import card1 from './img/causes-card1.jpg';
import card2 from './img/causes-card2.jpg';
import card3 from './img/causes-card3.jpg';
import blocks from './img/blocks.png';
import './style.css';
import { charityAPI } from '../../clients';

const Cause = () => {
  return (
    <div className="causes__card border-gray-900 border border-solid z-10 bg-c000">
      <div className="causes__img pb-5">
        <img src={card1} alt="Raise Funds For Poverity Kids Image" />
      </div>

      <div className="causes__text">
        <h3 className="causes__card--heading text-c100 text-lg font-bold pb-10">
          Raise Funds for Saving Poverity Kids
        </h3>
        <p className="causes__card--descriptio text-c600 text-sm pb-5">
          Aliq is notum hender erit a augue insu image pellen tes.
        </p>
      </div>

      <div className="causes__info pb-10">
        <div className="causes__raised relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-hand-holding-usd text-lg"></i>
          </span>
          <span className="causes__icon--funds font-bold text-c200 text-sm text-center inline-block absolute">
            $25,270
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
            $30,000
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Goal
          </span>
        </div>
      </div>

      <div className="causes__progress causes__progress--second mb-2"></div>

      <button className="btn causes__btn">Donate Now</button>
    </div>
  );
};

class Causes extends Component {
  state = {
    causes: []
  };

  componentDidMount() {
    charityAPI('/popular-causes')
      .then(res) => {
      };
  }

  render() {
    return (
      <section className="causes relative">
        <div className="causes__bg-image absolute w-3/6">
          <img src={blocks} alt="Our Popular Causes Background Image" />
        </div>
        <div className="causes__container container">
          <div className="causes__headings">
            <h2 className="causes__h1 text-c100 text-xl text-center font-bold">
              Our Popular
              <span className="text-c200 border-red border-solid border-0 border-b-2 font-hairline">
                Causes
              </span>
            </h2>
          </div>

          <div className="causes__wrapper grid grid-cols-3">
            <Cause />
          </div>
        </div>
      </section>
    );
  }
}

export default Causes;
