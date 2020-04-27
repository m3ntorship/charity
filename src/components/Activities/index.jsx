import React from 'react';
import { charityAPI } from '../../clients';
import './styles.css';


export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities_cards: [],
      title_primary: null,
      title_complementary: null,
      description: null
    };
    this.renderActivities = this.renderActivities.bind(this);
  }

  componentDidMount() {
    charityAPI({
      url: '/what-we-do'
    }).then(({ data: activities }) => {
      this.setState({
        activities_cards: activities.how_we_work_cards,
        description: activities.description,
        title_primary: activities.title_primary,
        title_complementary: activities.title_complementary
      });
    });
  }

  renderActivities() {
    return this.state.activities_cards.map(
      ({ _id, description, Title, image_main }) => {
        return (
          <div className="activity ml-10 pl-10 relative text-center" key={_id}>
            <img
              className="mx-auto"
              src={image_main.url}
              alt={image_main.alternativeText}
            />
            <h3 className="showcase-row__heading">{Title}</h3>
            <p>{description}</p>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div className="activites container px-5 font-body text-c600">

        <ActivitiesHeader
          title_primary={this.state.title_primary}
          title_complementary={this.state.title_complementary}
          description={this.state.description}
        />
        <div className="showcase-row -mt-3 px-8">
          <this.renderActivities />
        </div>

        <div className="heart-bg w-1/2 h-48 -mt-48 p-0"></div>

      </div>
    );
  }
}

class ActivitiesHeader extends React.Component {
  render() {
    return (
      <div className="activities__intro flex flex-row">
        <h2 className="w-3/5 text-c100 font-bold leading-tighter">
          {this.props.title_primary}
          <span className="text-c200 font-hairline underline">
            {this.props.title_complementary}
          </span>
        </h2>
        <p className="w-2/5 mt-5">{this.props.description}</p>
      </div>
    );
  }
}

// --------------------------------------------------------

// <section className="activites container px-5 font-body text-c600">

//   <div className="activities__intro flex flex-row">
//     <h2 className="w-3/5 text-c100 font-bold leading-tighter">
//       We Believe We Can Save More
//       <span className="text-c200 font-hairline underline">Lives</span>
//     </h2>
//     <p className="w-2/5 mt-5">
//       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//       commodo ligula eget dolor. Aenean massa.
//     </p>
//   </div>






//   <div className="showcase-row -mt-3 px-8">
//     <div className="text-center">
//       <img
//         className="mx-auto"
//         src="assets/img/activities/01.png"
//         alt=""
//       />
//       <h3 className="showcase-row__heading">We Help</h3>
//       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
//     </div>



//     <div className="activity ml-10 pl-10 relative text-center">
//       <img
//         className="mx-auto"
//         src="assets/img/activities/02.png"
//         alt=""
//       />
//       <h3 className="showcase-row__heading">We Build</h3>
//       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
//     </div>

//     <div className="activity ml-10 pl-10 relative text-center">
//       <img
//         className="mx-auto"
//         src="assets/img/activities/03.png"
//         alt=""
//       />
//       <h3 className="showcase-row__heading">We Educate</h3>
//       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
//     </div>

//     <div className="activity ml-10 pl-10 relative text-center">
//       <img
//         className="mx-auto"
//         src="assets/img/activities/04.png"
//         alt=""
//       />
//       <h3 className="showcase-row__heading">We Nourish</h3>
//       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
//     </div>
//   </div>


// </section>
// <div className="heart-bg w-1/2 h-48 -mt-48 p-0"></div>
