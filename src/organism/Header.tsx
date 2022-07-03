import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import authContext from '../context/authContext';

const Header: React.FC = () => {
  const auth = React.useContext(authContext);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {auth ? (
              <Link to="/books">図書システム</Link>
            ) : (
              <Link to="/login">図書システム</Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
