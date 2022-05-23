import { DataGrid } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import historyColumns from './historyColumns';
import MyPageLink from './MyPageLink';

const History: React.FC = () => {
  const [historyBook, setHistoryBook] = React.useState<History[]>([]);

  // マイページ取得処理
  React.useEffect(() => {
    const historyData = async () => {
      const res: AxiosResponse<History[]> = await axios.get(
        'http://localhost:8080/books/history',
      );

      setHistoryBook(res.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    historyData();
  });

  return (
    <>
      <MyPageLink />
      <DataGrid rows={historyBook} columns={historyColumns} pageSize={5} />
    </>
  );
};
export default History;
