import React from 'react';

const Heading = ({
  primary,
  secondary,
  textSize,
  margin,
  textAlign,
  fontWeight,
  primColor,
  secColor
}) => {
  textSize = !textSize ? 'text-xl' : textSize;
  margin = !margin ? 'my-12' : margin;
  textAlign = !textAlign ? 'text-left' : textAlign;
  primColor = !primColor ? 'text-c000' : primColor;
  secColor = !secColor ? 'text-c200' : secColor;
  fontWeight = !fontWeight ? 'font-extrabold' : fontWeight;

  return (
    <h2
      className={`leading-tighter tracking-tight ${fontWeight} ${textSize} ${margin} ${primColor} ${textAlign}`}
    >
      {primary}
      <span className={`font-hairline underline border-b-2 ${secColor}`}>
        {secondary}
      </span>
    </h2>
  );
};

export default Heading;
