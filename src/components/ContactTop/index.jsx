import React, { Component } from 'react';
import { charityAPI } from '../../clients/charity';
import './style.scss';
class ContactTop extends Component {
  state = {
    soicilIconsList: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    charityAPI('/socialmedias')
      .then(({ data: soicilIconsList }) => {
        this.setState({
          soicilIconsList,
          loading: false,
          error: false
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
    if (this.state.loading) {
      return <div>loading data </div>;
    }

    if (this.state.error) {
      return <div>we can not fetch data</div>;
    }

    return (
      <section className="contact-top px-8 bg-c100 py-4 hidden md:block">
        <div className="container hidden md:flex justify-between">
          <div className="welcome-text text-sm">
            Welcome to the best
            <span className="text-c300 underline italic">Lovims</span> charity
            platform
          </div>
          <div className="social flex text-sm">
            <div>Follow us:</div>
            <div className="ml-6">
              <ul className="inline-block ">
                {this.state.soicilIconsList.map(item => {
                  return (
                    <li key={item.id} className="inline px-3 hover:text-c000">
                      <a href={item.url}>
                        <i className={item.fontawesome_icons}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTop;
