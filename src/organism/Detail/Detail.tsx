import React from 'react';
import { Alert, CircularProgress, Fab, Grid, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { Book } from '../../type';
import ConfirmModal from '../../parts/Modal';

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

  // 本の履歴取得処理
  // React.useEffect(() => {
  //   const BookHistoryData = async (id: string) => {
  //     const res: AxiosResponse<Book> = await axios.get(
  //       `http://localhost:8080/bookhistory/${id}`,
  //     );

  //     setHistory(res.data);
  //   };
  //   if (urlParams.id === undefined) {
  //     return;
  //   }
  //   // eslint-disable-next-line @typescript-eslint/no-floating-promises
  //   BookHistoryData(urlParams.id);
  // });

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
          {book.tags.map((tag) => (
            <Typography variant="h4">難易度：{tag.name}</Typography>
          ))}

          {book.genres.map((genre) => (
            <Typography variant="h4">種類：{genre.name}</Typography>
          ))}

          <Typography variant="h4">貸出残数：{book.booksCount}</Typography>

          {/* <Box sx={{ margin: 1 }}>
            <Typography variant="h6">履歴</Typography>
            <DataGrid
              rows={history}
              columns={columns}
              disableSelectionOnClick
              pageSize={5}
            />
          </Box> */}
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
      <ConfirmModal
        open={open}
        buttonTextLeft="はい"
        buttonTextRight="いいえ"
        onClickLeft={StatusButton}
        onClickRight={handleClose}
        text="借りますか？"
      />
    </>
  );
};
export default Detail;
