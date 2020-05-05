import React from 'react';
import './style.css'
export default class Links extends React.Component {
  render() {
    return (
      <div className="footer-card">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <p className="mb-8">{this.props.description}</p>
        <div>
          <form action="">
            <div className="flex justify-between bg-c900 py-4 px-6">
              <input
                className="bg-c900 w-8/12 flex-grow"
                type="email"
                name=""
                id=""
                placeholder="Enter email"
              />
              <div className="w-8">
                <button type="submit">
                  <span className="newsLetter_send_icon">
                    <i className="fab fa-telegram-plane"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
