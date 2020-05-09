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
          className="donation-banner flex bg-cover bg-center bg-no-repeat relative py-4 md:py-8 lg:py-28  mt-12"
          style={backgroundStyle}
        >
          <div className="donation-banner__icon bg-c000 rounded-full absolute flex items-center justify-center">
            <img
              className=""
              src={this.state.featuredBanner.image_top.url}
              alt="Charity is hope"
            />
          </div>
          <div className="container self-center">
            <div className="mt-16 donation-banner__wrapper flex flex-col justify-center items-center">
              <Heading
                primaryText={this.state.featuredBanner.text_primary}
                secondaryText={this.state.featuredBanner.text_complementary}
                align="center"
                primaryClassName = "donation-banner-desc"
              />
                <a
                  className="donation-banner__btn btn btn-lg bg-c300"
                  href={this.state.featuredBanner.button_url}
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
