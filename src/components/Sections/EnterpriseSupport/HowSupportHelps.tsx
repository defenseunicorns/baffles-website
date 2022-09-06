import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';

function HowSupportHelps(): ReactElement {
  return (
    <>
      <Typography
        marginBottom={'32px'}
        sx={{
          typography: { xs: 'h2', md: 'h1' },
        }}
      >
        Enterprise Support
      </Typography>
      <Typography variant="h6">
        Baffles will always be free software, but some missions are too
        important to only rely on a community of volunteers. Have a question or
        a potential need? Use this form to contact us!
      </Typography>
    </>
  );
}

export default HowSupportHelps;
