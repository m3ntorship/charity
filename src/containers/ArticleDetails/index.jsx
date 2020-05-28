import React from 'react';
import ArticleModel from '../../components/ArticleDetails';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';
import { ArticlesSearch } from '../../components/ArticlesSearch';
import { RecentArticlesContainer } from '../../components/RecentArticles';
import { useCharityAPI } from '../../clients/index';
const volunterringData = {
  description: 'Best Way ot Make a Difference in the Lives of Others',
  button: {
    title: 'Become Volunteer',
    link: '#'
  }
};
const articleData = {
  id: '1',
  headline: 'Water Need in Africa',
  user_type: 'Admin',
  comments: ['lorem', 'ipsum'],
  body_text: [
    {
      id: '12',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    },
    {
      id: '123',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    },
    {
      id: '1234',
      text:
        'venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisltristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolorsemper, non porttitor nisl fermentum.'
    }
  ],

  img_primary: {
    url:
      'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
  },
  img_secondary: [
    {
      id: '1',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    },
    {
      id: '2',
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/children_5a459dcc62.jpeg'
    }
  ],
  conclusion_text:
    'Lorem ipsum dolor sit amet, consectetur notted adipisi cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod.'
};
const articleSearchData = {
  title: 'Find Article'
};

export const ArticlePageContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/pages?name=articles');

  return <ArticlePage data={data} loading={loading} dataEror={dataError} />;
};

export const ArticlePage = ({ data, loading, dataError }) => (
  <div>
    <Banner data={data} loading={loading} error={dataError} />
    <div className="container py-32 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
      <div className="col-span-12 lg:col-span-8">
        <ArticleModel data={articleData} />
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
    <VolunteeringBanner data={volunterringData} />
  </div>
);
