import React from 'react';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';
import { ArticlesList } from '../../components/NewsAndArticles';

import { useCharityAPI } from '../../clients/index';
const NewsArticlesContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/pages?name=articles');
  const { data:articles} = useCharityAPI('/articles');
  return <NewsArticles articles = {articles} data={data} loading={loading} dataError={dataError} />;
};

const NewsArticles = ({ data, loading, dataError, articles }) => {
  if (loading) {
    return 'Loading';
  }

  if (dataError) {
    return 'error';
  }
  if (data && articles) {
    return (
      <>
        <Banner data={data} />
        <div className="container py-32 grid grid-cols-1 lg:grid-cols-3 md:gap-8 row-gap-8">
          <ArticlesList articles={articles} />
          <ArticlesList articles={articles} />
          <ArticlesList articles={articles} />
        </div>
        <VolunteeringBanner data={data} />
      </>
    );
  }
};

export default NewsArticlesContainer;
