import React from 'react';
import cn from 'classnames';
import { Transition } from 'react-spring/renderprops';

export default class WorkStyleCard extends React.Component {
  constructor() {
    super();
    this.state = { isHovered: false };
  }
  render() {
    const borderColor = {
      red: 'border-c200',
      green: 'border-c400',
      yellow: 'border-c300',
      blue: 'border-c500'
    };
    return (
      <div
        className=" card__wrapper text-center flex flex-col col-div items-center my-10 md:my-auto"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div
          className={cn(
            'icon-div  h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center relative cursor-pointer',
            borderColor[this.props.border_color]
          )}
        >
          <Transition
            config={{ duration: 400 }}
            items={this.state.isHovered}
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
                        src={this.props.img_hover}
                        alt={this.props.title}
                      />
                    </div>
                  )
                : props => (
                    <div className="w-5/12" style={props}>
                      <img src={this.props.img} alt={this.props.title} />
                    </div>
                  )
            }
          </Transition>
        </div>
        <h3 className="showcase-row__heading my-2">{this.props.title}</h3>
        <p className="showcase-row__description text-base py-2">
          {this.props.description}
        </p>
      </div>
    );
  }
}
