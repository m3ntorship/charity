import React, { Component } from 'react';
import { charityAPI } from '../../clients';
import { Fragment } from 'react';
import './styles.css';

export default class Welcome extends Component {
  state = {
    heading_primary: null,
    heading_secondary: null,
    main_image_src: null,
    description: null,
    mini_cards: [],
    call_to_action_text: null,
    call_to_action_url: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    charityAPI('/welcome-section')
      .then(
        ({
          data: {
            Heading: { heading_primary, heading_secondary },
            WelcomeActions: mini_cards,
            link: { text: call_to_action_text, url: call_to_action_url },
            image: { url: main_image_src },
            description
          }
        }) => {
          this.setState({
            heading_primary,
            heading_secondary,
            main_image_src,
            description,
            mini_cards,
            call_to_action_text,
            call_to_action_url,
            loading: false,
            error: false
          });
        }
      )
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    return (
      <Fragment>
        <section className="welcome py-0 text-c600">
          <div className="container grid grid-cols-12 gap-8">
            <WelcomeImage url={this.state.main_image_src} />

            <div className="welcome__end col-start-7 col-end-13 pt-16">
              <WelcomeHeader
                header={this.state.heading_primary}
                title_complementary={this.state.heading_secondary}
                desc={this.state.description}
              />
              <ul className="flex welcome__list">
                <MiniCard cardInfo={this.state.mini_cards} />
              </ul>

              <WelcomeBtn textUrl={this.state.call_to_action} />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

// left side card DONE

class WelcomeImage extends Component {
  render() {
    return (
      <div className="welcome__start col-start-1 col-end-6">
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

// right side card in progress

class WelcomeHeader extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="text-c100 leading-tighter tracking-tight font-extrabold my-12">
          {this.props.header}
          <span className="text-c200 font-hairline underline border-b-2">
            {this.props.title_complementary}
          </span>
        </h2>
        <p>{this.props.desc}</p>
      </Fragment>
    );
  }
}

// loop over two components
class MiniCard extends Component {
  render() {
    return this.props.cardInfo.map(card => {
      return (
        <li key={card.id} className="welcome__list__item pl-4">
          <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
            {card.card_title}
          </h3>
          <p>{card.card_desc}</p>
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
        href={this.props.call_to_action_url}
        className="btn-lg bg-c300 mt-16"
      >
        {this.props.call_to_action_text}
      </button>
    );
  }
}

{
  /* <div className="welcome__end col-start-7 col-end-13 pt-16">

  <h2 className="text-c100 leading-tighter tracking-tight font-extrabold my-12">
    Welcome to Best Charity
    <span className="text-c200 font-hairline underline border-b-2">
      Organization
    </span>
  </h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quaerat
    similique corrupti autem repellendus at aliquid ab? Soluta est doloremque
    repellat voluptas aperiam necessitatibus eligendi.
  </p>

  <ul className="flex welcome__list">
    <li className="welcome__list__item pl-4">
      <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
        Become a Volunteer
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </li>

    <li className="welcome__list__item pl-4">
      <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
        Quick Fundraising
      </h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </li>
  </ul>

  <button className="btn-lg bg-c300 mt-16">Discover More</button>
</div>; */
}
