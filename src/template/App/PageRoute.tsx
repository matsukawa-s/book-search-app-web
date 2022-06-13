import { Route, Routes } from 'react-router-dom';
import { VFC } from 'react';
import DataGridDemo from '../../organism/BookTable/BookTable';
import Detail from '../../organism/Detail/Detail';
import Lendings from '../../organism/MyPage/Lending/Lending';
import HistoryPage from '../../organism/MyPage/History/History';

const PageRoute: VFC = () => (
  <>
    <Routes>
      <Route path="/books" element={<DataGridDemo />} />
      <Route path="/books/:id" element={<Detail />} />
      <Route path="/books/lending" element={<Lendings />} />
      <Route path="/books/history" element={<HistoryPage />} />
    </Routes>
  </>
);

export default PageRoute;
