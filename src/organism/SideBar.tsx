import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

const SideBar: VFC = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: 240,
        boxSizing: 'border-box',
      },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        <Link to="/books/history">
          <ListItem key="マイページ" disablePadding>
            <ListItemButton>
              <ListItemText primary="マイページ" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/books/history">
          <ListItem key="履歴" disablePadding>
            <ListItemButton>
              <ListItemText primary="履歴" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  </Drawer>
);

export default SideBar;
