import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      MozoPizza
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const MainLayout = ({ children }) => (
  <div>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth="lg">
      <Toolbar />
      {children}
      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
