import { useEffect, useState } from 'react';
import { create } from 'axios';

export const charityAPI = create({
  baseURL: process.env.REACT_APP_STRAPI_URL
});

export const useCharityAPI = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false);
  useEffect(() => {
    charityAPI({ url })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setDataError(error);
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    dataError
  };
};

