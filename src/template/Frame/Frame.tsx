import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
// import LoginRoute from '../App/LoginRoute';
import Header from '../../organism/Header';
import SideBar from '../../organism/SideBar';
import PageRoute from '../App/PageRoute';

const Frame = () => (
  <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <PageRoute />
      </Box>
    </Box>
  </>
);

export default Frame;
