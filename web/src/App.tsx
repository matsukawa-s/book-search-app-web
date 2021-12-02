import React from 'react';
import './App.css';
import ButtonAppBar from './molucules/AppBar';
import ClippedDrawer from './organism/Drawer';

// import Detail from './Detail';
// import DataGridDemo from './molucules/table';
// import Page from './page';

const App: React.FC = () => (
  <>
    <ButtonAppBar />

    <ClippedDrawer />
  </>
);

export default App;
