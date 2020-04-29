import React from 'react';
import WorkStyleCard from '../WorkStyleCard/index';
import Heading from '../Heading/index';
import { charityAPI } from '../../clients';
import './styles.css';

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
          <Heading
            primaryText={this.state.Work.title_primary}
            secondaryText={this.state.Work.title_complementary}
          />

          <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
            {(() => {
              if (this.state.Work.Cards) {
                return this.state.Work.Cards.map(card => (
                  <WorkStyleCard
                    description={card.description}
                    title={card.Title}
                    img={card.image_main.url}
                    img_hover={card.image_main_hover.url}
                    border_color={card.color}
                    key={card.id}
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
