import React from 'react';
import { charityAPI } from '../../clients';

export default class Activities extends React.Component {
  // state = { activities: [] };
  // componentDidMount() {
  //   charityAPI({
  //     url: '/what-we-do'
  //   }).then(({ data: activities }) => {
  //     this.setState({ activities });
  //   });
  // }

  // _renderActivities() {
  //   return this.state.activities.how_we_work_cards.map(
  //     ({ _id, description, Title, image_main }) => {
  //       return (
  //         <div className="activity ml-10 pl-10 relative text-center" key={_id}>
  //           <img
  //             className="mx-auto"
  //             src={image_main.url}
  //             alt={image_main.alternativeText}
  //           />
  //           <h3 className="showcase-row__heading">{Title}</h3>
  //           <p>{description}</p>
  //         </div>
  //       );
  //     }
  //   );
  // }

  render() {
    return <div>
    Hello world 
    </div>
  }
}

// class ActivitiesHeader extends React.Component {
//   render() {
//     state = {
//       activities_text: 'This is dumy test for activities paragraph'
//     };
//     return (
//       <div className="activities__intro flex flex-row">
//         <h2 className="w-3/5 text-c100 font-bold leading-tighter">
//           We Believe We Can Save More
//           <span className="text-c200 font-hairline underline">Lives</span>
//         </h2>
//         <p className="w-2/5 mt-5">{this.state.activities_text}</p>
//       </div>
//     );
//   }
// }
