import React from 'react';
import { connect } from 'react-redux';
import { News } from '../../components/NewsAndArticles';

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};
const _NewsConatiner = (data, loading, error) => {
  return <News data={data} loading={loading} error={error} />;
};

export const NewsConatiner = connect(mapStateToProps)(_NewsConatiner);
