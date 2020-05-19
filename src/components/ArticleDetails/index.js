import React from 'react';
import './styles.css';


const border = {
  borderColor: '#f5f5f5'
};



const ArticleContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-16 p-3">
      <ArticleImg />

      <Headline />

      <ArticleBody />

      <BodyImg />

      <ArticleBody />
    </div>
  );
};

// article headline
const Headline = () => {
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
          Water Need in Africa
        </h4>
      </div>
    </header>
  );
};

// article body
const ArticleBody = () => {
  return (
    <article
      className="main_article col-start-1 text-justify col-end-13  text-c600 text-sm
        sm:col-start-2 sm:col-end-12
        md:col-start-1 md:col-end-8 
        lg:col-start-3 lg:col-end-8"
    >
      <p>
        venenatis et lectus. Vivamus justo arcu, varius in felis eleifend,
        imperdiet condimentum massa. In ipsum orci, facilisis vitae lacinia a,
        aliquam ac nisl. Nulla facilisi. Nullam ultrices tellus vel nisl
        tristique, id fringilla nunc vulputate. Sed efficitur mauris eu dolor
        semper, non porttitor nisl fermentum.
      </p>
    </article>
  );
};

// article main img
const ArticleImg = () => {
  return (
    <div
      className="bg-c900 w-full h-64 col-start-1 col-end-13
        sm:col-start-2 sm:col-end-12 sm:bg-c300
        md:col-start-1 md:col-end-8 md:bg-c600
        lg:col-start-3 lg:col-end-8 lg:bg-c400"
    >
      <div className="articleImg"></div>
    </div>
  );
};

// article body img

const BodyImg = () => {
  return (
    <div
      className="col-start-1 col-end-13
        sm:col-start-2 sm:col-end-12
        md:col-start-1 md:col-end-8
        lg:col-start-3 lg:col-end-8"
    >
      <div className=" bg-c100 ">image 1</div>
      <div className=" bg-c200  ">image 2</div>
    </div>
  );
};

export default ArticleContainer;
