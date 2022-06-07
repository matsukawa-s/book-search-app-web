import axios from 'axios';
import { Book } from '../../../type';

export type Fetch = {
  isSuccess: boolean;
  messages: string;
  data: Book[];
};

const success = (data: Book[]): Fetch => ({
  isSuccess: true,
  messages: '',
  data,
});

const failed = (messages: string): Fetch => ({
  isSuccess: true,
  messages,
  data: [],
});

const fetchData = async (auth: string): Promise<Fetch> => {
  try {
    const res = await axios.get('http://localhost:8080/books', {
      headers: {
        Authorization: auth,
      },
    });

    return success(res.data);
  } catch (error) {
    return failed('問題が発生しました。リロードしてください。');
  }
};

export default fetchData;
