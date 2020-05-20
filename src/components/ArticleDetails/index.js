import React from 'react';
import './styles.css';

const border = {
  borderColor: '#f5f5f5'
};



const ArticleContainer = ({ data, loading, error }) => {
  if (error) {
    return 'error';
  } else if (loading) {
    return 'loading';
  } else if (data) {
    const { headline, img, body_text, conclusion_text } = data;
    return (
      <div className="grid grid-cols-12 gap-4 pt-16 p-3">
        <ArticleImg img_main={img.primary.url} />

        <Headline head={headline} />

        <ArticleBody body={body_text} />

        <BodyImg img_secondary={img.secondary.url} />

        <ArticleBody body={conclusion_text} />
      </div>
    );
  }
};

// article headline
const Headline = ({head}) => {
  return (
    <header
      className="col-start-1 col-end-13 border-b-2 border-red-600
        sm:col-start-2 sm:col-end-12
        md:col-start-1 md:col-end-8
        lg:col-start-3 lg:col-end-8"
      style={border}
    >
      <div className="content-info text-center md:text-left">
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-user-tie mr-1 text-c500"></i>Admin
        </span> 
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-comments mr-1 text-c500"></i>2 Comments
        </span>
        <h4 className="text-c100 font-bold pb-8 text-large">
          {head} 
        </h4>
      </div>
    </header>
  );
};

// article body
const ArticleBody = ({body}) => {
  return (
    <article
      className="main_article col-start-1 text-justify col-end-13  text-c600 text-sm
        sm:col-start-2 sm:col-end-12
        md:col-start-1 md:col-end-8 
        lg:col-start-3 lg:col-end-8"
    >
      <p>
       {body}
      </p>
    </article>
  );
};

// article main img
const ArticleImg = ({img_main}) => {
  return (
    <div
      className="bg-c900 w-full h-64 col-start-1 col-end-13
        sm:col-start-2 sm:col-end-12 sm:bg-c300
        md:col-start-1 md:col-end-8 md:bg-c600
        lg:col-start-3 lg:col-end-8 lg:bg-c400"
    >
      <img src={img_main} alt="" />
    </div>
  );
};

// article body img

const BodyImg = ({img_secondary}) => {
  return (
    <div
      className="flex col-start-1 col-end-13
        sm:col-start-2 sm:col-end-12
        md:col-start-1 md:col-end-8
        lg:col-start-3 lg:col-end-8"
    >
      <div className="w-40 h-40 bg-c100 mr-8">
        <img src={img_secondary} alt="" />
      </div>
      <div className="w-40 h-40 bg-c200  ">
        <img src={img_secondary} alt="" />
      </div>
    </div>
  );
};

export default ArticleContainer;

