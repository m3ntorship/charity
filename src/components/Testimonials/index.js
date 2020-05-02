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
import './style.css';

class Testimonials extends Component {
  state = {
    data: {},
    error: false,
    loading: true
  };

  componentDidMount() {
    
  charityAPI({ url:'/What-they-say'})
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
          <FeedBackHeader
            heading_primary={heading_primary}
            heading_secondary={heading_secondary}
            description={Description}
          />
          <div className="container">
            <CarouselProvider
              naturalSlideWidth={50}
              naturalSlideHeight={30}
              totalSlides={numbersOfSlides}
              className="feedback__carousel grid absolute container"
            >
              <Slider className="sliderWrapper">
                {testimonials.map((slide, index) => {
                  return (
                    <Slide key={slide.id} index={{ index }} className="">
                      <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
                        <img
                          className="avatar"
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
              <ButtonBack className="slider_pre_next_btn testimonials_pre_btn">
                <i class="fas fa-angle-double-left"></i>
              </ButtonBack>
              <ButtonNext className="slider_pre_next_btn testimonials_nxt_btn">
                <i class="fas fa-angle-double-right"></i>
              </ButtonNext>
              <DotGroup className="testimonials_dots_group" />
            </CarouselProvider>
          </div>
          <div class="feedback_grey_layer"></div>
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
          <h2 className="text-c000 text-xl col-span-2 font-black">
            {this.props.heading_primary}
            <span className="text-c200 border-b-2  font-hairline">
              {this.props.heading_secondary}
            </span>
          </h2>
          <div className="text-c700 font-hairline text-lg">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;