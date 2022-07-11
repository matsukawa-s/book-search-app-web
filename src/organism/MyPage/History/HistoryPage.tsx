import { DataGrid } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import authContext from '../../../context/authContext';
import historyColumns from './historyColumns';
import { History } from '../../../type';
import historyData from './Module/HistoryModule';

const HistoryPage: React.FC = () => {
  const auth = useContext(authContext);
  const [historyBook, setHistoryBook] = React.useState<History[]>([]);

  // 履歴ページ取得処理
  const history = async () => {
    const response = await historyData(auth.auth);

    setHistoryBook(response.data);
  };

  React.useEffect(() => {
    void history();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 履歴が未定義の場合はローディングするようにする
  if (historyBook === undefined) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <DataGrid rows={historyBook} columns={historyColumns} pageSize={5} />
    </>
  );
};
export default HistoryPage;
