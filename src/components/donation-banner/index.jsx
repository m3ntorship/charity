import React, { Component } from 'react';
import Icon from './img/donation-banner-icon.png';
// import { charityAPI } from '../clients';

const charityAPI = () =>
  Promise.resolve({
    donation: {
      paragraph:
        "Making someone else’s dreams a reality is something that's value is",
      spicial_word: 'innumerable',
      event: 'Start Donation',
      event_link: '#',
      icon: Icon
    }
  });

export default class Donation extends Component {
  state = { data: {}, error: false };

  componentDidMount() {
    charityAPI('/donation-banner')
      .then(donation => {
        this.setState({ data: donation });
      })
      .catch(error => {});
  }

  render() {
    return (
      <section className="donation-banner bg-cover bg-center bg-no-repeat relative mt-12">
        <div className="donation-bnanner__icon bg-c000 rounded-full absolute flex items-center justify-center">
          <img className="" src={this.state.data.icon} alt="Charity is hope" />
        </div>
        <div className="container">
          <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
            <p className="donation-banner__content text-c000 font-black leading-tighter mb-16 text-center">
              {this.state.data.paragraph}
              <span className="border-b-4 text-c200 font-hairline tracking-wider">
                {this.state.data.spicial_word}
              </span>
            </p>
            <a href={this.state.data.event_link} className="btn-md bg-c300">
              {this.state.data.event}
            </a>
          </div>
        </div>
      </section>
    );
  }
}
