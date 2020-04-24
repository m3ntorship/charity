import React from 'react';
import { charityAPI } from '../../clients';

export default class Logo extends React.Component {
  state = { logo: '', logoError: false };
  componentDidMount() {
    charityAPI({
      url: '/logo'
    })
      .then(
        ({
          data: {
            logo: { url: logo }
          }
        }) => {
          this.setState({ logo, logoError: false });
        }
      )
      .catch(error => {
        this.setState({ logoError: true });
      });
  }
  render() {
    return this.state.logoError ? (
      <div className="error">
        Couldn't fetch logo from backbackend, please contact the developer
      </div>
    ) : (
      <div className="logo">
        <img src={this.state.logo} alt="logo" />
      </div>
    );
  }
}
