import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: '画像',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    renderCell: (params) => <img src={params.value} alt="" />,
    width: 120,
  },
  {
    field: 'bookName',
    headerName: '書籍名',
    width: 300,
  },

  {
    field: 'difficulty',
    headerName: '難易度',
    width: 100,
  },
  {
    field: 'Genre',
    headerName: 'ジャンル',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
  {
    field: 'status',
    headerName: '貸出状況',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
  },
];

const data = [
  {
    id: 1,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Jon',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Cersei',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Jaime',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Arya',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 5,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Daenerys',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 6,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: null,
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 7,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Ferrara',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 8,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Rossini',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
  {
    id: 9,
    img: 'https://i.pinimg.com/originals/86/0b/e8/860be829f17e1c9947ed24a68b0b49b2.jpg',
    bookName: 'Harvey',
    difficulty: '易',
    Genre: 'Java',
    status: '〇',
  },
];

const DataGridDemo: React.FC = () => {
  const [pageSize, setPageSize] = React.useState<number>(5);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
};
export default DataGridDemo;
