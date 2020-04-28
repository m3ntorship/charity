import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="footer-card">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <p>{this.props.description}</p>
        <a
          className="inline-block text-base py-4 px-8 font-bold bg-c400 hover:text-c000 hover:bg-c900"
          href={this.props.url}
        >
          {this.props.cta}
        </a>
      </div>
    );
  }
}
