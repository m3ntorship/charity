import React from 'react';
import { connect } from 'redux';
import { News } from '../../components/NewsAndArticles';

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};
const _NewsConatiner = (data, loading, error) => {
  // const { data, loading, error } = useCharityAPI('/news-and-articles');
  return <News data={data} loading={loading} error={error} />;
};

export const NewsConatiner = connect(mapStateToProps)(_NewsConatiner);
