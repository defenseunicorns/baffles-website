import { Box, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

const FooterContainer = styled(Box)`
  height: 243px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 41px;
`;

function Footer(): ReactElement {
  return (
    <FooterContainer sx={{ mb: { xs: '93px', md: '110px' } }}>
      <Typography variant="caption">
        Copyright © 2022 Baffles Project. All rights reserved
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
