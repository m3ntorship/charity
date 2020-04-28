import React from 'react';
import { charityAPI } from '../../clients';
import Links from './links';
import Articles from './articles';
import About from './about';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 lg:grid grid-cols-4 gap-4 py-16 text-sm grid-cols-2 font-hairline">
          <About />
          <Articles />
          <Links title="Links" links={[]} />
        </div>
        <div className="footer-card">
          <h3 className="text-c000 text-lg font-semibold mb-8">Newsletter</h3>
          <p className="mb-8">
            Sing up now to get daily latest news & updates from us
          </p>
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
                    <img
                      width="30"
                      height="30"
                      src="assets/icons/send.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <p className="text-center py-8 text-sm border-t border-c700 bg-c100">
            &copy;copyright 2020 by ThemeMascot.com
          </p>
        </div>
      </footer>
    );
  }
}
