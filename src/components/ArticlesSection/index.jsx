import React from 'react';
import ArticleCard from '../ArticleCard';
import Heading from '../Heading';
import Button from '../ButtonComponent';

const ArticlesSection = ({ data }) => {
  const { sectionTitle, subTitle, sectionDesc, btnText } = data;
  return (
    <div>
      <div className="flex justify-between items-start">
        <Heading
          primaryText={sectionTitle}
          secondaryText={subTitle}
          primaryTextColor="dark"
        />
        <p>{sectionDesc}</p>
        <Button
          btnText={btnText}
          btnSize="large"
          bgColor="yellow"
          btnTextColor="dark"
        />
      </div>

      <ArticleCard />
    </div>
  );
};

export default ArticlesSection;
