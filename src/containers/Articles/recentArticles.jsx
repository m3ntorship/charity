import React from 'react';
import { useSelector } from 'react-redux';
import { RecentArticles } from '../../components/RecentArticles';

const RecentArticlesContainer = () => {
  const { data, loading, error } = useSelector(store => store.articles);
  if (data) {
    var recentData = data.slice(0, 3);
  }
  return <RecentArticles data={recentData} loading={loading} error={error} />;
};

export { RecentArticles, RecentArticlesContainer };
