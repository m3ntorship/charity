import { connect } from 'react-redux';
import { News } from '../../components/NewsAndArticles';

const mapStateToProps = state => {
  return {
    data: state.newsAndArticles.data,
    articlesData: state.articles.data,
    articlesLoading: state.articles.loading,
    articlesError: state.articles.error,
    loading: state.newsAndArticles.loading,
    error: state.newsAndArticles.error
  };
};
export const NewsConatiner = connect(mapStateToProps)(News);
