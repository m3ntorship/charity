import React, { Component } from 'react';
import blocks from './img/blocks.png';
import './style.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading';

const Cause = ({ title, description, raised, goal, image }) => {
  return (
    <div className="causes__card border-gray-900 border border-solid z-10 bg-c000">
      <div className="causes__img pb-5">
        <img src={image} alt="Raise Funds For Poverity Kids" />
      </div>

      <div className="causes__text">
        <h3 className="causes__card--heading text-c100 text-lg font-bold pb-10">
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
            {raised}
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
            {goal}
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
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    charityAPI('/popular-causes').then(({ data }) => {
      this.setState({
        data
      });
    });
  }

  render() {
    if (this.state.data.id) {
      return (
        <section className="causes relative">
          <div className="causes__bg-image absolute w-3/6">
            <img src={blocks} alt="Our Popular Causes Background" />
          </div>
          <div className="causes__container container">
            <div className="causes__headings">
              <Heading
                primaryText={this.state.data.causes_heading.heading_primary}
                secondaryText="Causes"
                align="center"
                primaryTextColor="dark"
              />
            </div>

            <div className="causes__wrapper grid grid-cols-3">
              {this.state.data.Cause.map(item => {
                return (
                  <Cause
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    raised={item.raised}
                    goal={item.Goal}
                    image={item.image.url}
                  />
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return 'loading';
    }
  }
}

export default Causes;
