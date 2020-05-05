import React from 'react';
import './style.css';
import bg2 from './img/bg_2.png';
import { charityAPI } from '../../clients';

class UpcomingEventsCard extends React.Component {
  state = {
    data: {},
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

  _getProgressPrecentage(raised, goal) {
    return Math.floor((raised / goal) * 100);
  }

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
    let raised = this.state.data.cause.raised;
    let goal = this.state.data.cause.goal;
    const numberToLocal = number => Number(number).toLocaleString();
    return (
      <div className=" Upcoming-Events-Card col-start-8 col-end-13 row-start-1 row-end-3">
        <div className="h-full right-fund-card text-c000 flex flex-col items-center justify-between pt-16">
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
                        565 + this._getProgressPrecentage(raised, goal) * -5.65
                      }`
                    }}
                  ></circle>
                </svg>
                <div className="number">
                  <h2>{this._getProgressPrecentage(raised, goal)}%</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="urgent-cause-event_info flex flex-col justify-between">
            <h3 className="text-lg text-center font-semibold m-auto urgent-case__title">
              {this.state.data.cause.title}
            </h3>
            <p className="my-4 text-center m-auto leading-loose urgent-case__desc tracking-wider font-light">
              {this.state.data.cause.description}
            </p>
            <div className="text-center">
              <p className="text-sm font-light tracking-normal">
                <span className="text-c300 text-lg tracking-wide font-bold">
                  ${numberToLocal(raised)}{' '}
                </span>
                Raised
              </p>
              <p className="text-sm font-light tracking-normal">
                <span className="text-c300 text-lg tracking-wide font-bold font">
                  ${numberToLocal(goal)}{' '}
                </span>
                Goal
              </p>
            </div>
          </div>
          <button className="btn btn-card bg-c300 px-24">Donate Now</button>
        </div>
      </div>
    );
  }
}

export default UpcomingEventsCard;
