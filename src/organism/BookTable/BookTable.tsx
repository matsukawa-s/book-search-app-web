import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios, { AxiosResponse } from 'axios';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import { useContext } from 'react';
import { Book, Genre, Tag } from '../../type';
import BlueButton from '../../parts/BlueButton';
import columns from './columns';
import authContext from '../../context/authContext';

const DataGridDemo: React.FC = () => {
  const auth = useContext(authContext);
  const [books, setBooks] = React.useState<Book[]>([]);
  const searchValue = React.useRef<HTMLInputElement>(null);
  const [genresValue, setGenresValue] = React.useState('');
  const [genresName, setGenresName] = React.useState<Genre[]>([]);
  const [tagName, setTagName] = React.useState<Tag[]>([]);
  const [tagValue, setTagValue] = React.useState('');

  const handleGenresChange = (event: SelectChangeEvent) => {
    setGenresValue(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTagValue(event.target.value);
  };

  // 本の一覧取得処理
  React.useEffect(() => {
    const fetchData = async () => {
      const res: AxiosResponse<Book[]> = await axios.get(
        'http://localhost:8080/books',
        {
          headers: {
            Authorization: auth.auth,
          },
        },
      );

      setBooks(res.data);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [auth.auth]);

  // 検索結果取得処理
  const searchData = async () => {
    const search = await axios.get('http://localhost:8080/books/search', {
      params: {
        name: searchValue.current?.value,
        tag: tagValue.length <= 0 ? undefined : tagValue,
        genre: genresValue.length <= 0 ? undefined : genresValue,
      },
      headers: {
        Authorization: auth.auth,
      },
    });
    setBooks(search.data);
  };

  // カテゴリー一覧取得
  React.useEffect(() => {
    const genreData = async () => {
      const genres: AxiosResponse<Genre[]> = await axios.get(
        'http://localhost:8080/books/genres',
        {
          headers: {
            Authorization: auth.auth,
          },
        },
      );

      setGenresName(genres.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    genreData();
  });

  // ラベル取得
  React.useEffect(() => {
    const tagData = async () => {
      const tags: AxiosResponse<Tag[]> = await axios.get(
        'http://localhost:8080/books/tags',
        {
          headers: {
            Authorization: auth.auth,
          },
        },
      );

      setTagName(tags.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    tagData();
  }, [auth.auth]);

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <InputLabel>難易度</InputLabel>
          <Select value={tagValue} label="難易度" onChange={handleChange}>
            {tagName?.map((tag) => (
              <MenuItem value={tag.id}>{tag.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
          <InputLabel>カテゴリー</InputLabel>
          <Select
            value={genresValue}
            label="カテゴリー"
            onChange={handleGenresChange}
          >
            {genresName?.map((genre) => (
              <MenuItem value={genre.id}>{genre.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField inputRef={searchValue} sx={{ m: 1, minWidth: 130 }} />
        <BlueButton text="検索" onClick={searchData} />
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
};
export default DataGridDemo;
