import React, { useState } from 'react';
import cn from 'classnames';
import { useTransition, animated } from 'react-spring';

const WorkStyleCard = (
  description,
  title,
  img,
  img_hover,
  border_color,
  fade
) => {
  const [isHovered, setHoverState] = useState(false);
  const transitions = useTransition(isHovered, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 }
  });
  const borderColor = {
    red: 'border-c200',
    green: 'border-c400',
    yellow: 'border-c300',
    blue: 'border-c500'
  };
  return (
    <animated.div
      className=" card__wrapper text-center flex flex-col col-div items-center my-8   md:my-auto"
      onMouseEnter={setHoverState(true)}
      onMouseLeave={setHoverState(false)}
      style={fade}
    >
      <div
        className={cn(
          'icon-div  h-48 w-48 border-solid  border-4 md:border-6 lg:border-8 rounded-full flex justify-center p-2 items-center relative cursor-pointer',
          borderColor[border_color]
        )}
      >
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              className="h-full w-full p-2 rounded-full"
              style={props}
            >
              <img
                className="rounded-full h-full w-full"
                src={img_hover}
                alt={title}
              />
            </animated.div>
          ) : (
            <animated.div className="w-5/12" style={props}>
              <img src={img} alt={title} />
            </animated.div>
          )
        )}
      </div>
      <h3 className="showcase-row__heading my-2">{title}</h3>
      <p className="showcase-row__description text-base py-2">{description}</p>
    </animated.div>
  );
};
export default WorkStyleCard;
