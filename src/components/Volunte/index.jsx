import React from 'react';

export const Volunte = ({ data, loading, error }) => {
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    description,
    button: { title, link }
  } = data;
  return (
    <div className="bg-c200 p-10">
      <div className="container">
        <img src="./img/blocks" />
        <p>{description}</p>
        <button>
          {' '}
          <a href={link}>{title}</a>{' '}
        </button>
      </div>
    </div>
  );
};
