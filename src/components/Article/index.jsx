import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import useMedia from '../../Helpers/useMedia';

const Article = ({ title, linkText, imageURL, id, index, animationDelay }) => {
  const [cardRef, cardInView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const isMobile = useMedia(['(min-width: 768px)'], [false], true);

  const slideCard = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView
      ? 'translate(0%)'
      : isMobile
      ? index % 2 === 0
        ? 'translateX(-50%)'
        : 'translateX(50%)'
      : 'translateY(-50%)',
    delay: animationDelay ? (isMobile ? 0 : 900 + 250 * index) : 0
  });
  return (
    <animated.div className="article relative" style={slideCard}>
      <div ref={cardRef}>
        <img
          className="article__image"
          src={imageURL}
          alt="article thumbnail"
        />
        <div className="article-info transform -translate-y-1/2 bg-c000 text-center shadow-lg">
          <div className="content-info">
            <span className="text-c600 mx-2">
              <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
            </span>
            <span className="text-c600 mx-2">
              <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
            </span>
            <h4 className="text-c100 font-bold">{title}</h4>
          </div>
          <div className="block text-c100 text-center spicial-info cursor-pointer">
            <Link
              to={`articles/${id}`}
              className="w-full h-full flex justify-center items-center"
            >
              <i className="fas fa-long-arrow-alt-right"></i>
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Article;
