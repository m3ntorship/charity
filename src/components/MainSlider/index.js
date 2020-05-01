import React, { Component } from 'react';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import axios from 'axios';
/*! purgecss start ignore */
import 'pure-react-carousel/dist/react-carousel.es.css';
/*! purgecss end ignore */
// import "./style.css";
import left_arrow from './work-style/left_arrow.png';
import right_arrow from './work-style/right_arrow.png';

class MainSlider extends Component {
  state = {
    data: {},
    error: false,
    loading: true
  };

  componentDidMount() {
    axios
      .get('https://charity-cms-dev.m3ntorship.net/What-they-say')
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
              naturalSlideWidth={500}
              naturalSlideHeight={250}
              totalSlides={numbersOfSlides}
              className="feedback__carousel grid absolute container"
            >
              <Slider className="sliderWrapper">
                {testimonials.map((slide, index) => {
                  return (
                    <Slide key={slide.id} index={{ index }}>
                      <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
                        <img
                          className="avatar"
                          src={slide.image.url}
                          alt="nile"
                        />
                        <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                          <p className="mb-8 leading-normal font-hairline">
                            {slide.body}
                          </p>
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
              <ButtonBack className="button_back">
                {/* <img className="" src={left_arrow} /> */}
                <div className="feedback__carousel__back-arrow bg-c800 flex items-center justify-center text-lg">
                  <a href="#a" className="justify-center items-center flex">
                    <div className="text-c700 rounded-full border-solid justify-center items-center flex p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                      <i className="fas fa-arrow-left"></i>
                    </div>
                  </a>
                </div>
              </ButtonBack>
              <ButtonNext className="button_next">
                {/* <img className="" src={right_arrow} /> */}
                <div className="feedback__carousel__forward-arrow bg-c800 flex items-center justify-center text-lg">
                  <a href="#a" className="justify-center items-center flex">
                    <div className="text-c700 justify-center items-center flex rounded-full border-solid p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </ButtonNext>

              <div className="feedback__carousel__picker bg-c800 flex items-center justify-center text-lg">
                <DotGroup>
                  <i className="fas fa-dot-circle text-c200 mr-1 cursor-pointer"></i>
                </DotGroup>
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
      <div className="feedback__heading">
        <div className="grid grid-cols-3">
          <h2 className="text-c000 text-xl col-span-2 font-black">
            {this.props.heading_primary}
            <span className="text-c200 border-b-2 font-hairline">
              {this.props.heading_secondary}
            </span>
          </h2>
          <div className="text-c700 font-hairline">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSlider;
