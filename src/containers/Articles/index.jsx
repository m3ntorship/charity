import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';
import { useCharityAPI } from '../../clients/index';
import { ArticlesList } from '../../components/NewsAndArticles';
import { ArticlePageContent } from '../../components/ArticlePageContent';

const ArticlesContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/pages?name=articles');
  const {
    data: articlesData,
    loading: articlesLoading,
    dataError: articlesError
  } = useCharityAPI('/articles');
  return (
    <Articles
      data={data}
      loading={loading}
      dataError={dataError}
      articlesData={articlesData}
      articlesLoading={articlesLoading}
      articlesError={articlesError}
    />
  );
};

const Articles = ({
  data,
  loading,
  dataError,
  articlesData,
  articlesLoading,
  articlesError
}) => {
  if (dataError) {
    return <div> Couldin't Fetch articles data </div>;
  }

  if (loading) {
    return (
      <div>
        <Banner loading={loading} />
        <VolunteeringBanner loading={loading} />
      </div>
    );
  }

  if (data.length > 0) {
    return (
      <>
        <Banner data={data} loading={loading} error={dataError} />
        <div className="container py-32">
          <Switch>
            <Route path="/articles/:id">
              <ArticlePageContent />
            </Route>
            <Route path="/articles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
                <ArticlesList
                  articles={articlesData}
                  loading={articlesLoading}
                  error={articlesError}
                />
              </div>
            </Route>
          </Switch>
        </div>
        <VolunteeringBanner data={data} loading={loading} error={dataError} />
      </>
    );
  } else {
    return <div> Invalid Page Name </div>;
  }
};

export default ArticlesContainer;
