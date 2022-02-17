import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from '../../organism/Detail/Detail';
import DataGridDemo from '../../organism/BookTable/BookTable';
import Header from '../../organism/Header';
import Leadings from '../../organism/MyPage/Leading';

const App: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<DataGridDemo />} />
        <Route path="/books/:id" element={<Detail />} />
        <Route path="/books/lending" element={<Leadings />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
