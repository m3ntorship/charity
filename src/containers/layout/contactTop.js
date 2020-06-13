import { ContactTop } from '../../components/ContactTop';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    data: state.contactTop.data,
    loading: state.contactTop.loading,
    error: state.contactTop.error
  };
};

export const ContactTopContainer = connect(mapStateToProps)(ContactTop);
