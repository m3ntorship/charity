import React from 'react';
import WorkStyleCard from '../WorkStyleCard/index';
import { charityAPI } from '../../clients';
import './styles.css';

export default class WorkStyle extends React.Component {
  constructor() {
    super();
    this.state = { Work: {} };
  }
  getInitialState() {
    return { Work: 'Loading...' };
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
      <section class="work-style relative text-c600">
        <div class="container">
          <h2 class="text-center tracking-tight text-c100 font-bold">
            {this.state.Work.title_primary}{' '}
            <span class="tracking-wide text-c200 font-hairline underline border-b-2">
              {this.state.Work.title_complementary}
            </span>
          </h2>

          <div class="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
            {(() => {
              if (this.state.Work.Cards) {
                return this.state.Work.Cards.map(card => (
                  <WorkStyleCard
                    description={card.description}
                    title={card.title}
                    img={card.image_main.url}
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
