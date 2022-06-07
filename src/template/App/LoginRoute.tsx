import { useContext, VFC } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import DataGridDemo from '../../organism/BookTable/BookTable';
import Detail from '../../organism/Detail/Detail';
import Lendings from '../../organism/MyPage/Lending/Lending';
import Login from '../Login/Login';
import History from '../../organism/MyPage/History/History';
import authContext from '../../context/authContext';
// import PageRoute from './PageRoute';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useContext(authContext);
  const location = useLocation();

  if (auth === undefined || auth.auth === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const LoginRoute: VFC = () => (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
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
            <History />
          </RequireAuth>
        }
      />
    </Routes>
  </>
);

export default LoginRoute;
