import React from 'react';
import Heading from '../Heading';

const WeAreHereToHelp = ({ data }) => {
  const { title, desc } = data;
  return (
    <div>
      <Heading
        primaryTextColor="dark"
        primaryText={title}
        primaryClassName="md:text-left text-center"
      />
      <p>{desc}</p>
    </div>
  );
};

export default WeAreHereToHelp;
