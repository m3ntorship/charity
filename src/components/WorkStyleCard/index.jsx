import React, { useState } from 'react';
import cn from 'classnames';
import { useTransition, animated } from 'react-spring';

const WorkStyleCard = ({ data, animation }) => {
  const {
    description,
    Title,
    image_main: { url: img },
    image_main_hover: { url: img_hover },
    color: border_color
  } = data;
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
      className="card__wrapper text-center flex flex-col col-div items-center my-8  md:my-auto"
      style={animation}
    >
      <div
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        className={cn(
          'icon-div  h-48 w-48 border-solid  border-4 md:border-6 lg:border-8 rounded-full flex justify-center p-2 items-center relative cursor-pointer',
          borderColor[border_color]
        )}
      >
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              className="h-full w-full p-2 rounded-full"
              style={props}
            >
              <img
                className="rounded-full h-full w-full"
                src={img_hover}
                alt={Title}
              />
            </animated.div>
          ) : (
            <animated.div key={key} className="w-5/12" style={props}>
              <img src={img} alt={Title} />
            </animated.div>
          )
        )}
      </div>
      <h3 className="showcase-row__heading my-2">{Title}</h3>
      <p className="showcase-row__description text-base py-2">{description}</p>
    </animated.div>
  );
};
export default WorkStyleCard;
