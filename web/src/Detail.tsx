import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Fab,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { Message } from '@mui/icons-material';
import { Book } from './type';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Detail: React.FC = () => {
  const [book, setBook] = React.useState<Book>();
  const [message, setMessage] = React.useState('');
  const urlParams = useParams<{ id: string }>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    // 本の情報取得処理
    const fetchData = async () => {
      if (urlParams.id === undefined) {
        return;
      }

      const res: AxiosResponse<Book> = await axios.get(
        `http://localhost:8080/books/${urlParams.id}`,
      );

      setBook(res.data);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [urlParams]);

  // 借りる処理
  const StatusButton = async () => {
    const resNumber = await axios.get('http://localhost:8080/books/borrow');

    if (resNumber.status !== 200) {
      setMessage('問題が発生がしたため借りることが出来ません。');

      return;
    }

    if (resNumber.data === 0) {
      setMessage('在庫が無い為、借りることが出来ません');
    }

    setOpen(false);
    setMessage('借りました。期限は2週間です!');

    // 本の情報再取得
    const fetchData = async () => {
      if (urlParams.id === undefined) {
        return;
      }

      const res: AxiosResponse<Book> = await axios.get(
        `http://localhost:8080/books/${urlParams.id}`,
      );

      setBook(res.data);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  };

  if (book === undefined) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        <Message>{message}</Message>
        <Grid item>
          <Typography variant="h3">{book.name}</Typography>
          {/* <Typography variant="h4">{substance}</Typography> */}

          {book.labels.map((label) => (
            <Typography variant="h4">難易度：{label.name}</Typography>
          ))}

          {book.categories.map((category) => (
            <Typography variant="h4">種類：{category.name}</Typography>
          ))}

          {/* <div>貸出：{book.}</div> */}

          <Box sx={{ margin: 1 }}>
            {/* <Typography variant="h6" gutterBottom component="div">
                履歴
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>日付</TableCell>
                      <TableCell>名前</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody />
                </Table>
              </Typography> */}
          </Box>
        </Grid>
      </Grid>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        color="primary"
        variant="extended"
        onClick={handleOpen}
      >
        借りる
      </Fab>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            借りますか？
          </Typography>
          <Button onClick={StatusButton}>はい</Button>
          <Button onClick={handleClose}>いいえ</Button>
        </Box>
      </Modal>
    </>
  );
};
export default Detail;
