import React, { Component } from 'react';
import { charityAPI } from '../../clients';
import { Fragment } from 'react';
import './styles.css';

export default class Welcome extends Component {
  state = {
    data: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    charityAPI('/welcome-section')
      .then(({ data }) => {
        this.setState({
          data,
          loading: false,
          error: false
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
    let { error, loading } = this.state;

    if (error) {
      return <div className="error">error here</div>;
    }

    if (loading) {
      return <div className="loading">loading .. </div>;
    }

    if (this.state.data.id) {
      let {
        data: {
          image: { url },
          Heading: { heading_primary, heading_secondary },
          description,
          link,
          WelcomeActions
        }
      } = this.state;
      return (
        <Fragment>
          <section className="welcome py-0 text-c600 ">
            <div className="welcome_wrap container grid md:grid-cols-12 gap-8">
              <WelcomeImage url={url} />
              <div className="welcome__end col-start-1 col-end-10 md:col-start-7 md:col-end-13 pt-16">
                <div className="test_section ">
                  <div className="test_img"></div>
                  <div className="test_header">
                    <WelcomeHeader
                      header={heading_primary}
                      title_complementary={heading_secondary}
                      desc={description}
                    />
                  </div>
                </div>
                <ul className="md:flex sm:flex welcome__list ">
                  <MiniCard cardInfo={WelcomeActions} />
                </ul>

                <div className="w-full block text-center md:text-left">
                  <WelcomeBtn link={link || {}} />
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      );
    }
  }
}

// left side card DONE

class WelcomeImage extends Component {
  render() {
    return (
      <div className="welcome__start md:col-start-1 md:col-end-6 hidden md:block">
        <div className="welcome__start__img h-full relative">
          <img
            src={this.props.url}
            alt="childern smiling"
            className="object-cover object-center w-full h-full"
          />
          <div className="welcome__start__side absolute top-0 h-full bg-c200 w-12"></div>
        </div>
      </div>
    );
  }
}

// right side card in done

class WelcomeHeader extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="welcome_header text-c100 leading-tighter text-large text-center md:text-left font-bold md:text-xl mb-8 lg:mb-12 lg:mt-20">
          {this.props.header}
          <span className="text-c200 font-hairline underline border-b-2">
            {this.props.title_complementary}
          </span>
        </h2>
        <p className="welcome_description tracking-wide  text-center lg:text-justify">
          {this.props.desc}
        </p>
      </Fragment>
    );
  }
}

// loop over two cards
class MiniCard extends Component {
  render() {
    return this.props.cardInfo.map(card => {
      return (
        <li key={card.id} className="welcome__list__item pl-4">
          <h3 className="welcome__list__item__title relative mt-6 mb-2 sm:my-4 text-md font-bold text-c100 lg:my-10">
            {card.title}
          </h3>
          <p>{card.description}</p>
        </li>
      );
    });
  }
}

// card btn
class WelcomeBtn extends Component {
  render() {
    return (
      <button
        href={this.props.link.href}
        className="btn btn-lg bg-c300 mt-8 sm:mt-16"
      >
        {this.props.link.text}
      </button>
    );
  }
}
