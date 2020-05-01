import React from 'react';
import WorkStyle from './components/WorkStyle';
import Numbers from './components/Numbers';
import FeaturedBanner from './components/FeaturedBanner';
import Causes from './components/Causes';
import Sponsers from './components/Sponsers';
import Activities from './components/Activities';
import Welcome from './components/Welcome';
import { ContactInfo } from './components/ContactInfo';
import Header from './components/Header';
import UpcomingEvents from './components/UpcomingEvents';
import MainSlider from './components/MainSlider';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Welcome />
        <Activities />
        <FeaturedBanner />
        <Causes />
        <Numbers />
        <UpcomingEvents />
        <MainSlider />
        <WorkStyle />

        <section className="news bg-c800 mb-20 md:mb-48 pt-18 pb-1 md:pb-40 relative">
          <div className="container">
            <div className="head-section grid grid-cols-1 md:grid-cols-12">
              <h2 className="text-c100 font-black md:col-span-5">
                News &
                <span className="text-c200 font-thin border-b-2">Articles</span>
              </h2>
              <p className="text-c600 text-lg md:mt-3 md:col-span-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quo eveniet recusandae molestiae reiciendis a sequi sapiente
              </p>
              <div className="btn-div md:col-span-3">
                <button className="btn-sm text-sm bg-c300 my-8 md:float-right md:mt-3">
                  View All Posts
                </button>
              </div>
            </div>
          </div>
          <div className="container relative">
            <div className="articles grid grid-cols-1 mt-12 md:mt-auto md:grid-cols-3 gap-8 md:absolute w-full">
              <div className="article">
                <img
                  src="https://www.iapb.org/wp-content/uploads/30116455362_ed5a11aa91_o_0.jpg"
                  alt="Africa Childres "
                />
                <div className="article-info transform -translate-y-1/2 bg-c000 py-6 text-center shadow-lg">
                  <span className="text-c600 mx-2">
                    <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
                  </span>
                  <span className="text-c600 mx-2">
                    <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
                  </span>
                  <h4 className="text-c100 font-bold">Water Need in Africa</h4>
                </div>
              </div>

              <div className="article">
                <img
                  src="https://globaladvocacyafrica.org/wp-content/uploads/2018/12/AFRICAN-CHILD-2-960x640.jpg"
                  alt="Africa Childres "
                />
                <div className="article-info transform -translate-y-1/2 bg-c300 text-c100 text-center shadow-lg spicial-info cursor-pointer">
                  <i className="fas fa-long-arrow-alt-right font-light"></i>
                  Read More
                </div>
              </div>

              <div className="article">
                <img
                  src="https://violenceagainstchildren.un.org/sites/violenceagainstchildren.un.org/files/styles/panopoly_image_full/public/news_articles/africaaidsfree.jpg?itok=o18cimXE"
                  alt="Africa Childres "
                />
                <div className="article-info transform -translate-y-1/2 bg-c000 py-6 text-center shadow-lg">
                  <span className="text-c600 mx-2">
                    <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
                  </span>
                  <span className="text-c600 mx-2">
                    <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
                  </span>
                  <h4 className="text-c100 font-bold">Water Need in Africa</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Sponsers />
        <ContactInfo />
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
              <h3 className="text-c000 text-lg font-semibold mb-8">
                Newsletter
              </h3>
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
      </>
    );
  }
}

export { App };
