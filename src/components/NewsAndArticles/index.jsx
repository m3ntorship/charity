import React, { Component } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';

class News extends Component {
  state = {
    data: {
      heading: {},
      link: {},
      articles: []
    }
  };

  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    charityAPI('/news-and-articles')
      .then(({ data: { heading, link, home_articles } }) => {
        this.setState({
          data: {
            heading,
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
    return (
      <section className="news font-body bg-c800 mb-20 md:mb-48 pt-18 pb-1 md:pb-40 relative">
        <div className="container">
          <div className="head-section grid grid-cols-1 md:grid-cols-12">
            <h2 className="text-c100 font-black md:col-span-5">
              News &
              <span className="text-c200 font-thin border-b-2">Articles</span>
            </h2>
            <p className="text-c600 text-lg md:mt-3 md:col-span-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quo eveniet recusandae molestiae reiciendis a sequi sapiente
            </p>
            <div className="btn-div md:col-span-3">
              <button className="btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3">
                View All Posts
              </button>
            </div>
          </div>
        </div>
        <div className="container relative">
          <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:absolute w-full">
            <Article />

            <div className="article">
              <img
                src="https://globaladvocacyafrica.org/wp-content/uploads/2018/12/AFRICAN-CHILD-2-960x640.jpg"
                alt="Africa Childres "
              />
              <div className="article-info transform -translate-y-1/2 bg-c300 text-c100 text-center shadow-lg spicial-info cursor-pointer">
                <i className="fas fa-long-arrow-alt-right font-light"></i>
                Read More
              </div>
            </div>

            <div className="article">
              <img
                src="https://violenceagainstchildren.un.org/sites/violenceagainstchildren.un.org/files/styles/panopoly_image_full/public/news_articles/africaaidsfree.jpg?itok=o18cimXE"
                alt="Africa Childres "
              />
              <div className="article-info transform -translate-y-1/2 bg-c000 py-6 text-center shadow-lg">
                <span className="text-c600 mx-2">
                  <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
                </span>
                <span className="text-c600 mx-2">
                  <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
                </span>
                <h4 className="text-c100 font-bold">Water Need in Africa</h4>
              </div>
            </div>
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
    return (
      <div className="article">
        <img
          src="https://www.iapb.org/wp-content/uploads/30116455362_ed5a11aa91_o_0.jpg"
          alt="Africa Childres "
        />
        <div onMouseEnter={this._toggleHover} onMouseLeave={this._toggleHover}>
          {this.state.isHovered ? (
            <div className="article-info transform -translate-y-1/2 bg-c300 text-c100 text-center shadow-lg spicial-info cursor-pointer">
              <i className="fas fa-long-arrow-alt-right font-light"></i>
              Read More
            </div>
          ) : (
            <div className="article-info transform -translate-y-1/2 bg-c000 py-6 text-center shadow-lg">
              <span className="text-c600 mx-2">
                <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
              </span>
              <span className="text-c600 mx-2">
                <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
              </span>
              <h4 className="text-c100 font-bold">Water Need in Africa</h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default News;
