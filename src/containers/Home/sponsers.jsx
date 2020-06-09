import React from 'react';
import { connect } from 'react-redux';
import { Sponsers } from '../../components/Sponsers';

export const SponsersContainer = ({ sponsers }) => {
  return <Sponsers {...sponsers} />;
};

const mapStateToProps = state => {
  return {
    sponsers: state.sponsers
  };
};

export const SponsersContainerConnect = connect(mapStateToProps)(
  SponsersContainer
);
