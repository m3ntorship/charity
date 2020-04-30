import React from 'react';
import './style.css';

export default class NavigationLink extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    );
  }
}
