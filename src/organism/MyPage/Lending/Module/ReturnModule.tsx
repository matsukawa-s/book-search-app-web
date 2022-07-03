import axios from 'axios';

export type ReplacementType = {
  isSuccess: boolean;
  message: string;
};

const success = (message: string): ReplacementType => ({
  isSuccess: true,
  message,
});

const failed = (message: string): ReplacementType => ({
  isSuccess: false,
  message,
});

const replacementData = async (
  id: number,
  auth: string,
): Promise<ReplacementType> => {
  try {
    const replacement = await axios.post('http://localhost:8080/books/return', {
      id,
      headers: {
        Authorization: auth,
      },
    });

    if (replacement.data === undefined) {
      return failed('返却する本がが無い為、返却することが出来ません');
    }

    return success('返却しました。またのご利用お待ちしています！');
  } catch (error) {
    return failed('問題が発生がしたため借りることが出来ません。');
  }
};

export default replacementData;
