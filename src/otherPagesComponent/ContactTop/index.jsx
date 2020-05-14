import React, { useState } from 'react';
import { useCharityAPI } from '../../clients/charity';
import cn from 'classnames';
import './style.scss';
import Loader from './ContentLoader';

const ContactTopContainer = () => {
  const { data, loading, dataError } = useCharityAPI('/socialmedias');
  const [clicked, setClicked] = useState(false);
  return (
    <ContactTop
      socialIconsList={data}
      loading={loading}
      error={dataError}
      clicked={clicked}
      setClicked={setClicked}
    />
  );
};

const ContactTop = ({
  socialIconsList,
  loading,
  error,
  clicked,
  setClicked
}) => {
  if (error) {
    return <div>we can not fetch data</div>;
  }

  if (loading) {
    return <Loader style={{ width: '100%', height: 'auto' }} />;
  }

  return (
    <section
      className={cn(
        'contact-top',
        'p-0',
        'items-center',
        'bg-c100',
        'hidden',
        'md:flex',
        {
          'bg-c300': clicked
        }
      )}
    >
      <div className="container px-20 w-full max-w-full md:flex justify-between">
        <div className="welcome-text text-sm">
          Welcome to the best
          <span className="text-c300 underline italic">Lovims</span> charity
          platform
        </div>
        <div className="social flex text-sm">
          <div>Follow us:</div>
          <div className="ml-1">
            <ul className="inline-block ">
              {socialIconsList.map(item => {
                return (
                  <li key={item.id} className="inline px-3 hover:text-c000">
                    <a href={item.url}>
                      <i className={item.fontawesome_icons}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => setClicked(!clicked)}
        className="btn w-2/12 h-full text-c100 text-sm font-bold bg-c300"
      >
        Start Donation
      </button>
    </section>
  );
};

export { ContactTopContainer, ContactTop };
