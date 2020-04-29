import React from 'react';
import WorkStyleCard from '../WorkStyleCard/index';
// import { charityAPI } from '../../clients';
import './styles.css';

function charityAPI() {
  return Promise.resolve({
    _id: '5ea60f90e8a70808e620a99a',
    Cards: [
      {
        Title: 'Join Our Website',
        description:
          'Lorem ipsum is simply free text available in market websites',
        image_main: {
          url: './img/work-style/01.svg'
        },
        image_hover: {
          url: './img/work-style/02.svg'
        }
      }
    ],
    createdAt: '2020-04-26T22:47:44.008Z',
    updatedAt: '2020-04-29T12:47:47.967Z',
    __v: 0,
    title_complementary: '',
    title_primary: '',
    id: '5ea60f90e8a70808e620a99a'
  });
}

export default class WorkStyle extends React.Component {
  constructor() {
    super();
    this.state = { Work: {} };
  }

  componentDidMount() {
    charityAPI({
      url: '/how-we-work'
    }).then(({ data: Work }) => {
      this.setState({ Work });
    });
  }

  render() {
    return (
      <section className="work-style relative text-c600">
        <div className="container">
          <h2 className="text-center tracking-tight text-c100 font-bold">
            {this.state.Work.title_primary}{' '}
            <span className="tracking-wide text-c200 font-hairline underline border-b-2">
              {this.state.Work.title_complementary}
            </span>
          </h2>

          <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
            {(() => {
              if (this.state.Work.Cards) {
                return this.state.Work.Cards.map(card => (
                  <WorkStyleCard
                    description={card.description}
                    title={card.Title}
                    img={card.image_main.url}
                    img_hover={card.image_hover.url}
                    border_color={card.color}
                  />
                ));
              } else {
                return 'Loading...';
              }
            })()}
          </div>
        </div>
      </section>
    );
  }
}
