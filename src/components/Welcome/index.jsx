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
          <section className="welcome py-0 text-c600">
            <div className="container w-full m-auto sm:grid sm:grid-cols-12 gap-8">
              <WelcomeImage url={url} />
              <div className="welcome__end sm:col-start-7 sm:col-end-13  pt-16   ">
                <WelcomeHeader
                  header={heading_primary}
                  title_complementary={heading_secondary}
                  desc={description}
                />
                <ul className="w-3/4 lg:flex m-auto my-16 list-disc sm:list-none text-xl welcome__list sm:w-full">
                  <MiniCard cardInfo={WelcomeActions} />
                </ul>
                <div className="w-full block text-center mt-20">
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
      <div className="welcome__start col-start-1 col-end-6 hidden sm:block">
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
        <h2 className="text-c100 leading-tighter font-bold mb-20 text-large leading-3 my-12 text-center sm:text-lg">
          {this.props.header}
          <span className="text-c200 font-hairline underline border-b-2">
            {this.props.title_complementary}
          </span>
        </h2>
        <p className="tracking-wide text-center text-medium mx-8 sm:text-left sm:text-md">
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
        <li key={card.id} className="welcome__list__item pl-4 my-10">
          <h3 className="welcome__list__item__title relative text-md font-bold text-c100 text-xl sm:text-lg sm:my-10">
            {card.title}
          </h3>
          <p className="text-medium sm:text-md">{card.description}</p>
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
        className="btn btn-lg bg-c300 text-medium sm:text-lg"
      >
        {this.props.link.text}
      </button>
    );
  }
}
