import { DataGrid } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import React, { useContext } from 'react';
import authContext from '../../../context/authContext';
import historyColumns from './historyColumns';
import MyPageLink from '../MyPageLink';

const HistoryPage: React.FC = () => {
  const auth = useContext(authContext);
  const [historyBook, setHistoryBook] = React.useState<History[]>([]);

  // マイページ取得処理
  React.useEffect(() => {
    const historyData = async () => {
      const res: AxiosResponse<History[]> = await axios.get(
        'http://localhost:8080/mypage/history',
        {
          headers: {
            Authorization: auth.auth,
          },
        },
      );

      setHistoryBook(res.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    historyData();
  }, [auth.auth]);

  return (
    <>
      <MyPageLink />
      <DataGrid rows={historyBook} columns={historyColumns} pageSize={5} />
    </>
  );
};
export default HistoryPage;
