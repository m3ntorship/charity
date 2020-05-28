import React from 'react';
import { VolunteeringBanner } from '../../components/VolunteeringBanner';
import { Banner } from '../../components/ArticleBanner';

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
const NewsArticlesContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/pages?name=articles');

  return <NewsArticles data = {data} loading = {loading} dataError = {dataError} />;
};

const NewsArticles = ({data,loading,dataError}) => {
  if (loading) {
    return "Loading"
  }

  if (dataError) {
    return "error"
  }
  if(data){
    return (
      <>
        <Banner data={data} />
        {/* <div className="container py-32 grid grid-cols-1 md:grid-cols-12 md:gap-8 row-gap-8">
      </div> */}
        <VolunteeringBanner data={data} />
      </>
    );
  };
  
  }

export default NewsArticlesContainer;
