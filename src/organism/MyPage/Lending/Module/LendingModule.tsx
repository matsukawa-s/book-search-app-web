import axios from 'axios';
import { Lending } from '../../../../type';

export type LendingType = {
  isSuccess: boolean;
  messages: string;
  data: Lending[];
};

const success = (data: Lending[]): LendingType => ({
  isSuccess: true,
  messages: '',
  data,
});

const failed = (): LendingType => ({
  isSuccess: false,
  messages: '',
  data: [],
});

const lendingData = async (auth: string): Promise<LendingType> => {
  try {
    const res = await axios.get('http://localhost:8080/mypage/lending', {
      headers: {
        Authorization: auth,
      },
    });

    return success(res.data);
  } catch (error) {
    return failed();
  }
};

export default lendingData;
