import React from 'react';
import { ArticlesSearch } from '../../components/ArticlesSearch';
import { ArticleModelContainer } from '../../containers/Articles/articleModel';
import { RecentArticlesContainer } from '../../containers/Articles/recentArticles';

export const ArticlePageContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
      <div className="col-span-12 lg:col-span-8">
        <ArticleModelContainer />
      </div>
      <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
        <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
          <ArticlesSearch data={{ title: 'Find Article' }} />
        </div>
        <div className="sm:w-1/2 lg:w-full">
          <RecentArticlesContainer />
        </div>
      </aside>
    </div>
  );
};
