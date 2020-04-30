import React from 'react';

export default class WorkStyleCard extends React.Component {
  constructor() {
    super();
    this.state = { isHovered: false };
  }
  render() {
    return (
      <div
        className="text-center flex flex-col col-div items-center my-10 md:my-auto"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div
          className={`icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-c200`}
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
        <p className="text-sm py-2 leading-relaxed">{this.props.description}</p>
      </div>
    );
  }
}
