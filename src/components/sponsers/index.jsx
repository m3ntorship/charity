import React from 'react';
import { charityAPI } from '../../clients';
import './styles.css';

class Sponsers extends React.Component {
  state = { urls: [], error: false, loading: true };
  componentDidMount() {
    charityAPI('/Sponsers')
      .then(res => {
        this.setState({
          urls: res.data,
          error: false,
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
    if (this.state.loading) {
      return <div>loading data </div>;
    }
    if (this.state.error) {
      return <div>we can not fetch data</div>;
    }
    return this.state.urls.map(({ _id, image }) => (
      <div className="sponser" key={_id}>
        <img src={image.url} alt="sponser" />
      </div>
    ));
  }
}
export default Sponsers;
