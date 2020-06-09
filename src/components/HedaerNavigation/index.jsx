import React, { useState } from 'react';
import cn from 'classnames';

const HeaderNavigation = ({ data, loading, error }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="header-nav p-0 bg-c700">
      <div className="container sm:flex sm:justify-between">
        <div className="flex items-center px-4 py-4 justify-between">
          <div className="logo bg-c400">
            <img src="https://charity-cms-dev.s3.eu-central-1.amazonaws.com/logo_eba40dfa8c.png" />
          </div>
          <div className="toggle-btn sm:hidden">
            <button
              type="button"
              className="text-gray-600 bg-c300 block"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              {isOpen ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
        <div
          className={cn('block sm:flex sm:justify-between sm:items-center', {
            hidden: !isOpen
          })}
        >
          <a href="#" className="block font-semibold hover:bg-c500">
            {' '}
            Item One{' '}
          </a>
          <a href="#" className="block font-semibold hover:bg-c500">
            {' '}
            Item Two{' '}
          </a>
          <a href="#" className="block font-semibold hover:bg-c500">
            {' '}
            Item Three{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeaderNavigation;
