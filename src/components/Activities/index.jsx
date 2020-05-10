import React from 'react';
import { charityAPI } from '../../clients';
import { Fragment } from 'react';
import './styles.css';

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities_cards: [],
      title_primary: null,
      title_complementary: null,
      description: null,
      loading: true,
      error: false
    };
    this.renderActivities = this.renderActivities.bind(this);
  }

  componentDidMount() {
    charityAPI({
      url: '/what-we-do'
    })
      .then(({ data: activities }) => {
        this.setState({
          activities_cards: activities.how_we_work_cards,
          description: activities.description,
          title_primary: activities.title_primary,
          title_complementary: activities.title_complementary,
          error: false,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  renderActivities() {
    return this.state.activities_cards.map(
      ({ _id, description, Title, image_main }) => {
        return (
          <div className=" activity relative text-center" key={_id}>
            <img
              className="mx-auto"
              src={image_main.url}
              alt={image_main.alternativeText}
            />
            <h3 className="showcase-row__heading text-lg py-4">{Title}</h3>
            <p className="text-base px-5">{description}</p>
          </div>
        );
      }
    );
  }

  render() {
    if (this.state.loading) {
      return <div>loading data </div>;
    }
    if (this.state.error) {
      return <div>we can not fetch data</div>;
    }
    return (
      <Fragment>
        <div className="activites container px-5 py-5 font-body text-c600">
          <ActivitiesHeader
            title_primary={this.state.title_primary}
            title_complementary={this.state.title_complementary}
            description={this.state.description}
          />
          <div className="showcase-row -mt-3 px-8 grid gap-4 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:row-gap-0">
            <this.renderActivities />
          </div>
        </div>
        <div className="heart-bg w-1/2 h-48 -mt-48 p-0 xl:block hidden"></div>
      </Fragment>
    );
  }
}

class ActivitiesHeader extends React.Component {
  render() {
    return (
      <div className="activities__intro flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
        <h2 className="w-4/5 lg:w-3/5 text-c100 font-bold leading-tighter">
          {this.props.title_primary}
          <span className="text-c200 font-hairline underline">
            {this.props.title_complementary}
          </span>
        </h2>
        <p className="w-4/5 lg:w-2/5 lg:text-justify text-center mt-12 lg:mt-0">
          {this.props.description}
        </p>
      </div>
    );
  }
}
