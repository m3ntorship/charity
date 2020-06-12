import React from 'react';
import { CardLoader, TitleLoader } from './ActivitiesContentLoading/index';
import Heading from '../Heading/index';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Fragment } from 'react';
import './styles.css';



const Activities = ({ data, loading, error }) => {
  const [refCards, inViewCards] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const fade = useSpring({
    opacity: inViewCards ? 1 : 0,
    transform: inViewCards ? 'translateY(0%)' : 'translateY(50%)'
  });
  const fadeHeader = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(-25%)'
  });
  const fadeDescription = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(25%)'
  });
  if (error) {
    return <div>we can not fetch data</div>;
  }

  if (loading) {
    return (
      <div className="container activites px-5 py-5">
        <div className="flex flex-wrap justify-center  lg:justify-between   ">
          <TitleLoader />
          <TitleLoader />
        </div>
        <div className="showcase-row -mt-3 px-8 grid gap-4 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:row-gap-0">
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      </div>
    );
  }
  if (data) {
    const {
      title_primary,
      title_complementary,
      description,
      how_we_work_cards
    } = data;
    return (
      // fix data intery (this.state.....)
      <Fragment>
        <div className="activites container px-5 py-5 font-body text-c600">
          <div
            className="activities__intro flex flex-col lg:flex-row justify-center items-center text-center lg:text-left"
            ref={ref}
          >
            <animated.div
              className="
              w-4/5 lg:w-3/5 text-c100 font-bold leading-tighter lg:pt-20 text-center"
              style={fadeHeader}
            >
              <Heading
                primaryTextColor="dark"
                primaryText={title_primary}
                secondaryText={title_complementary}
                primaryClassName="text-center"
              />
            </animated.div>
            <animated.div
              className='w-4/5 lg:w-2/5 lg:text-justify text-center mt-12 lg:mt-0"'
              style={fadeDescription}
            >
              <p>{description}</p>
            </animated.div>
          </div>

          <div
            className="showcase-row -mt-3 px-8 grid gap-4 row-gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:row-gap-0"
            ref={refCards}
          >
            {how_we_work_cards.map(card => (
              <animated.div
                className=" activity relative text-center"
                key={card._id}
                style={fade}
              >
                <img
                  className="mx-auto"
                  src={card.main_image_url}
                  alt={card.alternativeText}
                />
                <h3 className="showcase-row__heading text-lg py-4">
                  {card.Title}
                </h3>
                <p className="text-base px-5">{card.description}</p>
              </animated.div>
            ))}
          </div>
        </div>
        <div className="heart-bg w-1/2 h-48 -mt-48 p-0 xl:block hidden"></div>
      </Fragment>
    );
  }
};

export { Activities };
