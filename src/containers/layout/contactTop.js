import React from 'react';
import { ContactTop } from '../../components/ContactTop';
import { useSelector } from 'react-redux';

const ContactTopContainer = () => {
  const { data, loading, error } = useSelector(store => store.contactTop);
  return <ContactTop data={data} loading={loading} error={error} />;
};

export { ContactTopContainer };
