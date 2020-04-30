import React, { useEffect, useState } from 'react';
import { charityAPI } from './clients';
import Logo from './components/Logo';
import MainContact from './components/MainContact';
import Numbers from './components/Numbers';
import ContactTop from './components/ContactTop';
import FeaturedBanner from './components/FeaturedBanner';
import Causes from './components/Causes';
import Activities from './components/Activities';
import { ContactInfo } from './components/ContactInfo';
import { UpcomingEvents, BackgroundImage } from './components/UpcomingEvents';

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

        <section className="welcome py-0 text-c600">
          <div className="container grid grid-cols-12 gap-8">
            <div className="welcome__start col-start-1 col-end-6">
              <div className="welcome__start__img h-full relative">
                <img
                  src="./assets/img/welcome/children.jpg"
                  alt="childern smiling"
                  className="object-cover object-center w-full h-full"
                />
                <div className="welcome__start__side absolute top-0 h-full bg-c200 w-12"></div>
              </div>
            </div>
            <div className="welcome__end col-start-7 col-end-13 pt-16">
              <h2 className="text-c100 leading-tighter tracking-tight font-extrabold my-12">
                Welcome to Best Charity
                <span className="text-c200 font-hairline underline border-b-2">
                  Organization
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                quaerat similique corrupti autem repellendus at aliquid ab?
                Soluta est doloremque repellat voluptas aperiam necessitatibus
                eligendi.
              </p>
              <ul className="flex welcome__list">
                <li className="welcome__list__item pl-4">
                  <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
                    Become a Volunteer
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="welcome__list__item pl-4">
                  <h3 className="welcome__list__item__title relative my-10 text-md font-bold text-c100">
                    Quick Fundraising
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
              <button className="btn-lg bg-c300 mt-16">Discover More</button>
            </div>
          </div>
        </section>

        <Activities />
        <FeaturedBanner />
        <Causes />
        <Numbers />
        <section className="flex upcoming-events relative">
          <BackgroundImage />
          <div className="container flex mb-4">
            <UpcomingEvents />

            <div className="w-3/5 relative z-20">
              <div className="absolute z-30">
                <img src="PNG Background" alt="upcoming events right-bg" />
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

        <section className="work-style relative text-c600">
          <div className="container">
            <h2 className="text-center tracking-tight text-c100 font-bold">
              How We
              <span className="tracking-wide text-c200 font-hairline underline border-b-2">
                Work
              </span>
            </h2>

            <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
              <div className="text-center flex flex-col col-div items-center my-10 md:my-auto">
                <div className="icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-c200">
                  <div className="image-container rounded-full"></div>
                  <img
                    className="w-5/12"
                    src="./assets/img/work-style/01.svg"
                    alt=""
                  />
                </div>
                <h3 className="showcase-row__heading my-2">Join Our Website</h3>
                <p className="text-sm py-2 leading-relaxed">
                  Lorem ipsum is simply free text available in market websites
                </p>
              </div>

              <div className="text-center flex flex-col col-div items-center my-10 md:my-auto md:ml-10 md:pl-10">
                <div className="icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-c400">
                  <div className="image-container rounded-full"></div>
                  <img
                    className="w-5/12"
                    src="./assets/img/work-style/02.svg"
                    alt=""
                  />
                </div>
                <h3 className="showcase-row__heading my-2">
                  Start Your Campaigns
                </h3>
                <p className="text-sm py-2 leading-relaxed">
                  Lorem ipsum is simply free text available in market websites
                </p>
              </div>

              <div className="text-center flex flex-col col-div items-center my-10 md:my-auto md:ml-10 md:pl-10">
                <div className="icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-c300">
                  <div className="image-container rounded-full"></div>
                  <img
                    className="w-5/12"
                    src="./assets/img/work-style/03.svg"
                    alt=""
                  />
                </div>
                <h3 className="showcase-row__heading my-2">
                  Share With Friends
                </h3>
                <p className="text-sm py-2 leading-relaxed">
                  Lorem ipsum is simply free text available in market websites
                </p>
              </div>

              <div className="text-center flex flex-col col-div items-center my-10 md:my-auto md:ml-10 md:pl-10">
                <div className="icon-div h-48 w-48 border-solid border-8 rounded-full flex justify-center p-2 items-center border-c500">
                  <div className="image-container rounded-full"></div>
                  <img
                    className="w-5/12"
                    src="./assets/img/work-style/04.svg"
                    alt=""
                  />
                </div>
                <h3 className="showcase-row__heading my-2">Manage Donations</h3>
                <p className="text-sm py-2 leading-relaxed">
                  Lorem ipsum is simply free text available in market websites
                </p>
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
