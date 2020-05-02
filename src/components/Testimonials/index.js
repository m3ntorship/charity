import React, { Component } from 'react';
import { charityAPI } from '../../clients';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import Heading from '../Heading';
import './style.css';

class Testimonials extends Component {
  state = {
    data: {},
    error: false,
    loading: true
  };

  componentDidMount() {
    charityAPI({ url: '/What-they-say' })
      .then(({ data }) => {
        this.setState({
          data,
          error: false,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }
  render() {
    if (this.state.error) {
      return <div className="error">error here</div>;
    }

    if (this.state.loading) {
      return <div className="loading">loading .. </div>;
    }
    if (this.state.data.id) {
      let {
        Description,
        Heading: { heading_primary, heading_secondary },
        testimonials
      } = this.state.data;

      let numbersOfSlides = testimonials.length;
      return (
        <section className="feedback bg-c100 relative">
          <div className="container">
            <FeedBackHeader
              heading_primary={heading_primary}
              heading_secondary={heading_secondary}
              description={Description}
            />
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={30}
              totalSlides={numbersOfSlides}
              className="feedback__carousel grid absolute container"
            >
              <Slider className="sliderWrapper feedback__carousel__quote text-c100">
                {testimonials.map((slide, index) => {
                  return (
                    <Slide
                      key={slide.id}
                      index={{ index }}
                      className="outline-none"
                    >
                      <figure className="text-c100 bg-c000 py-12 px-24 flex flex-col items-center justify-center h-full">
                        <img
                          className="feedback__carousel__avatar"
                          src={slide.image.url}
                          alt="nile"
                        />
                        <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                          <p className="mb-8 font-hairline">{slide.body}</p>
                          <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                            {slide.author}
                          </h4>
                          <p className="leading-normal text-c600 text-base">
                            <a href={slide.link.url}>{slide.link.text}</a>
                          </p>
                        </blockquote>
                      </figure>
                    </Slide>
                  );
                })}
              </Slider>

              <div className="feedback__carousel__back-arrow feedback__carousel__arrow bg-c800 flex items-center justify-center text-lg">
                <ButtonBack className="text-c100 border-c100 rounded-full">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </ButtonBack>
              </div>
              <div className="feedback__carousel__forward-arrow feedback__carousel__arrow bg-c800 flex items-center justify-center text-lg">
                <ButtonNext className="text-c100 border-c100 rounded-full">
                  <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </ButtonNext>
              </div>
              <div className="feedback__carousel__picker bg-c800 flex items-center justify-center text-lg">
                <DotGroup className="testimonials_dots_group" />
              </div>
            </CarouselProvider>
          </div>
        </section>
      );
    }
  }
}

class FeedBackHeader extends Component {
  render() {
    return (
      <div className="feedback__heading ">
        <div className="grid grid-cols-3 ">
          <Heading
            primaryText={this.props.heading_primary}
            secondaryText={this.props.heading_secondary}
            primaryClassName="col-span-2"
          />
          <div className="text-c700 font-hairline">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
