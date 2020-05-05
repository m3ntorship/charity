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
    return (
      <section className="sponsors p-0 border-t sponser-border__top">
        <div className="container">
          <div className="flex justify-between mx-auto my-32 flex-wrap">
            {this.state.urls.map(({ _id, image }) => (
              <div className="sponser__logo" key={_id}>
                <img src={image.url} alt="sponser" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Sponsers;
