import { createContext } from 'react';

const authContext = createContext<{
  auth: string;
  setAuth: (value: string) => void;
}>({
  auth: localStorage.getItem('token') || '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: (_) => {},
});
export default authContext;
