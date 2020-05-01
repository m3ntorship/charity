import React from 'react';
import { charityAPI } from '../../clients';
import NavigationLink from '../NavigationLink';
import './style.css';

export default class MainNavigation extends React.Component {
  state = {
    mainNavigation: [],
    loading: true,
    error: false,
    errorMSG: ''
  };

  componentDidMount() {
    charityAPI('/main-navigation')
      .then(data => {
        this.setState({
          mainNavigation: data.data.Links,
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

  render() {
    if (this.state.error) {
      return <div>{this.state.errorMSG}</div>;
    } else {
      return (
        <nav className="flex">
          <ul className="flex justify-around w-8/12 bg-c200 mr-2 items-center text-c000">
            {this.state.mainNavigation.map(linkObj => (
              <NavigationLink
                title={linkObj.text}
                url={linkObj.url}
                key={linkObj.id}
              />
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
