import React from 'react';
import { charityAPI } from '../../clients';
import NavigationLink from '../NavigationLink';
import './style.css';

export default class MainNavigation extends React.Component {
  state = {
    mainNavigation: [],
    secondaryLink: {},
    loading: true,
    error: false,
    errorMSG: ''
  };

  componentDidMount() {
    charityAPI('/main-navigation')
      .then(data => {
        this.setState({
          mainNavigation: data.data.Links,
          secondaryLink: data.data.secondary_link,
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
          <div className="container flex justify-between absolute top-0 z-10">
            <ul className="flex justify-around w-8/12 bg-c200 mr-2 items-center text-c000">
              {this.state.mainNavigation.map(linkObj => (
                <NavigationLink
                  title={linkObj.text}
                  url={linkObj.url}
                  key={linkObj.id}
                />
              ))}
            </ul>
            <button
              className="btn btn-md bg-c300 flex items-center justify-center"
              href={this.state.secondaryLink.url}
            >
              {this.state.secondaryLink.text}
            </button>
          </div>
        </nav>
      );
    }
  }
}
