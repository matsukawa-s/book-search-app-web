import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Frame from '../Frame/Frame';
// import authContext from '../../context/authContext';
// import DataGridDemo from '../../organism/BookTable/BookTable';
// import Detail from '../../organism/Detail/Detail';
// import HistoryPage from '../../organism/MyPage/History/HistoryPage';
// import Lendings from '../../organism/MyPage/Lending/Lending';
import Login from '../Login/Login';
// import PageRoute from './PageRoute';

// function RequireAuth({ children }: { children: JSX.Element }) {
//   const auth = useContext(authContext);
//   const location = useLocation();

//   if (auth === undefined || auth.auth === '') {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }

const LoginRoute: VFC = () => (
  <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Frame />} />
    </Routes>
  </>
);

export default LoginRoute;
