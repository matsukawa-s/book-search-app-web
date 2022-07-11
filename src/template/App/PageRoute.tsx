import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useContext, VFC } from 'react';
import DataGridDemo from '../../organism/BookTable/BookTable';
import Detail from '../../organism/Detail/Detail';
import Lendings from '../../organism/MyPage/Lending/Lending';
import authContext from '../../context/authContext';
import HistoryPage from '../../organism/MyPage/History/HistoryPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useContext(authContext);
  const location = useLocation();

  if (auth === undefined || auth.auth === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const PageRoute: VFC = () => (
  <>
    <Routes>
      <Route
        path="/books"
        element={
          <RequireAuth>
            <DataGridDemo />
          </RequireAuth>
        }
      />
      <Route
        path="/books/:id"
        element={
          <RequireAuth>
            <Detail />
          </RequireAuth>
        }
      />
      <Route
        path="/books/lending"
        element={
          <RequireAuth>
            <Lendings />
          </RequireAuth>
        }
      />
      <Route
        path="/books/history"
        element={
          <RequireAuth>
            <HistoryPage />
          </RequireAuth>
        }
      />
    </Routes>
  </>
);

export default PageRoute;
