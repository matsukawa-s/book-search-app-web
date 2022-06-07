import axios from 'axios';
import { Genre } from '../../../type';

export type Category = {
  isSuccess: boolean;
  messages: string;
  data: Genre[];
};

const success = (data: Genre[]): Category => ({
  isSuccess: true,
  messages: '',
  data,
});

const genreData = async (auth: string): Promise<Category> => {
  const genres = await axios.get('http://localhost:8080/genres', {
    headers: {
      Authorization: auth,
    },
  });

  return success(genres.data);
};

export default genreData;
