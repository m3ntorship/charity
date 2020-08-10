import React from 'react';
import CallToVolunteerCard from '../CallToVolunteerCard';

const CallToVolunteer = ({ data }) => {
  const { cardsData } = data;
  // const { cardTitle, cardDesc, cardLogo, logoBg } = cardsData;

  const cardData = cardsData.map(data => {
    return (
      <div>
        <CallToVolunteerCard
          title={data.cardTitle}
          desc={data.cardDesc}
          logo={data.cardLogo}
          logoBg={data.logoBg}
        />
      </div>
    );
  });

  return <div className="grid lg:grid-cols-4 md:grid-cols-1 ">{cardData}</div>;
};

export default CallToVolunteer;
