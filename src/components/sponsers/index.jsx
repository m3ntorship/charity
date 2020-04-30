import React from 'react';
import { charityAPI } from '../../clients';
import './styles.css';

class Sponsers extends React.Component {
  state = { urls: [], urlsError: false };
  componentDidMount() {
    charityAPI('/Sponsers')
      .then(res => {
        console.log(res);
        this.setState({
          urls: res.data
        });
      })
      .catch(error => {});
  }
  render() {
    return this.state.urls.map(({ _id, image }) => (
      <div className="sponser" key={_id}>
        <img src={image.url} alt="sponser" />
      </div>
    ));
  }
}
export default Sponsers;
