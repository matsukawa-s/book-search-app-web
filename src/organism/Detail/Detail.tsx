import React from 'react';
import {
  Alert,
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
import { Book } from '../../type';

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
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [openErrorMessage, setOpenErrorMessage] = React.useState(true);
  const urlParams = useParams<{ id: string }>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 本の詳細を取得する処理
  const fetchData = async (id: string) => {
    const res: AxiosResponse<Book> = await axios.get(
      `http://localhost:8080/books/${id}`,
    );

    setBook(res.data);
  };

  React.useEffect(() => {
    if (urlParams.id === undefined) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData(urlParams.id);
  }, [urlParams]);

  // 借りる処理
  const StatusButton = async () => {
    if (urlParams.id === undefined) {
      return;
    }

    try {
      const resNumber = await axios.post('http://localhost:8080/books/borrow', {
        id: Number(urlParams.id),
      });

      if (resNumber.data === 0) {
        setErrorMessage('在庫が無い為、借りることが出来ません');
        handleClose();

        return;
      }

      handleClose();
      setOpenErrorMessage(false);
      setSuccessMessage('借りました。期限は2週間です!');

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchData(urlParams.id);
    } catch (error) {
      setErrorMessage('問題が発生がしたため借りることが出来ません。');
      handleClose();
    }
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
      <div>
        {openErrorMessage && errorMessage ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {!openErrorMessage && successMessage ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h3">{book.name}</Typography>
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
