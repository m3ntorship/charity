import React from 'react';
import './style.css';
import bg2 from './img/bg_2.png';
import { charityAPI } from '../../clients';

class UpcomingEventsCard extends React.Component {
  state = {
    date: {},
    loading: true,
    error: false,
    errorMessage: ''
  };

  _getData = () => {
    this.setState({ loading: true });
    charityAPI('/featured-cause')
      .then(({ data }) => {
        this.setState({
          data: data,
          loading: false,
          error: false,
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true,
          errorMessage: "couldn't fetch data"
        });
      });
  };

  componentDidMount() {
    this._getData();
  }

  _getProgressPrecentage = (raised, goal) => {
    return Math.floor((raised / goal) * 100);
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return (
        <div>
          {this.state.errorMessage},{' '}
          <a href="#/" onClick={this._getData} className="text-c200">
            retry?
          </a>
        </div>
      );
    }

    return (
      <div className=" Upcoming-Events-Card w-3/5 relative z-20">
        <div className="absolute z-30">
          <img src={bg2} alt="upcoming events right-bg" />
        </div>
        <div className="h-full z-40 right-fund-card text-c000 flex flex-col items-center justify-evenly">
          <div className="guage">
            <div className="percentage-circle">
              <div className="percent">
                <svg className="main_circle">
                  <circle cx="100" cy="100" r="90"></circle>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    style={{
                      strokeDashoffset: `${
                        this._getProgressPrecentage(
                          this.state.data.featured_cause.raised,
                          this.state.data.featured_cause.Goal
                        ) * -5.65
                      }`
                    }}
                  ></circle>
                </svg>
                <div className="number">
                  <h2>
                    {this._getProgressPrecentage(
                      this.state.data.featured_cause.raised,
                      this.state.data.featured_cause.Goal
                    )}
                    %
                  </h2>
                </div>
                {/* <svg className="dot">
                  <circle cx="8" cy="8" r="8"></circle>
                </svg> */}
              </div>
            </div>
          </div>
          <div className="urgent-cause-event_info flex flex-col justify-between">
            <h3 className="text-lg text-center font-bold m-auto urgent-case__title">
              {this.state.data.featured_cause.title}
            </h3>
            <p className="my-4  text-center m-auto leading-loose urgent-case__desc tracking-wider">
              {this.state.data.featured_cause.description}
            </p>
            <div className="text-center">
              <p className="text-sm">
                <span className="text-c300 text-lg tracking-wide font-bold">
                  ${this.state.data.featured_cause.raised}{' '}
                </span>
                Raised
              </p>
              <p className="text-sm">
                <span className="text-c300 text-lg tracking-wide font-bold">
                  ${this.state.data.featured_cause.Goal}{' '}
                </span>
                Goal
              </p>
            </div>
          </div>
          <button className="event-btn btn-sm bg-c300 absolute bottom-0">
            Donate Now
          </button>
        </div>
      </div>
    );
  }
}

export default UpcomingEventsCard;