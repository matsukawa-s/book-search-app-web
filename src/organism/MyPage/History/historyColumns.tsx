import { Typography } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Book } from '../../../type';

const historyColumns: GridColDef[] = [
  {
    field: 'lendingTime',
    headerName: '借りた日',
    headerAlign: 'center',
    width: 200,
  },
  {
    field: 'returnTime',
    headerName: '返却日',
    headerAlign: 'center',
    width: 200,
  },
  {
    field: 'book',
    headerName: '書籍名',
    headerAlign: 'center',
    width: 200,
    renderCell: (param: GridRenderCellParams<Book, History>) => (
      <>
        <Typography>{param.value.name}</Typography>
      </>
    ),
  },
];
export default historyColumns;
