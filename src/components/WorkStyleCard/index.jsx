import React from 'react';
import cn from 'classnames';

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
        className="text-center flex flex-col col-div items-center my-10 md:my-auto"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div
          className={cn(
            'icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center',
            borderColor[this.props.border_color]
          )}
        >
          {this.state.isHovered ? (
            <div
              className="image-container rounded-full"
              style={{ backgroundImage: `url(${this.props.img_hover})` }}
            ></div>
          ) : (
            <img
              className="w-5/12"
              src={this.props.img}
              alt={this.props.title}
            />
          )}
        </div>
        <h3 className="showcase-row__heading my-2">{this.props.title}</h3>
        <p className="text-sm py-2 leading-loose">{this.props.description}</p>
      </div>
    );
  }
}
