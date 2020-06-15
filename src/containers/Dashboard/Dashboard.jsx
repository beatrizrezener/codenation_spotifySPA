import React from 'react';
import PropTypes from 'prop-types';

import { Player } from '../';
import './Dashboard.scss';

const Dashboard = ({ children }) => {

  return (
    <div
      className="dashboard"
      data-testid="dashboard"
    >
      {children}
      <Player />
    </div>
  );
};

Dashboard.defaultProps = {
  children: [],
}

Dashboard.propTypes = {
  children: PropTypes.node,
}

export default Dashboard;

