import React, { ReactElement, PropsWithChildren } from 'react';
import Nav from './Sections/NavBar/Nav';
import getLocationPath from '../hooks/getLocationPath';
import Footer from './Sections/Footer';
import SiteHelmet from './SiteHelmet';
import { Box } from '@mui/material';
import '../assets/css/global.css';
import { SeoProps } from './seo';

export interface PageLayoutProps {
  seoProps?: SeoProps;
}

function PageLayout(props: PropsWithChildren<PageLayoutProps>): ReactElement {
  const [pathname, pathUrl] = getLocationPath();

  return (
    <>
      <SiteHelmet {...props.seoProps} route={pathname} />
      <Nav pathname={pathUrl} />
      <Box
        component="main"
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '72px',
        }}
      >
        {props.children}
        <Footer />
      </Box>
    </>
  );
}

export default PageLayout;
