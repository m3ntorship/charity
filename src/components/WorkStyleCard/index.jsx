import React, { useState } from 'react';
import cn from 'classnames';
import { Transition } from 'react-spring/renderprops';
import { animated } from 'react-spring';

const  WorkStyleCard = (description,
              title,
              img,
              img_hover,
              border_color,
              key,
              fade) => {

    const[isHovered, setHoverState] = useState(false)
  
  const borderColor = {
    red: 'border-c200',
    green: 'border-c400',
    yellow: 'border-c300',
    blue: 'border-c500'
  }
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
          <Transition
            config={{ duration: 400 }}
            items={isHovered}
            from={{ position: 'absolute', opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {toggle =>
              toggle
                ? props => (
                    <div
                      className="h-full w-full p-2 rounded-full"
                      style={props}
                    >
                      <img
                        className="rounded-full h-full w-full"
                        src={img_hover}
                        alt={title}
                      />
                    </div>
                  )
                : props => (
                    <div className="w-5/12" style={props}>
                      <img src={img} alt={title} />
                    </div>
                  )
            }
          </Transition>
        </div>
        <h3 className="showcase-row__heading my-2">{title}</h3>
        <p className="showcase-row__description text-base py-2">
          {description}
        </p>
      </animated.div>
    );
  }
}
