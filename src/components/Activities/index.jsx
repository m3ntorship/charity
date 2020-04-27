import React from 'react';
// import { charityAPI } from '../../clients';

const charityAPI = () =>
  Promise.resolve({
    data: [
      { _id: '1', heading: 'We try', text: 'This is a text', url: 'url' },
      { _id: '2', heading: 'We build', text: 'This is', url: 'qwe' },
      { _id: '3', heading: 'We 3', text: 'This ', url: 'dfg' },
      { _id: '4', heading: 'We 5', text: 'This 444', url: 'asd' },
      { text: 'this is activities test' }
    ]
  });

export default class Activities extends React.Component {
  state = { activities: [] };
  componentDidMount() {
    charityAPI({
      url: '/activities'
    }).then(({ data: activities }) => {
      this.setState({ activities });
    });
  }

  _renderActivities() {
    return this.state.activities.map(({ _id, heading, text, url }) => {
      return (
        <div className="activity ml-10 pl-10 relative text-center" key={_id}>
          <img className="mx-auto" src={url} alt="" />
          <h3 className="showcase-row__heading">{heading}</h3>
          <p>{text}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ActivitiesHeader />
        {this._renderActivities()}
      </div>
    );
  }
}

class ActivitiesHeader extends React.Component {
  render() {
    state = {
      activities_text: 'This is dumy test for activities paragraph'
    };
    return (
      <div className="activities__intro flex flex-row">
        <h2 className="w-3/5 text-c100 font-bold leading-tighter">
          We Believe We Can Save More
          <span className="text-c200 font-hairline underline">Lives</span>
        </h2>
        <p className="w-2/5 mt-5">{this.state.activities_text}</p>
      </div>
    );
  }
}
