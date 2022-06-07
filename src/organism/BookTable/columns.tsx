import { Chip } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Book, Genre, Tag } from '../../type';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'imagePath',
    headerName: '画像',
    sortable: false,
    headerAlign: 'center',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    renderCell: (params) => <img src={params.value} alt="" />,
    width: 400,
  },
  {
    field: 'name',
    headerName: '書籍名',
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<string, Book>) => (
      <>
        <Link to={`/books/${params.row.id}`}>{params.value}</Link>
      </>
    ),
    width: 300,
  },
  {
    field: 'genres',
    headerName: 'ジャンル',
    sortable: false,
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<Genre[], Book>) => (
      <>
        {params.value.map((param: Genre) => (
          <Chip label={param.name} color="primary" />
        ))}
      </>
    ),
  },
  {
    field: 'tags',
    headerName: 'ラベル',
    sortable: false,
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<Tag[], Book>) => (
      <>
        {params.value.map((param: Tag) => (
          <Chip label={param.name} color="primary" />
        ))}
      </>
    ),
  },
  {
    field: 'booksCount',
    headerName: '貸出残量',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    align: 'center',
    headerAlign: 'center',
  },
];
export default columns;
