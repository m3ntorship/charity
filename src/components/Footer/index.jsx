import React from 'react';
import { charityAPI } from '../../clients';
import Links from './links';
import Articles from './articles';
import About from './about';
import Newsletter from './newsletter';

export default class Footer extends React.Component {
  state = {
    data: {},
    loading: true,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    this._getData();
  }
  _getData = () => {
    this.setState({ loading: true });
    charityAPI('/footer')
      .then(({ data }) => {
        this.setState({
          data: data,
          loading: false,
          error: false
        });
      })
      .catch(error =>
        this.setState({
          error: true,
          loading: false,
          errorMessage: " Couldn't fetch data"
        })
      );
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return (
        <div>
          {this.state.errorMessage},{' '}
          <a href="#/" onClick={this._getData} className="text-c200">
            retry?
          </a>
        </div>
      );
    } else {
      return (
        <footer className="footer bg-c100 text-c700">
          <div className="container w-9/12 lg:grid grid-cols-4 gap-4 py-16 text-sm grid-cols-2 font-hairline">
            <About
              title={this.state.data.About_title}
              description={this.state.data.about_description}
              url={this.state.data.about_button.url}
              cta={this.state.data.about_button.text}
            />
            <Articles
              title={this.state.data.news_title}
              articles={this.state.data.articles}
            />
            <Links title="Links" links={this.state.data.links} />
            <Newsletter
              title={this.state.data.newsletter_title}
              description={this.state.data.newsletter_description}
            />
          </div>

          <div>
            <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
              {this.state.data.Disclaimer}
            </p>
          </div>
        </footer>
      );
    }
  }
}
