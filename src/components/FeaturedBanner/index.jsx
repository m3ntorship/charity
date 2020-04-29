import React, { Component } from 'react';
import { charityAPI } from '../../clients';
import './styles.css';
import Heading from '../Heading';

export default class FeaturedBanner extends Component {
  state = { featuredBanner: {}, error: false };

  componentDidMount() {
    charityAPI('/featured-banner')
      .then(({ data: featuredBanner }) => {
        this.setState({ featuredBanner });
      })
      .catch(error => {});
  }

  render() {
    if (this.state.featuredBanner._id) {
      const backgroundStyle = {
        backgroundImage: `linear-gradient( rgba(41, 68, 85, 0.5), rgba(41, 68, 85, 0.7) ), url('${this.state.featuredBanner.image_background.url}')`
      };
      return (
        <section
          className="donation-banner bg-cover bg-center bg-no-repeat relative mt-12"
          style={backgroundStyle}
        >
          <div className="donation-bnanner__icon bg-c000 rounded-full absolute flex items-center justify-center">
            <img
              className=""
              src={this.state.featuredBanner.image_top.url}
              alt="Charity is hope"
            />
          </div>
          <div className="container">
            <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
              <Heading
                primaryText={this.state.featuredBanner.text_primary}
                secondaryText={this.state.featuredBanner.text_complementary}
                size="xxl"
                align="center"
              />
              <a
                href={this.state.featuredBanner.button_url}
                className="btn-md bg-c300"
              >
                {this.state.featuredBanner.button_text}
              </a>
            </div>
          </div>
        </section>
      );
    } else {
      return <div>Loading ....</div>;
    }
  }
}
