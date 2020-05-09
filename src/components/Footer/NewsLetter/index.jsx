import React from 'react';
import './style.css';
export default class Links extends React.Component {
  render() {
    return (
      <div className="footer-card lg:my-0 my-6">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <p className="mb-8">{this.props.description}</p>
        <div>
          <form action="">
            <div className="flex justify-between bg-c900 py-4 px-6">
              <input
                className="bg-c900 w-8/12 flex-grow newsletter_email_input "
                type="email"
                name=""
                id=""
                placeholder="Enter email"
              />
              <button className="w-8" type="submit">
                <span className="newsLetter_send_icon">
                  <i className="fab fa-telegram-plane"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
