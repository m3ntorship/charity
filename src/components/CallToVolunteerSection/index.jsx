import React from 'react';
import CallToVolunteerCard from '../CallToVolunteerCard';

const CallToVolunteer = ({ data }) => {
  const { cardsData, cardBgColor } = data;

  const cardData = cardsData.map((cardData, index) => {
    // const color = cardBgColor[index].cardBg;
    // console.log(color);
    return (
      <div>
        <CallToVolunteerCard data={cardData} />
      </div>
    );
  });

  return <div className="grid lg:grid-cols-4 md:grid-cols-1 ">{cardData}</div>;
};

export default CallToVolunteer;
