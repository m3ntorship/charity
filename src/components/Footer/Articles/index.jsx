import React from 'react';
import { parseISO, format } from 'date-fns';
import './style.css';
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
        <a
          href={article.link.url}
          key={article.id}
          className="flex flex-col flex-grow my-2"
        >
          <article className="flex">
            <img
              className="news__image_footer"
              width="72"
              height="72"
              src={article.thumbnail.url}
              alt={article.thumbnail.alternativeText}
            />
            <div className="pl-4 flex flex-col justify-between">
              <p className="text-c300 text-xs">
                {formattedDate.day}-{formattedDate.month}-{formattedDate.year}
              </p>
              <p>{article.description}</p>
            </div>
          </article>
        </a>
      );
    });
    return (
      <div className="footer-card flex flex-col lg:my-0 my-6">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        {articles}
      </div>
    );
  }
}
