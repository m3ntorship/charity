import React from 'react';

const HeadingH2 = ({ primary, secondary }) => {
  return (
    <div>
      <h2 className="text-c100 leading-tighter tracking-tight font-extrabold my-12">
        {primary}
        <span className="text-c200 font-hairline underline border-b-2">
          {secondary}
        </span>
      </h2>
    </div>
  );
};

export default HeadingH2;
