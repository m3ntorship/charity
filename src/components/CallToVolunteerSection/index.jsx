import React from 'react';
import CallToVolunteerCard from '../CallToVolunteerCard';

const CallToVolunteer = ({ data }) => {
  const { cardsData, cardBgColor } = data;
  // const { cardTitle, cardDesc, cardLogo, logoBg } = cardsData;

  const cardData = cardsData.map((cardData, index) => {
    const color = cardBgColor[index].cardBg;
    console.log(index, color);
    const { cardTitle, cardDesc, cardLogo, logoBg } = cardData;
    return (
      <div>
        <CallToVolunteerCard
          cardTitle={cardTitle}
          cardDesc={cardDesc}
          cardLogo={cardLogo}
          logoBg={logoBg}
          cardBgColor={color}
        />
      </div>
    );
  });

  return <div className="grid lg:grid-cols-4 md:grid-cols-1 ">{cardData}</div>;
};

export default CallToVolunteer;
