import React from 'react';
//import { charityAPI } from '../../clients';
//import sponserImg from './img/envato-dark.png';
const charityAPI = () =>
  Promise.resolve({
    data: [
      { url: require('./img/envato-dark.png') },
      { url: require('./img/envato-dark.png') },
      { url: require('./img/envato-dark.png') },
      { url: require('./img/envato-dark.png') }
    ]
  });
class Sponsers extends React.Component {
  state = { urls: [], urlsError: false };
  componentDidMount() {
    charityAPI('/urls')
      .then(({ data: urls }) => {
        this.setState({ urls });
      })
      .catch(error => {});
  }
  render() {
    return this.state.urls.map(({ url }) => (
      <div className="sponser">
        <img src={url} alt="sponser" />
      </div>
    ));
  }
}
export default Sponsers;
