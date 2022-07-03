import React, { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import authContext from '../../context/authContext';
import Frame from '../Frame/Frame';
// import LoginRoute from './LoginRoute';

const App: React.FC = () => {
  const auth1 = useContext(authContext);
  const [auth, setAuth] = useState(auth1.auth);
  const value = {
    auth,
    setAuth: (a: string) => {
      localStorage.setItem('token', a);
      setAuth(a);
    },
  };

  return (
    <>
      <authContext.Provider value={value}>
        <BrowserRouter>
          <Frame />
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
};

export default App;
