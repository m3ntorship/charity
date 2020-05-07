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
    errorMSG: '',
    isOpen: false
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
  onHamburgerBtnClick = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });

  };

  toggleOpenNavClass() {
    if (this.state.isOpen) {
      return "open-nav"
    }
    return '';
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.errorMSG}</div>;
    } else {
      let menuToggle = this.toggleOpenNavClass()
      return (
        <div className = {`flex ${menuToggle}`}>
          <nav className=" main-navbar opacity-0 absolute right-0 left-0  lg:opacity-100 lg:flex lg:justify-center ">
            <div className="lg:flex lg:justify-between lg:absolute lg:top-0 lg:z-10">
              <ul className="nav__ul bg-c200  text-c000 p-16 w-full md:p-4 lg:flex lg:justify-around  lg:mr-2 lg:items-center  ">
                {this.state.mainNavigation.map(linkObj => (
                  <NavigationLink
                    title={linkObj.text}
                    url={linkObj.url}
                    key={linkObj.id}
                  />
                ))}
              </ul>
              <button
                className="btn btn-md navbar-donation-btn  w-full bg-c300 lg:flex lg:items-center lg:justify-center"
                href={this.state.secondaryLink.url}
              >
                {this.state.secondaryLink.text}
              </button>
            </div>
          </nav>
          <button
            value={this.state.isOpen}
            className="navbar-hamburger absolute top-0 text-lg text-c000 m-4 p-4 lg:hidden "
            onClick={this.onHamburgerBtnClick}
          > 
            {this.state.isOpen ? "x" :  '='}
          </button>
        </div>
      );
    }
  }
}
