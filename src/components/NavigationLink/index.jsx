import React from 'react';
import './style.css';

export default class NavigationLink extends React.Component {
  render() {
    return (
      <li className="text-center m-2 lg:m-4" >
        <a className="navigation__link" href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    );
  }
}
