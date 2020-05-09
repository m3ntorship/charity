import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="footer-card lg:my-0 my-6">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <p>{this.props.description}</p>
        <a
          className="inline-block text-base mt-8 py-4 px-8 font-bold bg-c400 text-c000 hover:bg-c900"
          href={this.props.url}
        >
          {this.props.cta}
        </a>
      </div>
    );
  }
}
