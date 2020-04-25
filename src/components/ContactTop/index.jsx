import React, { Component } from 'react';

let fontAwsomeIcons = [
  {
    fontawesome_icons: 'fa-facebook-square',
    url: 'www.facebook.com',
  },
  {
    fontawesome_icons: 'fab fa-twitter',
    url: 'www.twitter.com'
  },
  {
    fontawesome_icons: 'fab fa-pinterest-p',
    url: 'www.pinterest.com'
  },
  {
    fontawesome_icons: 'fab fa-instagram',
    url: 'www.instgram.ocm'
  }
];

function getDataFunction() {
  return Promise.resolve({ data: fontAwsomeIcons });
}

class ContactTop extends Component {
  state = {
    soicilIconsList: [],
    loading: false,
    error: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    getDataFunction()
      .then(({ data }) => {
        this.setState({
          soicilIconsList: data,
          loading: false,
          error: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
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
      <section className="contact bg-c100 text-c000 py-4">
        <div className="container flex justify-between">
          <div className="welcome-text text-sm">
            Welcome to the best
            <span className="text-c300 underline italic">Lovims</span> charity
            platform
          </div>
          <div className="social flex text-sm">
            <div>Follow us:</div>
            { this.state.soicilIconsList.map(item => {
            return (
              <div key={item.fontawesome_icons} className="pl-6 hover:text-c000">
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
