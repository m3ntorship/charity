import React, { Component } from 'react';
import dotsImage from './img/dots.png';
import circleImage from './img/circle.png';
import { charityAPI } from '../../clients';
import './style.css';

const Number = ({ number, title }) => {
  return (
    <div className="statistics-content__item justify-end flex flex-col w-1/4">
      <span className="statistics-content__item__value text-center tracking-wide text-c200 text-xl font-light font-body leading-loose">
        {number}
      </span>
      <h3 className="statistics-content__item__name mt-3 tracking-wide capitalize font-light text-c100 text-md">
        {title}
      </h3>
    </div>
  );
};

class Numbers extends Component {
  state = {
    data: {
      numbers: [],
      backgroundImage:
        'https://lh3.googleusercontent.com/qWM9ByJ3Fbz2tPnnbF4paUtl3N5gRCG01DFESqYOoM9tJIHx4fdGH4ccHX6mwPSfzPdvEiNZUfs2m1fNt_msn02AjDAROWbMmLkYPgOZOs5IEt09BtiBNBatgMQ9Hg-qjEIDP5Pt6WY4uImsKrRrm724Kqx0M5ka-bn4k0n_vjQ0hVSDoxr5TYBTixHvuJbFEwvMOjWEYzri_xuKGhgAcHRzu1Rl70e2nwwJUy_34tgn1hC64Y0wzXhrw1Vq9CM32e0ilvoCAUCtPzCO_i187FgFX-_TZ7yJmb4Ry16XblLACFyRz7NzA25YGs264i2xTtH6ZlhsreofKoirHmLE2fMZkp7fq5MzfsBnLkgZpEPmBrL7HXf35L3VXbBN4j3XYypI9sJAFZTMJ0Dbv0dpWOMT1FebLEZrgz3zrAblD5kL1yljUJMPvfkrV8AYSyHfyBiHNAs0T6b4M5q406VH_ovmZPS_i1js3ZXyuC3H-nlrfUKJGlLU_9suRefWbaxVHEDRJdDG6aEgBLKakc231ZMO51ixjdoH34w7I0YIY8Y6n5j8yedFIRTjfaBqcXiDoaEF4cWjfORKmTSty8qBOHoC2Bt_mj9COHOXD6gsoTUSb3BfL0m7Vz4NG1sLipok5V2-cOY8vHZAZ6kAKXGfppqOsrn6MNlA0Ls_S7Oz0DHp3hMJSfmaJ6nkS4AHOhNe9YdWbMpddht_7IYewcUfjI1YWRIAjwn-nyfHp0Nakvbb7CNpLGGL=w1354-h903-no'
    },
    loading: true,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    this.setState({ loading: true });
    charityAPI('/speaking-numbers')
      .then(({ data: { speaking_numbers, image_background } }) => {
        this.setState({
          loading: false,
          data: {
            numbers: speaking_numbers,
            backgroundImage: image_background.url
          },
          error: false,
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: 'can NOT fetch numbers'
        });
      });
  };

  render() {
    const backgroundImageStyle = {
      backgroundImage: `url(${this.state.data.backgroundImage})`
    };

    //while getting data
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (this.state.error) {
      return (
        <div>
          {this.state.errorMessage}
          {', '}
          <a href="#/" className="text-c200 underline " onClick={this._getData}>
            retry?
          </a>
        </div>
      );
    }

    if (!this.state.loading && !this.state.error) {
      const {
        data: { numbers }
      } = this.state;

      const numbersList = numbers.map(item => {
        return <Number title={item.title} number={item.number} key={item.id} />;
      });
      return (
        <section className="numbers z-0 relative bg-c800 pb-0">
          <div className="container">
            <div className="statistics-wrapper">
              <div
                className="statistics-wrapper__image bg-cover bg-no-repeat"
                style={backgroundImageStyle}
              ></div>
              <div className="statistics-numbers">
                <div className="statistics-numbers__speak relative">
                  <p className="statistics-numbers__speak__text p-4 font-normal absolute text-center capitalize text-lg font-body font-light text-c000 bg-c400">
                    numbers speak
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="statistics-content bg-c000">
            <div className="container">
              <div className="statistics-content__list p-16 bg-c800 flex text-center">
                {numbersList}
              </div>
            </div>
          </div>
          <div className="statistics-wrapper__dots-image absolute">
            <img src={dotsImage} alt="" />
          </div>
          <div className="statistics-wrapper__circle-image absolute">
            <img src={circleImage} alt="" />
          </div>
        </section>
      );
    }
  }
}

export default Numbers;
