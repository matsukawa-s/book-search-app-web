import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import { Book } from '../../type';
import BlueButton from '../../parts/BlueButton';
import columns from './columns';

export default function DataGridDemo() {
  const [books, setBooks] = React.useState<Book[]>([]);
  const searchValue = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory((event.target as HTMLInputElement).value);
  };

  // 本の一覧取得処理
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

  // 検索結果取得処理
  const searchData = async () => {
    const search = await axios.get('http://localhost:8080/books/search', {
      params: {
        name: searchValue.current?.value,
        label: value.length <= 0 ? undefined : value,
        category: category.length <= 0 ? undefined : category,
      },
    });
    setBooks(search.data);
  };

  return (
    <>
      <div>
        <FormControl>
          <Select
            value={category}
            label="カテゴリー"
            onChange={handleCategoryChange}
          >
            <MenuItem value="1">Java</MenuItem>
            <MenuItem value="2">PHP</MenuItem>
            <MenuItem value="3">Javascript</MenuItem>
            <MenuItem value="4">C#</MenuItem>
          </Select>
        </FormControl>
        <TextField inputRef={searchValue} />
        <BlueButton text="検索" onClick={searchData} />
        <FormControl>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel value="1" control={<Radio />} label="初級" />
            <FormControlLabel value="2" control={<Radio />} label="中級" />
            <FormControlLabel value="3" control={<Radio />} label="上級" />
          </RadioGroup>
        </FormControl>
      </div>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={books}
          columns={columns}
          disableSelectionOnClick
          pageSize={5}
        />
      </div>
    </>
  );
}
