import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles, Theme, useTheme } from '@material-ui/core';

const useStyles = (theme: Theme) =>
  makeStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbarMargin: theme.mixins.toolbar,
  });

const Header: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme)();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            社内図書システム
          </Typography>
          田中太郎
          <Button color="inherit">Loout</Button>
        </Toolbar>
      </AppBar>
      <div className={styles.toolbarMargin} />
    </>
  );
};
export default Header;
