import React, { Component } from 'react';
// import { charityAPI } from '../../clients';
import { Fragment } from 'react';
import './styles.css';

const data = {
  welcome_image:
    'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
  header: 'This is welcome header',
  title_complementary: 'complementary',
  description: 'this is welcome description',
  mini_cards: [
    {
      id: 1,
      card_title: 'Become a volunteer',
      card_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      card_title: 'Become a volunteer',
      card_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ],
  card_btn: 'Discover More',
  loading: true,
  error: false
};

function charityAPIData() {
  return new Promise(() => {
    return data; 
  });
}

export default class Welcome extends Component {
  state = {
    welcome_image:
      'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg',
    header: 'This is welcome header',
    title_complementary: 'complementary',
    description: 'this is welcome description',
    mini_cards: [
      {
        id: 1,
        card_title: 'Become a volunteer',
        card_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        id: 2,
        card_title: 'Become a volunteer',
        card_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    ],
    card_btn: 'Discover More',
    loading: true,
    error: false
  };

  // mount plz

  //  componentDidMount() {
  //   charityAPIData()
  //     .then(({ data:  }) => {
  //       this.setState({
  //         activities_cards: activities.how_we_work_cards,
  //         description: activities.description,
  //         title_primary: activities.title_primary,
  //         title_complementary: activities.title_complementary,
  //         error: false,
  //         loading: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: true,
  //         loading: false
  //       });
  //     });
  // }

  render() {
    console.log(charityAPIData());
    return (
      <Fragment>
        <section className="welcome py-0 text-c600">
          <div className="container grid grid-cols-12 gap-8">
            <WelcomeImage url={this.state.welcome_image} />

            <div className="welcome__end col-start-7 col-end-13 pt-16">
              <WelcomeHeader
                header={this.state.header}
                title_complementary={this.state.title_complementary}
                desc={this.state.description}
              />
              <ul className="flex welcome__list">
                <MiniCard cardInfo={this.state.mini_cards} />
              </ul>

              <WelcomeBtn button={this.state.card_btn} />
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
      <button className="btn-lg bg-c300 mt-16">{this.props.button}</button>
    );
  }
}

// <div className="welcome__end col-start-7 col-end-13 pt-16">

//   <h2 className="text-c100 leading-tighter tracking-tight font-extrabold my-12">
//     Welcome to Best Charity
//     <span className="text-c200 font-hairline underline border-b-2">
//       Organization
//     </span>
//   </h2>

//   <p>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quaerat
//     similique corrupti autem repellendus at aliquid ab? Soluta est doloremque
//     repellat voluptas aperiam necessitatibus eligendi.
//   </p>

//   <ul className="flex welcome__list">
//     <li className="welcome__list__item pl-4">
//       <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
//         Become a Volunteer
//       </h3>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//     </li>

//     <li className="welcome__list__item pl-4">
//       <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
//         Quick Fundraising
//       </h3>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//     </li>
//   </ul>

//   <button className="btn-lg bg-c300 mt-16">Discover More</button>
// </div>;
