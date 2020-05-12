import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider
} from 'pure-react-carousel';
import React, { useEffect, useState } from 'react';
import { charityAPI } from '../../clients';
import Heading from '../Heading';
import './style.css';
import { HeadLoader, DescLoader } from './MyLoader';

const Testimonials = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    _getData();
  }, []);

  const _getData = () => {
    charityAPI({ url: '/What-they-say' })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      });
  };

  if (error) {
    return <div className="error">error here</div>;
  }

  if (loading) {
    return (
      <div className="feedback relative">
        <div className="container loader_container" style={{ width: '90%' }}>
          <div className="flex grid grid-cols-12 w-full overflow-hidden mt-20">
            <div
              className="testimonial_header col-start-1 col-end-13 
            lg:col-start-1 lg:col-end-7"
            >
              <HeadLoader />
            </div>
            <div
              className="testimonial_desc col-start-1 col-end-13 
           lg:col-start-8 lg:col-end-13 "
            >
              <DescLoader />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (data.id) {
    let {
      Description,
      Heading: { heading_primary, heading_secondary },
      testimonials
    } = data;

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
            naturalSlideWidth={170}
            naturalSlideHeight={100}
            totalSlides={numbersOfSlides}
            className="feedback__carousel grid absolute container"
            isIntrinsicHeight={true}
          >
            <Slider className="sliderWrapper feedback__carousel__quote text-c100">
              {testimonials.map((slide, index) => {
                return (
                  <Slide key={slide.id} index={{ index }} className="">
                    <figure className="text-c100 bg-c000 flex flex-col items-center px-12">
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
            <div className="feedback__carousel__back-arrow feedback__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg">
              <ButtonBack className="text-c100 border-c100 rounded-full">
                <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                  <i className="fas fa-arrow-left"></i>
                </div>
              </ButtonBack>
            </div>
            <div className="feedback__carousel__forward-arrow feedback__carousel__arrow lg:bg-c800 flex items-center justify-center text-lg">
              <ButtonNext className="text-c100 border-c100 rounded-full">
                <div className="justify-center items-center flex rounded-full border-solid p-4 border-2 cursor-pointer">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </ButtonNext>
            </div>
            <div className="feedback__carousel__picker lg:bg-c800 flex items-center justify-center text-lg">
              <DotGroup className="testimonials_dots_group" />
            </div>
          </CarouselProvider>
        </div>
      </section>
    );
  }
};

const FeedBackHeader = ({
  heading_primary,
  heading_secondary,
  description
}) => {
  return (
    <div className="feedback__heading ">
      <div className="grid grid-cols-3 ">
        <Heading
          primaryText={heading_primary}
          secondaryText={heading_secondary}
          primaryClassName="col-span-3 text-center lg:col-span-2 lg:text-left"
        />
        <div className="text-c700 font-hairline text-center col-span-3 lg:col-span-1 lg:text-left">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
