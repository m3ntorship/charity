import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticlePageContent } from '../../components/ArticlePageContent';

export const ArticlePageContentContainer = () => {
  const articleSearchData = {
    title: 'Find Article'
  };
  const { id } = useParams();
  const { data, loading, error } = useSelector(store => store.articles);
  const articleData = data.find(article => article.id === id);
  return (
    <ArticlePageContent
      articleData={articleData}
      loading={loading}
      error={error}
      articleSearchData={articleSearchData}
    />
  );
};
