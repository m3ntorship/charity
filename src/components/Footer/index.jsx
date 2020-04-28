import React from 'react';
import WorkStyleCard from '../WorkStyleCard/index';
import { charityAPI } from '../../clients';

export default class WorkStyle extends React.Component {
  render() {
    return (
      <footer className="footer bg-c100 text-c700">
        <div className="container w-9/12 lg:grid grid-cols-4 gap-4 py-16 text-sm grid-cols-2 font-hairline">
          <div className="footer-card">
            <h3 className="text-c000 text-lg font-semibold mb-8">About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              aliquam et , cum odio illo hic provident totam!
            </p>
            <a
              className="inline-block text-base py-4 px-8 font-bold bg-c400 hover:text-c000 hover:bg-c900"
              href="#a"
            >
              Dontate Now
            </a>
          </div>
          <div className="footer-card flex flex-col">
            <h3 className="text-c000 text-lg font-semibold mb-8">News</h3>
            <div className="flex flex-col flex-grow">
              <a className="hover:text-c000 mb-8" href="#a">
                <div className="flex">
                  <div className="news__image-container">
                    <img
                      width="72px"
                      height="72px"
                      src="assets/imgs/footer-news.jpg"
                      alt="thumbnail of the article"
                    />
                  </div>
                  <div className="pl-4 flex flex-col justify-between">
                    <p className="text-c300 text-xs">Jan 16, 2020</p>
                    <p>A Clean Water Gives More Good Taste</p>
                  </div>
                </div>
              </a>
              <a className="hover:text-c000 mb-8" href="#a">
                <div className="flex">
                  <div className="news__image-container">
                    <img
                      width="72"
                      height="72"
                      src="assets/imgs/footer-news-2.jpg"
                      alt="thumbnail of the article"
                    />
                  </div>
                  <div className="pl-4 flex flex-col justify-between">
                    <p className="text-c300 text-xs">Jan 16, 2020</p>
                    <p>A Clean Water Gives More Good Taste</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-card">
            <h3 className="text-c000 text-lg font-semibold mb-8">Links</h3>
            <ul className="flex flex-col flex-wrap h-48">
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  About
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Causes
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  New Campaign
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Site Map
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Events
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Contact
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Help
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Privacy Policy
                </a>
              </li>
              <li className="pb-4">
                <a className="hover:text-c000" href="#a">
                  Volunteers
                </a>
              </li>
            </ul>
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
