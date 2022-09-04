import { hideLarge, hideSmall } from '../../../utils/display';
import BafflesLogo from '../../../assets/svg/baffles-logo.svg';
import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { Link } from 'gatsby';

function NavLogo(): ReactElement {
  return (
    <Link to="/">
      <Box sx={hideSmall}>
        <BafflesLogo />
      </Box>
      <Box sx={hideLarge}>
        <BafflesLogo />
      </Box>
    </Link>
  );
}

export default NavLogo;
