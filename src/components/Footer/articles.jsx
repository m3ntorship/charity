import React from 'react';
import { parseISO, format } from 'date-fns';
export default class Articles extends React.Component {
  getDate(myDate) {
    const theDate = parseISO(myDate);

    return {
      time: format(theDate, 'hh:mm a').toLowerCase(),
      day: format(theDate, 'dd'),
      month: format(theDate, 'MMM'),
      year: format(theDate, 'yyyy')
    };
  }

  render() {
    const articles = this.props.articles.map(article => {
      const formattedDate = this.getDate(article.date);
      return (
        <div className="flex flex-col flex-grow">
          <a className="" href={article.link.url}>
            <div className="flex">
              <div className="news__image-container">
                <img
                  width="72"
                  height="72"
                  src={article.image.url}
                  alt={article.image.alternativeText}
                />
              </div>
              <div className="pl-4 flex flex-col justify-between">
                <p className="text-c300 text-xs">
                  {formattedDate.day}-{formattedDate.month}-{formattedDate.year}
                </p>
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
