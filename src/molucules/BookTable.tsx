import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Chip } from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';

type Book = {
  id: number;
  isbnCode: string;
  name: string;
  number: number;
  imagePath: null;
  link: null;
  labels: Label[];
  categories: Category[];
};

type Label = {
  id: number;
  name: string;
  sortNumber: number;
  labelGroupId: number;
};

type Category = {
  id: number;
  name: string;
  sortNumber: number;
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
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
    field: 'status',
    headerName: '貸出状況',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
];

export default function DataGridDemo() {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res: AxiosResponse<Book[]> = await axios.get(
        'http://localhost:8080/books',
      );

      setBooks(res.data);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={books}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
      />
    </div>
  );
}
