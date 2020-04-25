import React from 'react';
import { useCharityAPI } from '../../clients';

export default class Activities extends React.Component {
  componentDidMount() {
    charityAPI({
      url: '/activities'
    }).then(({ data: activities }) => {
      this.setState({ activities });
    });
  }
  render() {
    <div className="activity ml-10 pl-10 relative text-center">
      <img className="mx-auto" src={this.state.url} alt="" />
      <h3 className="showcase-row__heading">{this.state.heading}</h3>
      <p>{this.state.text}</p>
    </div>;
  }
}
