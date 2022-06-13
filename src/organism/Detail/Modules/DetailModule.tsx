import axios from 'axios';
import { Book } from '../../../type';

export type Detail = {
  isSuccess: boolean;
  messages: string;
  data: Book;
};

const success = (data: Book): Detail => ({
  isSuccess: true,
  messages: '',
  data,
});

const failed = (): Detail => ({
  isSuccess: false,
  messages: '',
  data: {
    id: 0,
    isbnCode: '',
    name: '',
    number: 0,
    imagePath: '',
    link: null,
    tags: [],
    genres: [],
    booksCount: 0,
  },
});

const fetchData = async (auth: string, id: string): Promise<Detail> => {
  try {
    console.log(id);
    const res = await axios.get(`http://localhost:8080/books/${id}`, {
      headers: {
        Authorization: auth,
      },
    });

    return success(res.data);
  } catch (error) {
    return failed();
  }
};

export default fetchData;
