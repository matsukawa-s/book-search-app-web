import axios, { AxiosResponse } from 'axios';

export type HistoryData = {
  isSuccess: boolean;
  messages: string;
  data: History[];
};

const success = (data: History[]): HistoryData => ({
  isSuccess: true,
  messages: '',
  data,
});

const failed = (): HistoryData => ({
  isSuccess: true,
  messages: '',
  data: [],
});

const historyData = async (auth: string) => {
  try {
    const res: AxiosResponse<History[]> = await axios.get(
      'http://localhost:8080/books/history',
      {
        headers: {
          Authorization: auth,
        },
      },
    );

    return success(res.data);
  } catch (error) {
    return failed();
  }
};
export default historyData;
