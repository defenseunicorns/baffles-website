import { Box, Link, styled, Typography } from '@mui/material';
import { namedLinks } from '../../../assets/data/navLinks';
import DuLogo from '../../../assets/png/full-du-logo.png';
import React, { ReactElement } from 'react';

interface MaintainedByProps {
  tagLine: string;
}

const MaintainerSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: relative;
  overflow: hidden;
` as typeof Box;

function SupportBy({ tagLine }: MaintainedByProps): ReactElement {
  return (
    <MaintainerSection
      component="section"
      sx={{
        height: { xs: '520px', md: '405px' },
        width: { xs: '100%', md: '735px' },
      }}
    >
      <Box
        textAlign={'center'}
        flexDirection="column"
        gap={'16px'}
        display="flex"
      >
        <Typography variant="h5">{tagLine}</Typography>
        <Link
          href={namedLinks.defenseUnicorns.url}
          target={namedLinks.defenseUnicorns.target}
          rel={namedLinks.defenseUnicorns.rel}
          title={namedLinks.defenseUnicorns.text}
        >
          <Box
            component="img"
            src={DuLogo}
            alt={namedLinks.defenseUnicorns.text}
            sx={{
              width: { xs: '280px', md: '320px' },
              height: { xs: '60px', md: '68.4px' },
            }}
          />
        </Link>
      </Box>
    </MaintainerSection>
  );
}

export default SupportBy;
