import React from 'react';
import './style.css';

// const CallToVolunteerCard = ({ cardTitle, cardDesc, data, cardTitleColor }) => {
//   return (
//     <div className="flex flex-col">
//       <div
//         className="card__top text-center text-c000"
//         style={{ backgroundColor: '#d55342', padding: '50px' }}
//       >
//         <h5 className="text-3xl">{cardTitle}</h5>
//         <p className="text-base mt-12 mb-32">{cardDesc}</p>
//       </div>
//       <div
//         className="flex justify-center relative h-56"
//         style={{ backgroundColor: '#254151', padding: '50px' }}
//       >
//         <div className="card__logo bg-c000 p-5 rounded-full border-6 border-c200">
//           <img src={data.cardLogo} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallToVolunteerCard;

const CallToVolunteerCard = ({
  cardTitle,
  cardDesc,
  cardLogo,
  logoBg,
  cardBgColor
}) => {
  // const { cardTitle, cardDesc, cardLogo, logoBg } = data;

  return (
    <div className="flex flex-col mx-2 mb-5 lg:mb-0">
      <div
        className="card__top text-center text-c000"
        style={{ backgroundColor: `${cardBgColor}`, padding: '50px' }}
      >
        <h5 className="text-3xl">{cardTitle}</h5>
        <p className="text-base mt-12 mb-32">{cardDesc}</p>
      </div>
      <div
        className="flex justify-center relative h-56"
        style={{ backgroundColor: '#254151', padding: '50px' }}
      >
        <img className="card__logoBg" src={logoBg} alt="" />
        <img className="card__logo" src={cardLogo} alt="" />
      </div>
    </div>
  );
};

export default CallToVolunteerCard;
