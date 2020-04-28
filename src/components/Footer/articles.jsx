import React from 'react';

export default class Articles extends React.Component {
  render() {
    const articles = this.props.articles.map(article => {
      return (
        <div className="flex flex-col flex-grow">
          <a className="hover:text-c000 mb-8" href={article.link}>
            <div className="flex">
              <div className="news__image-container">
                <img
                  width="72"
                  height="72"
                  src={article.img}
                  alt={article.description}
                />
              </div>
              <div className="pl-4 flex flex-col justify-between">
                <p className="text-c300 text-xs">{article.date}</p>
                <p>{article.description}</p>
              </div>
            </div>
          </a>
        </div>
      );
    });
    return (
      <div className="footer-card flex flex-col">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        {articles}
      </div>
    );
  }
}
