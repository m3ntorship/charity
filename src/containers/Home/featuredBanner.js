import { FeaturedBanner } from '../../components/FeaturedBanner';
import { connect } from 'react-redux';



const mapStateToProps = ({ featuredBanner: { data, dataError, loading } }) => {
  return {
    data,
    loading,
    dataError
  };
};


export default connect(mapStateToProps)(FeaturedBanner);


