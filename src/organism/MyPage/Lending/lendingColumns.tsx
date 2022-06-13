import { Typography } from '@mui/material';
import {
  GridColDef,
  GridColumns,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import BlueButton from '../../../parts/BlueButton';
import { Book, Lending } from '../../../type';

type Params = (params: number) => Promise<void>;
// テーブルカラム
const columnsGenerator = (onClick: Params): GridColumns => {
  const lendingColumns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'lendingTime',
      headerName: '借りた日',
      headerAlign: 'center',
      width: 150,
    },
    {
      field: 'book',
      headerName: '書籍名',
      headerAlign: 'center',
      width: 150,
      renderCell: (param: GridRenderCellParams<Book, Lending>) => (
        <>
          <Typography>{param.value.name}</Typography>
        </>
      ),
    },
    {
      field: 'id',
      headerName: '返却',
      headerAlign: 'center',
      editable: false,
      width: 150,
      renderCell: (params: GridRenderCellParams<number, Lending>) => (
        <>
          <BlueButton
            text="返却する"
            onClick={async () => {
              await onClick(params.value);
            }}
          />
        </>
      ),
    },
  ];

  return lendingColumns;
};
export default columnsGenerator;
