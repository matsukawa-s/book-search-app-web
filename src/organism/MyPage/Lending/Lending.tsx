import { Alert } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import authContext from '../../../context/authContext';
import { Lending } from '../../../type';
import columnsGenerator from './lendingColumns';
import lendingData from './Module/LendingModule';
import replacementData from './Module/ReturnModule';

const Lendings: React.FC = () => {
  const auth = useContext(authContext);
  const [leadingBook, setLeadingBook] = React.useState<Lending[]>([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  // マイページ取得処理
  const lending = async () => {
    const response = await lendingData(auth.auth);

    setLeadingBook(response.data);
  };

  React.useEffect(() => {
    void lending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 返却処理
  const returnButton = async (
    params: GridRenderCellParams<number, Lending>,
  ) => {
    const replacement = await replacementData(params.row.id, auth.auth);

    if (!replacement.isSuccess) {
      setErrorMessage(replacement.message);
    }

    setSuccessMessage(replacement.message);
  };

  const columns = columnsGenerator(returnButton);

  return (
    <>
      <div>
        {errorMessage.length > 0 ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {successMessage.length > 0 ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </div>
      <DataGrid rows={leadingBook} columns={columns} pageSize={10} />
    </>
  );
};
export default Lendings;
