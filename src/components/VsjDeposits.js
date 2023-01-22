import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import VsjTitle from './VsjTitle';

function preventDefault(event) {
  event.preventDefault();
}

export default function VsjDeposits() {
  return (
    <React.Fragment>
      <VsjTitle>Recent Deposits</VsjTitle>
      <Typography component="p" variant="h4">
      ₹3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 22 January, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}