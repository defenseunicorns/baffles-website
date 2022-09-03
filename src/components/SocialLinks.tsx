import React, { ReactElement } from 'react';
import { GitHub } from '@mui/icons-material';
import { namedLinks } from '../assets/data/navLinks';
import { PathOptional } from '../interfaces/Pathname';
import { IconButton, SxProps, Theme } from '@mui/material';

interface SocialLinksProps extends PathOptional {
  githubSx?: SxProps<Theme>;
}

function SocialLinks({ githubSx }: SocialLinksProps): ReactElement {
  return (
    <>
      <IconButton
        size="medium"
        sx={{ ...githubSx, padding: '12px' }}
        href={namedLinks.github.url}
        title={namedLinks.github.text}
        target={namedLinks.github.target}
        rel={namedLinks.github.rel}
      >
        <GitHub></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
