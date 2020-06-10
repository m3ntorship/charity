import React from 'react';
import { useSelector } from 'react-redux';
import ArticleModel from '../../components/ArticleModel';

export const ArticleModelContainer = () => {
  const { data, loading, error } = useSelector(store => store.articles);
  return <ArticleModel data={data} loading={loading} error={error} />;
};
