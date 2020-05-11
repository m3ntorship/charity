import React, { useState, useEffect } from 'react';
import { charityAPI } from '../../clients';
import './styles.css';

const Sponsers = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    charityAPI('/Sponsers')
      .then(res => {
        setUrls(res.data);
        setError(false);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  });
  if (loading) {
    return <div>loading data </div>;
  }
  if (error) {
    return <div>we can not fetch data</div>;
  }
  return (
    <section className="sponsors p-0 border-t sponser-border__top">
      <div className="container">
        <div className="mx-auto my-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {urls.map(({ _id, image }) => (
            <div className="sponser__logo my-2" key={_id}>
              <img className="m-auto" src={image.url} alt="sponser" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sponsers;
