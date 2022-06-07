import axios from 'axios';
import { Book } from '../../../type';

export type Search = {
  isSuccess: boolean;
  messages: string;
  data: Book[];
};

const success = (data: Book[]): Search => ({
  isSuccess: true,
  messages: '',
  data,
});

const searchData = async (
  auth: string,
  tagValue: string,
  genresValue: string,
  searchValue: React.RefObject<HTMLInputElement>,
): Promise<Search> => {
  const search = await axios.get('http://localhost:8080/books', {
    params: {
      name: searchValue.current?.value,
      tag: tagValue.length <= 0 ? undefined : tagValue,
      genre: genresValue.length <= 0 ? undefined : genresValue,
    },
    headers: {
      Authorization: auth,
    },
  });

  return success(search.data);
};

export default searchData;
