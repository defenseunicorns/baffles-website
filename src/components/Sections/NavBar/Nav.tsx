import NavTab from './NavTabs';
import NavLogo from './NavLogo';
import NavDrawer from './NavDrawer';
import SocialLinks from '../../SocialLinks';
import NavLink from '../../../interfaces/NavLink';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinks } from '../../../assets/data/navLinks';
import onScroll from '../../../hooks/onScroll';
import { PathRequired } from '../../../interfaces/Pathname';
import { hideSmall, hideLarge } from '../../../utils/display';
import { createTabPropsFromNavLink } from '../../../utils/navLink';
import React, { ReactElement, useCallback, useState } from 'react';
import { AppBar, Box, IconButton, Tabs, Toolbar, styled } from '@mui/material';

const TRANSPARENT_ELEVATION = 0;
const TRANSITION_HEIGHT = 65;
const DEFAULT_ELEVATION = 1;

enum AppBarColor {
  SCROLLED = 'inherit',
  TOP = 'transparent',
}

const BafflesAppBar = styled(AppBar)`
  width: 100vw;
  transition: all 0.5s ease-in;
`;

function Nav({ pathname }: PathRequired): ReactElement {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [navElevation, setNavElevation] = useState<number>(
    TRANSPARENT_ELEVATION,
  );
  const [navColor, setNavColor] = useState<AppBarColor>(AppBarColor.TOP);

  const toggleDrawer = useCallback(
    (state: boolean) => (): void => setShowDrawer(state),
    [setShowDrawer],
  );

  onScroll(
    useCallback((): void => {
      if (window.scrollY <= TRANSITION_HEIGHT) {
        setNavColor(AppBarColor.TOP);
        setNavElevation(TRANSPARENT_ELEVATION);
      } else {
        setNavColor(AppBarColor.SCROLLED);
        setNavElevation(DEFAULT_ELEVATION);
      }
    }, [setNavColor]),
  );

  return (
    <>
      <BafflesAppBar
        elevation={navElevation}
        color={navColor}
        position="sticky"
        sx={{ height: { xs: '4rem', md: '5rem' }, margin: 0 }}
      >
        <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
          {/* Mobile between xs and medium */}
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            sx={hideLarge}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLogo />
          <Box
            component="div"
            sx={{ flexDirection: 'row', width: 'fit-content', display: 'flex' }}
          >
            <Tabs value={pathname} aria-label="Navigation Tabs" sx={hideSmall}>
              {navLinks.map((l: NavLink, i: number) => (
                <NavTab key={i} {...createTabPropsFromNavLink(l, i)} />
              ))}
            </Tabs>
            <SocialLinks pathname={pathname} />
          </Box>
        </Toolbar>
      </BafflesAppBar>
      <NavDrawer
        drawerProps={{
          anchor: 'left',
          variant: 'temporary',
          PaperProps: { sx: { width: { xs: '100%', sm: '65%' } } },
          open: showDrawer,
        }}
        closeDrawer={toggleDrawer(false)}
        navLinks={navLinks}
        pathname={pathname}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <SocialLinks pathname={pathname} />
        </Box>
      </NavDrawer>
    </>
  );
}

export default Nav;
