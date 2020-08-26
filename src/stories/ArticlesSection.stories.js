import React from 'react';
import ArticlesSection from '../components/ArticlesSection';

export default {
  title: 'ArticlesSection',
  component: ArticlesSection
};

const data = {
  sectionTitle: 'New &',
  subTitle: 'Articles',
  sectionDesc:
    'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  btnText: 'View All Posts',
  articlesData: [{}]
};

export const ArticlesSectionItem = () => {
  return <ArticlesSection data={data} />;
};
