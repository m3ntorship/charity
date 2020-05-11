import React, { useState, useEffect } from 'react';
import './styles.css';
import { charityAPI } from '../../clients';
import Heading from '../Heading/index';
import ContentLoader from 'react-content-loader';

const News = () => {
  const [data, setData] = useState({
    heading: {},
    description: '',
    link: {},
    articles: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = '';

  useEffect(() => {
    _getData();
  }, []);

  const _getData = () => {
    setLoading(true);
    setError(false);

    charityAPI('/news-and-articles')
      .then(({ data: { heading, description, link, home_articles } }) => {
        setData({
          heading,
          description,
          link,
          articles: home_articles
        });
        setLoading(false);
        setError(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        setErrorMessage('An Error occurred while getting the data, ');
      });
  };

  // Heading content
  const { heading_primary, heading_secondary } = data.heading;

  // Link content
  const { text, url } = data.link;

  // Articles content
  const { articles } = data;
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

  if (loading) {
    return (
      <section className="news font-body bg-c800 mb-20 md:mb-64 pt-18 pb-1 md:pb-48 relative">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <HeaderLoader />
            <p className=" news_description text-c600 text-base leading-loose">
              <ParagraphLoader />
            </p>
            <div className="btn-div">
              <BtnLoader />
            </div>
          </div>
          <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:gap-4 md:absolute w-full overflow-hidden ">
            <ArticleLoader />
            <ArticleLoader />
            <ArticleLoader />
          </div>
        </div>
      </section>
    );
  } else if (error) {
    return (
      <div>
        <p>
          {errorMessage}
          <span className="cursor-pointer text-c200" onClick={this._getData}>
            Retry?
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <section className="news font-body bg-c800 mb-20 md:mb-64 pt-18 pb-1 md:pb-48 relative">
        <div className="container">
          <div className="head-section text-center md:text-left grid grid-cols-1 md:grid-cols-12 ">
            <Heading
              primaryText={heading_primary + ' '}
              secondaryText={heading_secondary}
              primaryTextColor="dark"
              primaryClassName="md:col-span-4 text-center"
            />

            <p className=" news_description text-c600  md:col-span-5 text-base leading-loose">
              {data.description}
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
          <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:gap-4 md:absolute w-full sm:grid-cols-2 ">
            {articlesList}
          </div>
        </div>
      </section>
    );
  }
};

const Article = ({ title, linkText, linkURL, imageURL }) => {
  return (
    <div className="article relative">
      <img className="article__image" src={imageURL} alt="article thumbnail" />
      <div className="article-info transform -translate-y-1/2 bg-c000 text-center shadow-lg">
        <div className="content-info">
          <span className="text-c600 mx-2">
            <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
          </span>
          <span className="text-c600 mx-2">
            <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
          </span>
          <h4 className="text-c100 font-bold">{title}</h4>
        </div>
        <div className="block text-c100 text-center spicial-info cursor-pointer">
          <a
            href={linkURL}
            className="w-full h-full flex justify-center items-center"
          >
            <i className="fas fa-long-arrow-alt-right"></i>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

const HeaderLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={100}
    viewBox="0 0 250 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="10" y="37" rx="2" ry="2" width="250" height="50" />
  </ContentLoader>
);

const ParagraphLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="10" y="32" rx="2" ry="2" width="400" height="10" />
    <rect x="10" y="50" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="70" rx="2" ry="2" width="350" height="10" />
  </ContentLoader>
);

const BtnLoader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={100}
    viewBox="0 0 200 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
    className="md:float-right"
  >
    <rect x="10" y="37" rx="2" ry="2" width="150" height="50" />
  </ContentLoader>
);

const ArticleLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
  >
    <rect x="14" y="32" rx="2" ry="2" width="380" height="238" />
  </ContentLoader>
);

export default News;
