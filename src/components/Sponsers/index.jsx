import React from 'react';
import './styles.css';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={100}
    height={100}
    viewBox="0 0 100 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#e8e8e8"
    className="m-auto"
  >
    <circle cx="53" cy="50" r="33" />
  </ContentLoader>
);

const Sponsers = ({ data, loading, error }) => {
  if (loading) {
    return (
      <section className="sponsors p-0 border-t sponser-border__top">
        <div className="container">
          <div className="mx-auto my-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return <div>we can not fetch data</div>;
  }
  return (
    <section className="sponsors p-0 border-t sponser-border__top">
      <div className="container">
        <div className="mx-auto my-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map(({ _id, image }) => (
            <div className="sponser__logo my-2" key={_id}>
              <img className="m-auto" src={image.url} alt="sponser" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Sponsers };
