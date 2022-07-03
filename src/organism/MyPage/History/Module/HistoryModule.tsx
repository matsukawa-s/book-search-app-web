import axios from 'axios';
import { History } from '../../../../type';

export type HistoryType = {
  isSuccess: boolean;
  messages: string;
  data: History[];
};

const success = (data: History[]): HistoryType => ({
  isSuccess: true,
  messages: '',
  data,
});

const failed = (): HistoryType => ({
  isSuccess: false,
  messages: '',
  data: [],
});

const historyData = async (auth: string): Promise<HistoryType> => {
  try {
    const res = await axios.get('http://localhost:8080/mypage/history', {
      headers: {
        Authorization: auth,
      },
    });

    return success(res.data);
  } catch (error) {
    return failed();
  }
};

export default historyData;
