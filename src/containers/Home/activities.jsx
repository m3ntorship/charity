import React from 'react';
import { connect } from 'react-redux';
import { Activities } from '../../components/Activities';

const mapStateToProps = ({ activities: { data, error, loading } }) => {
  return {
    data,
    loading,
    error
  };
};
const ActivitiesContainer = ({ data, loading, error }) => {
  return <Activities data={data} loading={loading} error={error} />;
};

export default   connect(mapStateToProps)(ActivitiesContainer);
