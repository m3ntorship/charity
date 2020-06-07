import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';
import { useCharityAPI } from '../../clients/index';
import { ArticlePageContent } from '../../components/ArticlePageContent';
import { useDispatch } from 'react-redux';
import {
  setArticlesData,
  setArticlesLoading,
  setArticlesError
} from '../../store/actions';
import { ArticlesListContainer } from './ArticlesList';

const ArticlesContainer = () => {
  //Fetching Data
  const { data, loading, dataError } = useCharityAPI('/pages?name=articles');
  const {
    data: articlesData,
    loading: articlesLoading,
    dataError: articlesError
  } = useCharityAPI('/articles');
  const dispatch = useDispatch();

  //Articles Actions
  dispatch(setArticlesData(articlesData));
  dispatch(setArticlesLoading(articlesLoading));
  dispatch(setArticlesError(articlesError));
  /*------------------
  Dispatching Actions
  --------------------*/
  return <Articles data={data} loading={loading} dataError={dataError} />;
};

const Articles = ({ data, loading, dataError }) => {
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
                <ArticlesListContainer />
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
