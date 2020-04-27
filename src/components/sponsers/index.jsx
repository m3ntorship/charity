import React from 'react';
//import { charityAPI } from '../../clients';
import sponserImg from './img/envato-dark.png';

class Responsers extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="flex justify-between mx-auto my-32 flex-wrap">
          <div className="sponser">
            <img src={sponserImg} alt="" />
          </div>
          <div className="sponser">
            <img src={sponserImg} alt="" />
          </div>
          <div className="sponser">
            <img src={sponserImg} alt="" />
          </div>
          <div className="sponser">
            <img src={sponserImg} alt="" />
          </div>
          <div className="sponser">
            <img src={sponserImg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Responsers;
