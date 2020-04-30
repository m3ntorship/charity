import React from 'react';
import WorkStyleCard from '../WorkStyleCard/index';
import Heading from '../Heading/index';
import { charityAPI } from '../../clients';
import './styles.css';

export default class WorkStyle extends React.Component {
  state = {
    data: {},
    loading: true,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    this.setState({ loading: true });
    this._getData();
  }
  _getData = () => {
    charityAPI('/how-we-work')
      .then(({ data }) => {
        this.setState({
          data: data,
          loading: false,
          error: false
        });
      })
      .catch(error =>
        this.setState({
          error: true,
          loading: false,
          errorMessage: " Couldn't fetch data"
        })
      );
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return (
        <div>
          {this.state.errorMessage},{' '}
          <a href="#/" onClick={this._getData} className="text-c200">
            retry?
          </a>
        </div>
      );
    }
    return (
      <section
        className="work-style relative text-c600"
        style={{ marginTop: '20rem' }}
      >
        <div className="container">
          <Heading
            primaryTextColor="dark"
            primaryText={this.state.data.title_primary}
            secondaryText={this.state.data.title_complementary}
          />

          <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
            {(() => {
              if (this.state.data.Cards) {
                return this.state.data.Cards.map(card => (
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
