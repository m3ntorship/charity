import React, { Component } from 'react';
// import card1 from './img/causes-card1.jpg';
// import card2 from './img/causes-card2.jpg';
// import card3 from './img/causes-card3.jpg';
import blocks from './img/blocks.png';
import './style.css';
// import { charityAPI } from '../../clients';
import Heading from '../Heading';

const charityAPI = () =>
  Promise.resolve({
    data: {
      _id: '5ea7675de813230c389a987c',
      Cause: [
        {
          _id: '5ea7675de813230c389a987d',
          title: 'Raise Funds for Saving Poverity Kids',
          description:
            'Aliq is notum hender erit a augue insu image pellen tes.',
          raised: 90,
          Goal: 100,
          action_button_text: 'Donate Now',
          action_button_url: '#/donatenow',
          createdAt: '2020-04-27T23:14:37.766Z',
          updatedAt: '2020-04-29T14:29:44.949Z',
          __v: 0,
          image: {
            _id: '5ea767a7e813230c389a9881',
            name: 'causes-card2',
            alternativeText: '',
            caption: '',
            hash: 'causes-card2_8563b353ef',
            ext: '.jpeg',
            mime: 'image/jpeg',
            size: 15.05,
            width: 310,
            height: 310,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card2_8563b353ef.jpeg',
            formats: {
              thumbnail: {
                hash: 'thumbnail_causes-card2_8563b353ef',
                ext: '.jpeg',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 5.29,
                url:
                  'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card2_8563b353ef.jpeg'
              }
            },
            provider: 'aws-s3',
            related: ['5ea7675de813230c389a987d'],
            createdAt: '2020-04-27T23:15:51.301Z',
            updatedAt: '2020-04-27T23:16:49.589Z',
            __v: 0,
            id: '5ea767a7e813230c389a9881'
          },
          id: '5ea7675de813230c389a987d'
        },
        {
          _id: '5ea7675de813230c389a987e',
          title: 'Raise Funds for Saving Poverity Kids',
          description:
            'Aliq is notum hender erit a augue insu image pellen tes.',
          raised: 300,
          Goal: 1000,
          action_button_text: 'Donate Now',
          action_button_url: '#/donatenow',
          createdAt: '2020-04-27T23:14:37.766Z',
          updatedAt: '2020-04-29T14:29:44.965Z',
          __v: 0,
          image: {
            _id: '5ea767bbe813230c389a9884',
            name: 'causes-card1',
            alternativeText: '',
            caption: '',
            hash: 'causes-card1_6781cb918e',
            ext: '.jpeg',
            mime: 'image/jpeg',
            size: 19.55,
            width: 310,
            height: 310,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_6781cb918e.jpeg',
            formats: {
              thumbnail: {
                hash: 'thumbnail_causes-card1_6781cb918e',
                ext: '.jpeg',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.87,
                url:
                  'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card1_6781cb918e.jpeg'
              }
            },
            provider: 'aws-s3',
            related: ['5ea7675de813230c389a987e'],
            createdAt: '2020-04-27T23:16:11.389Z',
            updatedAt: '2020-04-27T23:16:49.539Z',
            __v: 0,
            id: '5ea767bbe813230c389a9884'
          },
          id: '5ea7675de813230c389a987e'
        },
        {
          _id: '5ea8581c98752b28a83ca2a0',
          title: 'Raise Funds for Saving Poverity Kids',
          description:
            'Aliq is notum hender erit a augue insu image pellen tes.',
          raised: 500,
          Goal: 700,
          action_button_text: 'Donate Now',
          action_button_url: '#/donatenow',
          createdAt: '2020-04-28T16:21:48.503Z',
          updatedAt: '2020-04-29T14:29:44.958Z',
          __v: 0,
          image: {
            _id: '5ea857a098752b28a83ca295',
            name: 'causes-card3',
            alternativeText: '',
            caption: '',
            hash: 'causes-card3_e774623239',
            ext: '.jpeg',
            mime: 'image/jpeg',
            size: 24.98,
            width: 310,
            height: 310,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card3_e774623239.jpeg',
            formats: {
              thumbnail: {
                hash: 'thumbnail_causes-card3_e774623239',
                ext: '.jpeg',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.97,
                url:
                  'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card3_e774623239.jpeg'
              }
            },
            provider: 'aws-s3',
            related: ['5ea8581b98752b28a83ca29b', '5ea8581c98752b28a83ca2a0'],
            createdAt: '2020-04-28T16:19:44.724Z',
            updatedAt: '2020-04-28T16:21:48.679Z',
            __v: 0,
            id: '5ea857a098752b28a83ca295'
          },
          id: '5ea8581c98752b28a83ca2a0'
        }
      ],
      createdAt: '2020-04-27T23:14:37.658Z',
      updatedAt: '2020-04-29T14:29:45.231Z',
      __v: 1,
      causes_heading: {
        _id: '5ea8c20e3433ac1d7349fc9a',
        heading_primary: 'Our popular ',
        heading_secondary: 'Causes',
        createdAt: '2020-04-28T23:53:50.963Z',
        updatedAt: '2020-04-29T14:29:45.114Z',
        __v: 0,
        id: '5ea8c20e3433ac1d7349fc9a'
      },
      id: '5ea7675de813230c389a987c'
    }
  });

const Cause = ({ title, description, raised, goal, image }) => {
  return (
    <div className="causes__card border-gray-900 border border-solid z-10 bg-c000">
      <div className="causes__img pb-5">
        <img src={image} alt="Raise Funds For Poverity Kids" />
      </div>

      <div className="causes__text">
        <h3 className="causes__card--heading text-c100 text-lg font-bold pb-10">
          {title}
        </h3>
        <p className="causes__card--descriptio text-c600 text-sm pb-5">
          {description}
        </p>
      </div>

      <div className="causes__info pb-10">
        <div className="causes__raised relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-hand-holding-usd text-lg"></i>
          </span>
          <span className="causes__icon--funds font-bold text-c200 text-sm text-center inline-block absolute">
            {raised}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Raised
          </span>
        </div>
        <div className="causes__goal mb-3 relative">
          <span className="causes__icon inline-block">
            <i className="fas fa-bullseye text-lg"></i>
          </span>
          <span className="causes__icon--goal font-bold text-c200 text-sm absolute">
            {goal}
          </span>
          <span className="causes__icon--tag absolute text-c600 text-xs font-bold">
            Goal
          </span>
        </div>
      </div>

      <div className="causes__progress causes__progress--second mb-2"></div>

      <button className="btn causes__btn">Donate Now</button>
    </div>
  );
};

class Causes extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    charityAPI('/popular-causes').then(({ data }) => {
      this.setState({
        data
      });
    });
  }

  render() {
    if (this.state.data.id) {
      return (
        <section className="causes relative">
          <div className="causes__bg-image absolute w-3/6">
            <img src={blocks} alt="Our Popular Causes Background" />
          </div>
          <div className="causes__container container">
            <div className="causes__headings">
              <Heading
                primaryText={this.state.data.causes_heading.heading_primary}
                secondaryText="Causes"
                align="center"
                primaryTextColor="dark"
              />
            </div>

            <div className="causes__wrapper grid grid-cols-3">
              {this.state.data.Cause.map(item => {
                return (
                  <Cause
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    raised={item.raised}
                    goal={item.Goal}
                    image={item.image.url}
                  />
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return 'loading';
    }
  }
}

export default Causes;
