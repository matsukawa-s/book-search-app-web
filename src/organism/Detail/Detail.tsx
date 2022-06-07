import React, { useContext, useCallback } from 'react';
import {
  Alert,
  CircularProgress,
  Fab,
  FormControl,
  FormLabel,
  Grid,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { Book } from '../../type';
import ConfirmDialog from '../../parts/Dialog';
import authContext from '../../context/authContext';

import fetchData from './Modules/DetailModule';
import borrwData from './Modules/BorrowModule';
import Header from '../Header';

const Detail: React.FC = () => {
  const auth = useContext(authContext);
  const [book, setBook] = React.useState<Book>();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const urlParams = useParams<{ id: string }>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /**
   * 本の詳細を取得する処理
   */
  const detail = useCallback(async () => {
    if (urlParams.id === undefined) {
      return;
    }
    const response = await fetchData(auth.auth, urlParams.id);

    if (!response.isSuccess) {
      setErrorMessage('本のデータ取得に失敗しました。更新をしてください。');
    }

    setBook(response.data);
  }, [auth.auth, urlParams.id]);

  React.useEffect(() => {
    void detail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 本を借りる処理
   */
  const StatusButton = async () => {
    if (urlParams.id === undefined) {
      return;
    }

    const borrow = await borrwData(auth.auth, urlParams.id);

    if (borrow.isSuccess === false) {
      setErrorMessage(borrow.messages);
      handleClose();

      return;
    }
    setSuccessMessage(borrow.messages);

    void detail();
    handleClose();
  };

  // 本が未定義の場合はローディングするようにする
  if (book === undefined) {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <Header />
      <div>
        {errorMessage.length > 0 ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {successMessage.length > 0 ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </div>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h3">{book.name}</Typography>

          {book.tags.map((tag) => (
            <Typography variant="h4">{tag.name}</Typography>
          ))}
          <FormControl>
            <FormLabel>種類：</FormLabel>
            {book.genres.map((genre) => (
              <Typography variant="h4">{genre.name}</Typography>
            ))}
          </FormControl>

          <FormControl>
            <FormLabel>種類：</FormLabel>
            <Typography variant="h4">貸出残数：{book.booksCount}</Typography>
          </FormControl>

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
      <ConfirmDialog
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
