import React from 'react';
import './styles.css';
import { MainImgLoader, HeadlineLoader, BodyText, BodyImgs } from './Loader';

const border = {
  borderColor: '#f5f5f5'
};

const ArticleModel = ({ data, loading, error }) => {
  if (error) {
    return 'error';
  } else if (loading) {
    return (
      <div className="grid grid-cols-12 gap-4 pt-16 p-3 overflow-hidden">
        <div
          className="col-start-1 col-end-13 p-0
        
        md:col-start-1 md:col-end-9 
        lg:col-start-3 lg:col-end-9"
        >
          <MainImgLoader />
        </div>
        <div
          className="col-start-1 col-end-13
       
        md:col-start-1 md:col-end-9
        lg:col-start-3 lg:col-end-9"
        >
          <HeadlineLoader />
        </div>
        <div
          className="main_article col-start-1 text-justify col-end-13  text-c600 text-sm
        
        md:col-start-1 md:col-end-9 
        lg:col-start-3 lg:col-end-9"
        >
          <BodyText />
          <BodyText />
          <BodyText />
        </div>
        <div
          className="col-start-2 col-span-10 grid grid-rows-2 grid-flow-col gap-4
           
          md:col-start-1 md:col-span-8 md:grid-rows-1 
          lg:col-start-3 lg:col-span-6 lg:grid-rows-1"
        >
          <BodyImgs />
          <BodyImgs />
        </div>
        <div
          className="main_article col-start-1 text-justify col-end-13  text-c600 text-sm
        
        md:col-start-1 md:col-end-9 
        lg:col-start-3 lg:col-end-9"
        >
          <BodyText />
        </div>
      </div>
    );
  } else if (data) {
    const {
      headline,
      img_primary,
      img_secondary,
      body_text,
      conclusion_text,
      user_type,
      comments
    } = data;
    return (
      <div className="grid grid-cols-1 row-gap-8 lg:grid-cols-12 lg:gap-8">
        <ArticleImg img_main={img_primary.url} />
        <Headline head={headline} comment={comments.length} user={user_type} />

        {body_text.map(content => (
          <ArticleBody body={content.text} key={content.id} />
        ))}
        <div
          className="col-start-1 col-span-12 grid grid-rows-2 grid-flow-col gap-8 sm:grid-rows-1 
          "
        >
          {img_secondary.map(secondary => (
            <BodyImg img={secondary.url} key={secondary.id} />
          ))}
        </div>

        <ArticleBody body={conclusion_text} />
      </div>
    );
  }
};

// article headline
const Headline = ({ head, comment, user }) => {
  return (
    <header
      className="col-start-1 col-end-13 border-b-2 mt-auto"
      style={border}
    >
      <div className="content-info text-center md:text-left">
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-user-tie mr-1 text-c500"></i>
          {user}
        </span>
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-comments mr-1 text-c500"></i>
          {comment} Comments
        </span>
        <h4 className="text-c100 font-bold pb-8 text-large">{head}</h4>
      </div>
    </header>
  );
};

// article body
const ArticleBody = ({ body }) => {
  return (
    <article className="main_article col-start-1 text-justify col-end-13  text-c600 text-sm">
      <p>{body}</p>
    </article>
  );
};

// article main img
const ArticleImg = ({ img_main }) => {
  return (
    <div className="col-start-1 col-span-1 lg:col-span-12">
      <img src={img_main} alt="" width="100%" height="100%" />
    </div>
  );
};

// article body img
const BodyImg = ({ img }) => {
  return <img src={img} alt="" />;
};

export default ArticleModel;
