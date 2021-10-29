import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    'JAVA',
    'https://th.bing.com/th/id/OIP.D0ZsRhTh6cW1gyLCFmbcwQHaEm?pid=ImgDet&rs=1sample.jpg',
    '易',
    'JAVA',
    '〇',
  ),
  createData(
    'HTML',
    'https://th.bing.com/th/id/OIP.D0ZsRhTh6cW1gyLCFmbcwQHaEm?pid=ImgDet&rs=1',
    '易',
    'WEB',
    '×',
  ),
  createData(
    'CSS',
    'https://th.bing.com/th/id/OIP.D0ZsRhTh6cW1gyLCFmbcwQHaEm?pid=ImgDet&rs=1',
    '易',
    'WEB',
    '〇',
  ),
  createData(
    'React',
    'https://th.bing.com/th/id/OIP.D0ZsRhTh6cW1gyLCFmbcwQHaEm?pid=ImgDet&rs=1',
    '易',
    'WEB',
    '〇',
  ),
  createData(
    'GO',
    'https://th.bing.com/th/id/OIP.D0ZsRhTh6cW1gyLCFmbcwQHaEm?pid=ImgDet&rs=1',
    '易',
    'JAVA',
    '〇',
  ),
];
const BasicTable: React.FC = () => (
  <Table sx={{ minWidth: 1200 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="center">画像</TableCell>
        <TableCell align="center">書籍名</TableCell>
        <TableCell align="center">難易度</TableCell>
        <TableCell align="center">ジャンル</TableCell>
        <TableCell align="center">貸借状態</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <div className="img">
              <img src={row.calories} alt="サンプル画像" />
            </div>
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="center">{row.fat}</TableCell>
          <TableCell align="center">{row.carbs}</TableCell>
          <TableCell align="center">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
export default BasicTable;
