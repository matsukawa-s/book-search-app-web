import axios from 'axios';
import { Tag } from '../../../type';

export type Labels = {
  isSuccess: boolean;
  messages: string;
  data: Tag[];
};

const success = (data: Tag[]): Labels => ({
  isSuccess: true,
  messages: '',
  data,
});

const tagData = async (auth: string): Promise<Labels> => {
  const tags = await axios.get('http://localhost:8080/tags', {
    headers: {
      Authorization: auth,
    },
  });

  return success(tags.data);
};

export default tagData;
