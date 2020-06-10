import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleModel } from '../../components/ArticleModel';

export const ArticleModelContainer = () => {
  const { data, loading, error } = useSelector(store => store.articles);
  return <ArticleModel data={articleData} loading={loading} error={error} />;
};
