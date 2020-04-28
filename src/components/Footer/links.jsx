import React from 'react';

export default class Links extends React.Component {
  render() {
    const links = this.props.links.map(link => {
      return (
        <li className="pb-4">
          <a className="hover:text-c000" href={link.url}>
            {link.title}
          </a>
        </li>
      );
    });
    return (
      <div className="footer-card">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <ul className="flex flex-col flex-wrap h-48">{links}</ul>
      </div>
    );
  }
}
