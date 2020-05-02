import React, { Component } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading/index';

class News extends Component {
  state = {
    data: {
      heading: {},
      description: '',
      link: {},
      articles: []
    },
    loading: false,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    this.setState({ loading: true, error: false });

    charityAPI('/news-and-articles')
      .then(({ data: { heading, description, link, home_articles } }) => {
        this.setState({
          data: {
            heading,
            description,
            link,
            articles: home_articles
          },
          loading: false,
          error: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: 'An Error occurred while getting the data, '
        });
      });
  };

  render() {
    // Heading content
    const { heading_primary, heading_secondary } = this.state.data.heading;

    // Link content
    const { text, url } = this.state.data.link;

    // Articles content
    const { articles } = this.state.data;
    //debugger;
    const articlesList = articles ? (
      articles.map(
        ({
          title,
          link: { text, url: linkURL },
          image: { url: imageURL },
          _id
        }) => (
          <Article
            title={title}
            linkText={text}
            linkURL={linkURL}
            imageURL={imageURL}
            key={_id}
          />
        )
      )
    ) : (
      <div>Sorry, couldn't find the articles</div>
    );

    if (this.state.loading) {
      return <div>loading data.....</div>;
    } else if (this.state.error) {
      return (
        <div>
          <p>
            {this.state.errorMessage}
            <span className="cursor-pointer text-c200" onClick={this._getData}>
              Retry?
            </span>
          </p>
        </div>
      );
    } else {
      return (
        <section className="news font-body bg-c800 mb-20 md:mb-48 pt-18 pb-1 md:pb-40 relative">
          <div className="container">
            <div className="head-section grid grid-cols-1 md:grid-cols-12">
              <Heading
                primaryText={heading_primary + ' '}
                secondaryText={heading_secondary}
                primaryTextColor="dark"
                primaryClassName="md:col-span-5"
              />

              <p className="text-c600 text-lg md:mt-3 md:col-span-4 leading-relaxed">
                {this.state.data.description}
              </p>
              <div className="btn-div md:col-span-3">
                <button className="btn btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3 cursor-pointer">
                  <a className="news__btn" href={url}>
                    {text}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="container relative">
            <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:absolute w-full">
              {articlesList}
            </div>
          </div>
        </section>
      );
    }
  }
}

class Article extends Component {
  state = {
    isHovered: false
  };

  _setHover = () => {
    this.setState({
      isHovered: true
    });
  };

  _resetHover = () => {
    this.setState({
      isHovered: false
    });
  };

  render() {
    const { title, linkText, linkURL, imageURL } = this.props;
    return (
      <div className="article">
        <img
          className="article__image"
          src={imageURL}
          alt="article thumbnail"
        />
        <div onMouseEnter={this._setHover} onMouseLeave={this._resetHover}>
          {this.state.isHovered ? (
            <a
              className="block article-info transform -translate-y-1/2 bg-c300 text-c100 text-center shadow-lg spicial-info cursor-pointer"
              href={linkURL}
            >
              <i className="fas fa-long-arrow-alt-right font-light"></i>
              {linkText}
            </a>
          ) : (
            <div className="article-info transform -translate-y-1/2 bg-c000 py-6 text-center shadow-lg">
              <span className="text-c600 mx-2">
                <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
              </span>
              <span className="text-c600 mx-2">
                <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
              </span>
              <h4 className="text-c100 font-bold">{title}</h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default News;