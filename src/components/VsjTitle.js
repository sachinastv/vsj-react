import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function VsjTitle(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

VsjTitle.propTypes = {
  children: PropTypes.node,
};

export default VsjTitle;