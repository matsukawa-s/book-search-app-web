import * as React from 'react';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import PaginationRounded from '../molucules/Pagenation';

import DataGridDemo from '../molucules/table';

const drawerWidth = 240;

const ClippedDrawer: React.FC = () => (
  <Grid container>
    <Grid item xs={2}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />

        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Grid>
    <Grid item xs={10}>
      <DataGridDemo />
    </Grid>
  </Grid>
);
export default ClippedDrawer;
