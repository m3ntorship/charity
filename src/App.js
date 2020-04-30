import React, { useEffect, useState } from 'react';
import { charityAPI } from './clients';
import Logo from './components/Logo';
import MainContact from './components/MainContact';
import Numbers from './components/Numbers';
import ContactTop from './components/ContactTop';
import FeaturedBanner from './components/FeaturedBanner';
import Causes from './components/Causes';
import Activities from './components/Activities';
import Welcome from './components/Welcome';
import { ContactInfo } from './components/ContactInfo';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <ContactTop />
          <section className="logo-section py-8">
            <div className="container py-2 flex items-center justify-between">
              <Logo />
              <MainContact />
            </div>
          </section>
          <section className="slider pt-0 bg-cover bg-center relative bg-c800 relative">
            <div className="overlay absolute h-full w-full">
              <div className="container h-full flex flex-col">
                <nav className="flex">
                  <ul className="flex justify-around w-8/12 bg-c200 mr-2 items-center text-c000">
                    <li>
                      <a href="#a">Home</a>
                    </li>
                    <li>
                      <a href="#a">Pages</a>
                    </li>
                    <li>
                      <a href="#a">Donations</a>
                    </li>
                    <li>
                      <a href="#a">Events</a>
                    </li>
                    <li>
                      <a href="#a">News</a>
                    </li>
                    <li>
                      <a href="#a">Contact</a>
                    </li>
                  </ul>
                  <a
                    className="btn-md w-2/6 bg-c300 flex items-center justify-center"
                    href="#a"
                  >
                    Start Donating
                  </a>
                </nav>

                <div className="header-slider h-full flex items-center justify-center">
                  <div className="text text-center text-c000">
                    <p className="text-lg italic">Make an Impact</p>
                    <div className="main flex items-center justify-center">
                      <img
                        src="assets/img/header-slider/plant-left.png"
                        alt="left-spike"
                      />
                      <p className="font-bold leading-none">
                        You Can Make <br />A
                        <span className="underline text-c300 font-hairline">
                          Difference
                        </span>
                      </p>
                      <img
                        src="assets/img/header-slider/plant-right.png"
                        alt="right-spike"
                      />
                    </div>
                    <a className="btn-md bg-c200 inline-block mt-6" href="#a">
                      View Causes
                    </a>
                  </div>
                </div>
              </div>

              <div className="arrows absolute w-full flex justify-between px-16">
                <button className="left-arrow rounded-full border-solid border-c000 border p-4 opacity-50">
                  <img
                    src="assets/img/header-slider/left-arrow-icon.png"
                    alt="left-arrow-icon"
                  />
                </button>
                <button className="right-arrow rounded-full border-solid border-c000 border p-4">
                  <img
                    src="assets/img/header-slider/right-arrow-icon.png"
                    alt="right-arrow-icon"
                  />
                </button>
              </div>
            </div>
          </section>
        </header>
        <Welcome />
        <Activities />
        <FeaturedBanner />
        <Causes />
        <Numbers />

        <section className="flex upcoming-events relative">
          <div className="upcoming-events__bg-image absolute w-2/5">
            <img
              src="./assets/img/events/grey-blocks-upcoming-events.png"
              alt="upcoming events Background"
            />
          </div>
          <div className="container flex mb-4">
            <div className="sm:w-full w-3/5 h-full">
              <h2 className="upcoming-events__header font-bold leading-tighter text-c100">
                Upcoming
                <span className="text-c200 font-hairline underline">
                  Events
                </span>
              </h2>
              <p className="upcoming-events_description text-c600 leading-loose mb-12">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam saepe impedit ab facere incidunt iste dolor vitae
                aliquam error enim voluptate odit quidem a facilis, molestiae
                deserunt!
              </p>
              <div className="event-card-wrapper flex w-4/5 mb-4">
                <div className="event-card-wrapper_image">
                  <img src="./assets/img/events/footer-news.jpg" alt="" />
                </div>
                <div className="event-card-wrapper__details relative self-center pl-16">
                  <div className="event-card-wrapper__timing text-base text-c200 flex items-center leading-relaxed">
                    <span className="tracking-wide">admin</span>
                    &nbsp; &nbsp;
                    <span>12:00 am</span>
                  </div>
                  <div className="event-card-wrapper__topic">
                    <p className="text-c100 font-bold text-lg leading-relaxed">
                      Pure water and fresh food
                    </p>
                  </div>
                  <div className="event-card-wrapper__location">
                    <p className="text-c600 text-base flex items-center leading-relaxed">
                      Broklyn Street 40, New York
                    </p>
                  </div>
                  <div className="event-card-wrapper__date">
                    <div className="event_date">
                      <span> 07</span>
                      <span> Feb</span>
                      <span>2017</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-card-wrapper flex w-4/5 mb-4">
                <div className="event-card-wrapper_image">
                  <img src="./assets/img/events/footer-news.jpg" alt="" />
                </div>
                <div className="event-card-wrapper__details relative self-center pl-16">
                  <div className="event-card-wrapper__timing text-base text-c200 flex items-center leading-relaxed">
                    <span className="tracking-wide">admin</span>
                    &nbsp; &nbsp;
                    <span>12:00 am</span>
                  </div>
                  <div className="event-card-wrapper__topic">
                    <p className="text-c100 font-bold text-lg leading-relaxed">
                      Pure water and fresh food
                    </p>
                  </div>
                  <div className="event-card-wrapper__location">
                    <p className="text-c600 text-base flex items-center leading-relaxed">
                      Broklyn Street 40, New York
                    </p>
                  </div>
                  <div className="event-card-wrapper__date">
                    <div className="event_date">
                      <span> 07</span>
                      <span> Feb</span>
                      <span>2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/5 relative z-20">
              <div className="absolute z-30">
                <img
                  src="./assets/img/events/bg_2.png"
                  alt="upcoming events right-bg"
                />
              </div>
              <div className="h-full z-40 right-fund-card text-c000 flex flex-col items-center justify-evenly">
                <div className="guage">
                  <div className="percentage-circle">
                    <div className="percent">
                      <svg className="main_circle">
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                      </svg>
                      <div className="number">
                        <h2>88%</h2>
                      </div>
                      <svg className="dot">
                        <circle cx="8" cy="8" r="8"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="urgent-cause-event_info flex flex-col justify-between">
                  <h3 className="text-lg w-48 text-center font-bold m-auto urgent-case__title">
                    Raise Fund to Save Lives
                  </h3>
                  <p className="font-hairline w-40 my-4 text-sm text-center m-auto leading-loose urgent-case__desc tracking-wider r-card-font-color">
                    Aliq is notm hendr erit a augue insu image pellen tes
                  </p>
                  <div className="text-center">
                    <p className="r-card-font-color">
                      <span className="text-c300 text-base tracking-wide">
                        $25,270
                      </span>
                      Raised
                    </p>
                    <p className="r-card-font-color">
                      <span className="text-c300 text-base tracking-wide">
                        $30,000
                      </span>
                      Goal
                    </p>
                  </div>
                </div>
                <button className="event-btn btn-md bg-c300">Donate Now</button>
              </div>
            </div>
          </div>

          <div className="vertical r-line-overlay sm:text-6xl">
            <div className="vertical-text text-c800 font-hairline">
              URGENT CAUSE
            </div>
          </div>
        </section>

        <section className="feedback bg-c100 relative">
          <div className="container">
            <div className="feedback__heading">
              <div className="grid grid-cols-3">
                <h2 className="text-c000 text-xl col-span-2 font-black">
                  What They Are
                  <span className="text-c200 border-b-2 font-hairline">
                    Saying?
                  </span>
                </h2>
                <div className="text-c700 font-hairline">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="feedback__carousel grid absolute container">
              <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
                <img
                  className="rounded-full mx-auto"
                  src="https://picsum.photos/90/90"
                  alt="nile"
                />
                <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                  <p className="mb-8 leading-normal font-hairline">
                    This is due to their excellent service, competitive pricing
                    and customer support. It’s throughly refresing to get such a
                    personal touch.
                  </p>
                  <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                    Christine Rose
                  </h4>
                  <p className="leading-normal text-c600 text-base">Feedback</p>
                </blockquote>
              </figure>

              <div className="feedback__carousel__back-arrow bg-c800 flex items-center justify-center text-lg">
                <a href="#a" className="justify-center items-center flex">
                  <div className="text-c700 rounded-full border-solid justify-center items-center flex p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                </a>
              </div>
              <div className="feedback__carousel__forward-arrow bg-c800 flex items-center justify-center text-lg">
                <a href="#a" className="justify-center items-center flex">
                  <div className="text-c700 justify-center items-center flex rounded-full border-solid p-4 border-2 border-c700 hover:border-c100 hover:bg-c100 hover:text-c800 cursor-pointer">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              </div>
              <div className="feedback__carousel__picker bg-c800 flex items-center justify-center text-lg">
                <i className="fas fa-dot-circle text-c200 mr-1 cursor-pointer"></i>
                <i className="fas fa-dot-circle text-c700 mr-1 cursor-pointer"></i>
                <i className="fas fa-dot-circle text-c700 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="news font-body bg-c800 mb-20 md:mb-48 pt-18 pb-1 md:pb-40 relative">
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
        <section className="sponsors p-0 border-t sponser-border__top">
          <div className="container">
            <div className="flex justify-between mx-auto my-32 flex-wrap">
              <div className="sponser">
                <img src="assets/img/sponsers/envato-light.png" alt="" />
              </div>
              <div className="sponser">
                <img src="assets/img/sponsers/envato-dark.png" alt="" />
              </div>
              <div className="sponser">
                <img src="assets/img/sponsers/envato-light.png" alt="" />
              </div>
              <div className="sponser">
                <img src="assets/img/sponsers/envato-light.png" alt="" />
              </div>
              <div className="sponser">
                <img src="assets/img/sponsers/envato-light.png" alt="" />
              </div>
            </div>
          </div>

          <div className="contact-section py-10">
            <div className="container">
              <div className="flex flex-wrap justify-between items-center mx-0 text-c000">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const AppHooks = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    charityAPI('/tests').then(({ data: tests }) => {
      setTests(tests);
    });
  }, []);

  return tests.map(({ name }) => <div key={name}>{name}</div>);
};

export { AppHooks, App };
