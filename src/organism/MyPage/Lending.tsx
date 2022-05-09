import { Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { Lending } from '../../type';
import columnsGenerator from './lendingColumns';
import MyPageLink from './MyPageLink';

const Lendings: React.FC = () => {
  const [leadingBook, setLeadingBook] = React.useState<Lending[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [openErrorMessage, setOpenErrorMessage] = React.useState(true);

  // マイページ取得処理
  React.useEffect(() => {
    const lendingData = async () => {
      const res: AxiosResponse<Lending[]> = await axios.get(
        'http://localhost:8080/books/lending',
      );

      setLeadingBook(res.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    lendingData();
  });

  // 返却処理
  const returnButton = async (id: number) => {
    try {
      const returnData: AxiosResponse<Lending> = await axios.post(
        'http://localhost:8080/books/return',
        {
          id,
        },
      );

      if (returnData.data === undefined) {
        setErrorMessage('返却する本がが無い為、返却することが出来ません');

        return;
      }

      setOpenErrorMessage(false);
      setSuccessMessage('返却しました。またのご利用お待ちしています！');
    } catch (error) {
      setErrorMessage('問題が発生がしたため借りることが出来ません。');
    }
  };

  const columns = columnsGenerator(returnButton);

  return (
    <>
      <div>
        {openErrorMessage && errorMessage ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {!openErrorMessage && successMessage ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </div>
      <MyPageLink />
      <DataGrid rows={leadingBook} columns={columns} pageSize={10} />
    </>
  );
};
export default Lendings;
