import { Typography } from '@mui/material';
import { GridColDef, DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Lending } from '../../type';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'lendingTime',
    headerName: '借りた日',
    width: 150,
  },
  {
    field: 'book',
    headerName: '書籍名',
    width: 150,
    renderCell: (param: GridRenderCellParams<Book, Lending>) => (
      <>
        <Typography>{param.value.name}</Typography>
      </>
    ),
  },
];

const Lendings: React.FC = () => {
  const [leadingBook, setLeadingBook] = React.useState<Lending[]>([]);

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

  return (
    <>
      <u>
        <Link to="/books/lending"> 貸出中</Link>
        <Link to="/books/history">貸出履歴</Link>
        新規書籍申請中
      </u>
      <DataGrid rows={leadingBook} columns={columns} pageSize={5} />
    </>
  );
};
export default Lendings;
