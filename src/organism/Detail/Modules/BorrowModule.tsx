import axios from 'axios';

export type Borrow = {
  isSuccess: boolean;
  messages: string;
};

const success = (messages: string): Borrow => ({
  isSuccess: true,
  messages,
});

const failed = (messages: string): Borrow => ({
  isSuccess: false,
  messages,
});

const borrwData = async (id: string, auth: string): Promise<Borrow> => {
  try {
    const resNumber = await axios.post('http://localhost:8080/books/borrow', {
      id: Number(id),
      headers: {
        Authorization: auth,
      },
    });

    if (resNumber.data === 0) {
      return failed('在庫が無い為、借りることが出来ません');
    }

    return success('借りました。期限は2週間です!');
  } catch (error) {
    return failed('問題が発生がしたため借りることが出来ません。');
  }
};
export default borrwData;
