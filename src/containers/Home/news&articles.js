import { connect } from 'react-redux';
import { News } from '../../components/NewsAndArticles';

const mapStateToProps = state => {
  return {
    data: state.newsAndArticles.data,
    loading: state.newsAndArticles.loading,
    error: state.newsAndArticles.error
  };
};

export const NewsConatiner = connect(mapStateToProps)(News);
