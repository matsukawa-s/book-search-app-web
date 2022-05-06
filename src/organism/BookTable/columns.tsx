import { Chip } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Book, Category, Label } from '../../type';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'imagePath',
    headerName: '画像',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    renderCell: (params) => <img src={params.value} alt="" />,
    width: 120,
  },
  {
    field: 'name',
    headerName: '書籍名',
    renderCell: (params: GridRenderCellParams<string, Book>) => (
      <>
        <Link to={`/books/${params.row.id}`}>{params.value}</Link>
      </>
    ),
    width: 300,
  },
  {
    field: 'labels',
    headerName: 'ラベル',
    width: 150,
    editable: true,
    renderCell: (params: GridRenderCellParams<Category[], Book>) => (
      <>
        {params.value.map((param: Category) => (
          <Chip label={param.name} color="primary" />
        ))}
      </>
    ),
  },
  {
    field: 'categories',
    headerName: 'ジャンル',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams<Label[], Book>) => (
      <>
        {params.value.map((param: Label) => (
          <Chip label={param.name} color="primary" />
        ))}
      </>
    ),
  },
  {
    field: 'booksCount',
    headerName: '貸出状況',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
];
export default columns;
