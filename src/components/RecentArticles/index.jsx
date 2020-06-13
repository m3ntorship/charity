import React from 'react';
import useMedia from '../../Helpers/useMedia';
import { Loader, ChevronLoader, ListItemLoader } from './myLoader';
import { Widget } from '../shared/Widget';
import { ListItemWithThumbnail } from '../shared/ListItemWithThumbnail';

const RecentArticles = ({ data, loading, error }) => {
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  if (error) {
    return "Couldn't fetch data";
  }

  if (loading) {
    let mobileLoaders = [];
    for (let i = 0; i < 3; i++) {
      mobileLoaders.push(
        <div
          className=" flex justify-between items-center w-full px-10"
          key={i}
        >
          <div className=" flex py-5 w-full">
            <ListItemLoader />
          </div>
        </div>
      );
    }
    return (
      <div className=" w-full h-full flex flex-col">
        <div className="px-10 flex w-full">
          <div className=" flex justify-between items-center w-full">
            <div className=" flex py-5">
              <Loader />
            </div>
            <div className="flex">
              <ChevronLoader />
            </div>
          </div>
        </div>
        {!isMobile && mobileLoaders}
      </div>
    );
  }
  if (data) {
    const title = 'Recent Articles';
    return (
      <Widget title={title}>
        <div className="pt-5 pb-10">
          {data.map(articleData => {
            return (
              <ListItemWithThumbnail data={articleData} key={articleData.id} />
            );
          })}
        </div>
      </Widget>
    );
  }
};

export { RecentArticles };
