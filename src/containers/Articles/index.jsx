import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';
import { ArticlePageContent } from '../../components/ArticlePageContent';
import { useSelector } from 'react-redux';
import { ArticlesListContainer } from './ArticlesList';

const ArticlesContainer = () => {
  const {
    data: pagesData,
    loading: pagesLoading,
    error: pagesError
  } = useSelector(store => store.pages);

  return (
    <Articles data={pagesData} loading={pagesLoading} error={pagesError} />
  );
};

const Articles = ({ data, loading, error, r }) => {
  if (error) {
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
    const [articlesPageData] = data.filter(
      pageData => pageData.name === 'articles'
    );
    return (
      <>
        <Banner data={articlesPageData} loading={loading} error={error} />
        <div className="container py-32">
          <Switch>
            <Route path="/articles/:id">
              <ArticlePageContent />
            </Route>
            <Route path="/articles">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 row-gap-8">
                <ArticlesListContainer />
              </div>
            </Route>
          </Switch>
        </div>
        <VolunteeringBanner
          data={articlesPageData}
          loading={loading}
          error={error}
        />
      </>
    );
  } else {
    return <div> Invalid Page Name </div>;
  }
};

export default ArticlesContainer;
