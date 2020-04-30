import React from 'react';
import { charityAPI } from '../../clients';
import NavigationLink from '../NavigationLink';
import './style.css';

export default class MainNavigation extends React.Component {
  state = { mainNavigation: [], loading: true, error: false, errorMSG: '' };

  componentDidMount() {
    charityAPI('/main-navigation')
      .then(({ data: mainNavigation }) => {
        this.setState({ mainNavigation });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMSG: 'Could not fetch the required data!'
        });
      });
  }

  render() {
    if (this.state.error && !this.state.loading) {
      return <div>{this.state.errorMSG}</div>;
    } else {
      return (
        <nav className="flex">
          <ul className="flex justify-around w-8/12 bg-c200 mr-2 items-center text-c000">
            {this.state.mainNavigation.map(linkObj => (
              <NavigationLink title={linkObj.title} url={linkObj.url} />
            ))}
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
}
