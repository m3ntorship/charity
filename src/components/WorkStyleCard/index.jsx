import React from 'react';

export default class WorkStyleCard extends React.Component {
  render() {
    return (
      <div className="text-center flex flex-col col-div items-center my-10 md:my-auto">
        <div
          className={`icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-${this.props.border_color}`}
        >
          <div className="image-container rounded-full"></div>
          <img
            onMouseOver={e => (e.currentTarget.src = this.props.img)}
            onMouseOut={e => (e.currentTarget.src = this.props.img_hover)}
            className="w-5/12"
            src={this.props.img}
            alt={this.props.title}
          />
        </div>
        <h3 className="showcase-row__heading my-2">{this.props.title}</h3>
        <p className="text-sm py-2 leading-relaxed">{this.props.description}</p>
      </div>
    );
  }
}
