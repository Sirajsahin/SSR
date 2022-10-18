import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ route }) => {
  return (
    <>
      <Header />
      <div className="con">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
