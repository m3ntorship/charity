import React from 'react';
import { charityAPI } from '../../clients';
import './style.css';

export default class MainNavigation extends React.Component {
  state = { mainNavigation: {}, loading: true, error: false };

  componentDidMount() {
    charityAPI('/main-navigation')
      .then(({ data: mainNavigation }) => {
        this.setState({ mainNavigation });
      })
      .catch(error => {});
  }

  render() {
    return (
      <nav className="flex">
        <ul className="flex justify-around w-8/12 bg-c200 mr-2 items-center text-c000">
          <li>
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">Pages</a>
          </li>
          <li>
            <a href="#a">Donations</a>
          </li>
          <li>
            <a href="#a">Events</a>
          </li>
          <li>
            <a href="#a">News</a>
          </li>
          <li>
            <a href="#a">Contact</a>
          </li>
        </ul>
        <a
          className="btn-md w-2/6 bg-c300 flex items-center justify-center"
          href="#a"
        >
          Start Donating
        </a>
      </nav>
    );
  }
}
