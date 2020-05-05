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
      <section className="contact bg-c100 py-4">
        <div className="container flex justify-between">
          <div className="welcome-text text-sm">
            Welcome to the best
            <span className="text-c300 underline italic">Lovims</span> charity
            platform
          </div>
          <div className="social flex text-sm hover:text-c000">
            <div>Follow us:</div>
            {this.state.soicilIconsList.map(item => {
              return (
                <div key={item.id} className="pl-6">
                  <a href={item.url}>
                    <i className={item.fontawesome_icons}></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTop;
