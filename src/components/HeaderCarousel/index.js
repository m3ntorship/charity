import React, { Component } from 'react';
import { charityAPI } from '../../clients';
import MainNavigation from '../MainNavigation';
import './styles.css';
import Heading from '../Heading';
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

class HeaderCarousel extends Component {
  state = {
    data: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: true });
    charityAPI({ url: '/main-carousels' })
      .then(({ data }) => {
        this.setState({
          data,
          error: false,
          loading: false
        });
        console.log(data);
      })

      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    let numberOfSlides = this.state.data.length;
    let enableDragging = numberOfSlides > 1;
    let enableButtons = numberOfSlides > 1;

    if (this.state.error) {
      return <div className="error">error here</div>;
    }

    if (this.state.loading) {
      return <div className="loading">loading .. </div>;
    }
    if (numberOfSlides) {
      return (
        <section className="slider py-0 bg-cover bg-center bg-c800 relative">
          <div className="container">
            <MainNavigation />
          </div>

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            isIntrinsicHeight={true}
            totalSlides={numberOfSlides}
            dragEnabled={enableDragging}
            className="h-full header__carousel"
          >
            <Slider className="h-full">
              {this.state.data.map((slide, index) => {
                let {
                  heading: { heading_primary, heading_secondary },
                  intro,
                  link: { url, text },
                  image
                } = slide;
                return (
                  <Slide key={slide.id} index={{ index }} className="h-full">
                    <div
                      className="header__carousel__slide h-full flex items-center justify-center bg-cover"
                      style={{
                        background: `linear-gradient(0deg, #203b4cb5, #203b4cb5), url(${image.url}) no-repeat center/cover`
                      }}
                    >
                      <div className="header__carouser__slide__textContent text text-center text-c000">
                        <p className="header__carouser__slide__intro italic tracking-wider font-hairline">
                          {intro}
                        </p>
                        <div className="main flex items-center justify-center">
                          <Heading
                            primaryText={`${heading_primary}  `}
                            secondaryText={heading_secondary}
                            secondaryTextColor="yellow"
                            size="xxxl"
                            align="center"
                          />
                        </div>
                        <a
                          className="mainHeader_fix_mb btn btn-md bg-c200 text-c000 inline-block mt-6"
                          href={url}
                        >
                          {text}
                        </a>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            {enableButtons && (
              <div className="header__carousel__arrows absolute w-full flex text-c000 border-c000 justify-between px-16">
                <ButtonBack className="rounded-full">
                  <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
                    <i class="fas fa-arrow-left"></i>
                  </div>
                </ButtonBack>
                <ButtonNext className="rounded-full  ">
                  <div class="justify-center items-center flex rounded-full border-solid  p-4 border-2 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </ButtonNext>
              </div>
            )}
          </CarouselProvider>
        </section>
      );
    }
  }
}

export default HeaderCarousel;
