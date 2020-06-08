import React from 'react';
import ArticleModel from '../../components/ArticleModel';
import { ArticlesSearch } from '../../components/ArticlesSearch';
import { RecentArticlesContainer } from '../../components/RecentArticles';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
export const ArticlePageContent = ({
  articleData,
  loading,
  error,
  articleSearchData
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
      <div className="col-span-12 lg:col-span-8">
        <ArticleModel data={articleData} loading={loading} error={error} />
      </div>
      <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
        <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
          <ArticlesSearch data={articleSearchData} />
        </div>
        <div className="sm:w-1/2 lg:w-full">
          <RecentArticlesContainer />
        </div>
      </aside>
    </div>
  );
};
