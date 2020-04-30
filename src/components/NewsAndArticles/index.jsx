import React, { Component } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';

class News extends Component {
  state = {
    data: {
      heading: {},
      description: '',
      link: {},
      articles: []
    }
  };

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    charityAPI('/news-and-articles')
      .then(({ data: { heading, description, link, home_articles } }) => {
        this.setState({
          data: {
            heading,
            description,
            link,
            articles: home_articles
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // Heading content
    const { heading_primary, heading_secondary } = this.state.data.heading;

    // Link content
    const { text, url } = this.state.data.link;

    // Articles content
    const articlesList = this.state.data.articles.map(
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
    );

    return (
      <section className="news font-body bg-c800 mb-20 md:mb-48 pt-18 pb-1 md:pb-40 relative">
        <div className="container">
          <div className="head-section grid grid-cols-1 md:grid-cols-12">
            <h2 className="text-c100 font-black md:col-span-5">
              {heading_primary}
              <span className="text-c200 font-thin border-b-2">
                {heading_secondary}
              </span>
            </h2>
            <p className="text-c600 text-lg md:mt-3 md:col-span-4 leading-relaxed">
              {this.state.data.description}
            </p>
            <div className="btn-div md:col-span-3">
              <a
                className="btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3 cursor-pointer"
                href={url}
              >
                {text}
              </a>
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

class Article extends Component {
  state = {
    isHovered: false
  };

  _toggleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
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
        <div onMouseEnter={this._toggleHover} onMouseLeave={this._toggleHover}>
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
