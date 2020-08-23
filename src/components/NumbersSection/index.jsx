import React from 'react';
import Heading from '../Heading';
import DynamicNumber from '../DynamicNumbers';

const NumbersSection = ({ data }) => {
  const { sectionTitle, subTitle, numbersData } = data;

  return (
    <div>
      <Heading
        primaryTextColor="dark"
        size="xxl"
        align="center"
        primaryText={sectionTitle}
        primaryClassName="mt-6"
        secondaryText={subTitle}
      />
      <div className="lg:flex lg:flex-row justify-center lg:mt-32 lg:mt-12">
        {numbersData.map(({ text, desc, color }) => {
          return (
            <div className="mx-6">
              <DynamicNumber text={text} numberColor={color} desc={desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumbersSection;
