import React from 'react';
import { useSelector } from 'react-redux';
import { ArticlesList } from '../../components/NewsAndArticles';

export const ArticlesListContainer = () => {
  const { data, loading, error } = useSelector(store => store.articles);
  return <ArticlesList articles={data} loading={loading} error={error} />;
};
