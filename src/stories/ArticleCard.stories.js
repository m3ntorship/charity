import React from 'react';
import ArticleCard from '../components/ArticleCard';

export default {
  title: 'ArticleCard',
  component: ArticleCard
};

const data = {
  articleImg: 'https://tailwindcss.com/img/card-top.jpg',
  title: 'Water Need in Africa',
  iconOne: 'fa fa-user-circle',
  iconTwo: 'fa fa-user-comment',
  spanOne: 'Admin',
  spanTwo: 'Comments'
};

export const ArticleCardItem = () => {
  return <ArticleCard data={data} />;
};
