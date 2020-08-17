import React from 'react';
import Heading from '../Heading';
import IconWithTextIem from '../IconWithTextItem';

const OurMission = ({ data }) => {
  const { mainTitle, subTitle, desc } = data;
  return (
    <div className="bg-c900">
      <div className="container grid grid-cols-8 pt-32">
        <div className="col-span-4">
          <Heading
            primaryText={mainTitle}
            secondaryText={subTitle}
            align="center lg:left"
          />
          <p className="text-c000">{desc}</p>
          <div className="my-16">
            <IconWithTextIem
              data={data}
              spanTitle="Call us anytime"
              textTemplate="666 888 6666"
              fontSize="xl"
              templateFontWeight="extrabold"
              textColor="white"
              textAlign="left"
              paragraphStart="end"
              iconStart="start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
