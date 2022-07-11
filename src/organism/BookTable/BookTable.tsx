import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { SelectChangeEvent, TextField } from '@mui/material';
import { useContext } from 'react';

import { Book, Genre, Tag } from '../../type';
import BlueButton from '../../parts/BlueButton';
import columns from './columns';
import authContext from '../../context/authContext';
import SelectBox from '../../parts/Select';

import fetchData from './Modules/fetch';
import searchData from './Modules/search';
import genreData from './Modules/genre';
import tagData from './Modules/tag';

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

  /** 本の一覧取得を行う処理 */
  const fetchApi = async () => {
    const fetchResult = await fetchData(auth.auth);

    /** TODO:メッセージ領域追加後行う */
    // if(!fetchResult.isSuccess){

    // }
    setBooks(fetchResult.data);
  };

  /**  検索結果取得処理 */
  const searchApi = async () => {
    const searchResult = await searchData(
      auth.auth,
      tagValue,
      genresValue,
      searchValue,
    );
    setBooks(searchResult.data);
  };

  /** カテゴリー一覧取得 */
  const GenreApi = async () => {
    const genreResult = await genreData(auth.auth);
    setGenresName(genreResult.data);
  };

  const TagApi = async () => {
    const tagResult = await tagData(auth.auth);
    setTagName(tagResult.data);
  };

  React.useEffect(() => {
    void fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    void GenreApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ラベル取得
  React.useEffect(() => {
    void TagApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <SelectBox
          InputLabelName="難易度"
          genresName={tagName}
          label="難易度"
          onChange={handleChange}
          value={tagValue}
        />
        <SelectBox
          InputLabelName="カテゴリー"
          genresName={genresName}
          label="カテゴリー"
          onChange={handleGenresChange}
          value={genresValue}
        />
        <TextField inputRef={searchValue} sx={{ m: 1, minWidth: 130 }} />
        <BlueButton text="検索" onClick={searchApi} />
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
