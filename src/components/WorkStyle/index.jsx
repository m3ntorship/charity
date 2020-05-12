import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import WorkStyleCard from '../WorkStyleCard';
import Heading from '../Heading/index';
import { charityAPI } from '../../clients';
import './styles.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const WorkStyle = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ref, inView, entry] = useInView({ threshold: 0.5 });
  const props = useSpring({
    opacity: inView ? 1 : 0,
    bottom: inView ? 0 : 100
  });

  useEffect(() => {
    _getData();
  }, []);

  const _getData = () => {
    setLoading(true);
    charityAPI('/how-we-work')
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        setErrorMessage('Sorry we got an error : ' + error);
      });
  };

  if (loading) {
    return (
      <section className="work-style relative text-c600">
        <div className="container">
          <h2 className="flex justify-center my-8">
            <TitleLoader width="100%" />
          </h2>
          <div className="flex flex-wrap justify-between  items-center  flex-col md:flex-row   ">
            <CardLoader />
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div>
        {errorMessage},{' '}
        <a href="#/" onClick={this._getData} className="text-c200">
          retry?
        </a>
      </div>
    );
  }
  return (
    <animated.section
      className="work-style relative text-c600"
      ref={ref}
      style={props}
    >
      <div className="container">
        <Heading
          primaryTextColor="dark"
          primaryText={data.title_primary}
          secondaryText={data.title_complementary}
          primaryClassName="text-center work-style__header"
        />

        <div className="work-style__items mx-auto showcase-row flex-col items-center md:flex-row md:items-start">
          {data.Cards.map(card => (
            <WorkStyleCard
              description={card.description}
              title={card.Title}
              img={card.image_main.url}
              img_hover={card.image_main_hover.url}
              border_color={card.color}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </animated.section>
  );
};

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={230}
    height={410}
    viewBox="0 0 230 410"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="117" cy="117" r="101" />
    <rect x="51" y="246" rx="0" ry="0" width="150" height="10" />
    <rect x="64" y="347" rx="0" ry="0" width="122" height="4" />
    <rect x="85" y="316" rx="0" ry="0" width="83" height="4" />
    <rect x="84" y="374" rx="0" ry="0" width="83" height="4" />
  </ContentLoader>
);

const TitleLoader = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={35}
    viewBox="0 0 250 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="50" />
  </ContentLoader>
);

export default WorkStyle;
