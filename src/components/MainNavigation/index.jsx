import React from 'react';
import { charityAPI } from '../../clients';
import NavigationLink from '../NavigationLink';
import Logo from '../Logo';
import './style.css';

export default class MainNavigation extends React.Component {
  state = {
    mainNavigation: [],
    secondaryLink: {},
    loading: true,
    error: false,
    errorMSG: '',
    isOpen: ''
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
      return 'open-nav';
    }
    return '';
  }

  render() {
    let menuToggle = this.toggleOpenNavClass();
    if (this.state.error) {
      return <div>{this.state.errorMSG}</div>;
    } else {
      return (
        <nav className={`${menuToggle} flex  justify-center`}>
          <div className=" navbar__inner flex flex-col md:block absolute top-0 z-10 container">
            <div className="md:hidden navbar__logo__wrapper flex justify-between items-center bg-c200 ">
              <Logo />
              <button
                onClick={this.onHamburgerBtnClick}
                className="md:hidden menu_toggler text-c000 p-4"
              >
                {this.state.isOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </button>
            </div>
            <div className="menu-navbar-wrapper flex flex-col md:flex-row justify-between">
              <ul className="nav__ul mr-0 sm:w-full   flex flex-col  md:items-center md:flex-row md:justify-around bg-c200 md:mr-2  text-c000">
                {this.state.mainNavigation.map(linkObj => (
                  <NavigationLink
                    title={linkObj.text}
                    url={linkObj.url}
                    key={linkObj.id}
                  />
                ))}
              </ul>
              <button
                className="start__donantion__btn  btn btn- bg-c300"
                href={this.state.secondaryLink.url}
              >
                {this.state.secondaryLink.text}
              </button>
            </div>
          </div>
        </nav>
      );
    }
  }
}
