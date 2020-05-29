import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ArticleModel from '../components/ArticleModel';

export default {
  title: 'ArticleModel',
  component: ArticleModel,
  decorators: [withKnobs]
};

const data = [
  {
    image_main: [
      {
        _id: '5eceb207fcb36e003cc85f53',
        name: 'causes-card1_eb5234d0f2_a67e8efb99',
        alternativeText: '',
        caption: '',
        hash: 'causes-card1_eb5234d0f2_a67e8efb99_a5df903259',
        ext: '.jpeg',
        mime: 'image/jpeg',
        size: 19.53,
        width: 310,
        height: 310,
        url:
          'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99_a5df903259.jpeg',
        formats: {
          thumbnail: {
            hash: 'thumbnail_causes-card1_eb5234d0f2_a67e8efb99_a5df903259',
            ext: '.jpeg',
            mime: 'image/jpeg',
            width: 156,
            height: 156,
            size: 6.88,
            url:
              'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card1_eb5234d0f2_a67e8efb99_a5df903259.jpeg'
          }
        },
        provider: 'aws-s3',
        related: [
          '5ed0f3498ea9e7003ca08a29',
          '5ed0f3498ea9e7003ca08a29',
          '5ed0f37a8ea9e7003ca08a2e',
          '5ed0f37a8ea9e7003ca08a2e',
          '5ed0f3b08ea9e7003ca08a33',
          '5ed0f3b08ea9e7003ca08a33',
          '5ed0f3da8ea9e7003ca08a38',
          '5ed0f3da8ea9e7003ca08a38',
          '5ed0f3ff8ea9e7003ca08a3d',
          '5ed0f3ff8ea9e7003ca08a3d',
          '5ed0f4188ea9e7003ca08a42',
          '5ed0f4188ea9e7003ca08a42',
          '5eaa1b013482057530be1bef',
          '5eaaf887d628f6001779b7c6',
          '5eaaf8c8d628f6001779b7cb'
        ],
        createdAt: '2020-05-27T18:31:35.051Z',
        updatedAt: '2020-05-29T12:59:30.022Z',
        __v: 0,
        id: '5eceb207fcb36e003cc85f53'
      }
    ],
    _id: '5eaa1b013482057530be1bef',
    description: 'A Clean Water Gives More Good Taste',
    date: '2020-04-15T10:00:00.000Z',
    title: 'Water Need in Africa',
    link: {
      _id: '5eaa1b013482057530be1bf0',
      text: 'Read more',
      url: '#readmore',
      createdAt: '2020-04-30T00:25:37.698Z',
      updatedAt: '2020-05-29T18:04:09.430Z',
      __v: 0,
      id: '5eaa1b013482057530be1bf0'
    },
    createdAt: '2020-04-30T00:25:37.664Z',
    updatedAt: '2020-05-29T18:04:10.596Z',
    __v: 1,
    thumbnail: {
      _id: '5eb89b9d0e79a21caf96f717',
      name: 'causes-card1_eb5234d0f2',
      alternativeText: '',
      caption: '',
      hash: 'causes-card1_eb5234d0f2_a67e8efb99',
      ext: '.jpeg',
      mime: 'image/jpeg',
      size: 19.53,
      width: 310,
      height: 310,
      url:
        'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/causes-card1_eb5234d0f2_a67e8efb99.jpeg',
      formats: {
        thumbnail: {
          hash: 'thumbnail_causes-card1_eb5234d0f2_a67e8efb99',
          ext: '.jpeg',
          mime: 'image/jpeg',
          width: 156,
          height: 156,
          size: 6.88,
          url:
            'https://charity-cms-dev.s3.eu-central-1.amazonaws.com/thumbnail_causes-card1_eb5234d0f2_a67e8efb99.jpeg'
        }
      },
      provider: 'aws-s3',
      related: [
        '5eaaf8c8d628f6001779b7cb',
        '5ea9e1fb0d90be0017d7af64',
        '5ea9e1fb0d90be0017d7af63',
        '5ea9e1fb0d90be0017d7af62',
        '5ea9e1fb0d90be0017d7af65',
        '5ea9f29c0d90be0017d7af83',
        '5eaa1b013482057530be1bef',
        '5eaaf887d628f6001779b7c6',
        '5eaaf8c8d628f6001779b7cb'
      ],
      createdAt: '2020-05-11T00:26:05.100Z',
      updatedAt: '2020-05-22T21:48:52.220Z',
      __v: 0,
      id: '5eb89b9d0e79a21caf96f717'
    },
    body:
      '### Hello You Clicked on the first Article from the last page\n\nHi everyone now we test the body of the article component\nthis will be used in the ``` ArticleModel ``` Component To test if the markdown works well or not\nNow I\'m going to add two photos Now To know how it\'s work\n\n#### and here is some lorem ipsum text\n\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\n"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\n\n#### Here are the Two photos\n\n![causes](https://charity-cms-dev.s3.eu-central-1.amazonaws.com/O71WJX0-min_4df49ba6c3.jpeg)\n![upcoming_events](https://charity-cms-dev.s3.eu-central-1.amazonaws.com/1804-min_b4165a83a5.jpeg)\n\nnow I have finished adding photos and will add some lorem ipsum text\n\n"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"',
    author: {
      confirmed: true,
      blocked: false,
      _id: '5eaab16b56cefb00173f039d',
      username: 'admin',
      email: 'charity_admin@example.com',
      provider: 'local',
      createdAt: '2020-04-30T11:07:23.724Z',
      updatedAt: '2020-05-22T22:10:08.259Z',
      __v: 0,
      role: '5ea4b54b6086a613ba7ef7ea',
      article: '5eaa1b013482057530be1bef',
      id: '5eaab16b56cefb00173f039d'
    },
    id: '5eaa1b013482057530be1bef'
  }
];

export const ArticlePage = () => {
  return (
    <ArticleModel
      data={data}
      loading={boolean('loading', false)}
      error={boolean('error', false)}
    />
  );
};
