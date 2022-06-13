import React, { useContext, useCallback } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Drawer,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

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

    const borrow = await borrwData(urlParams.id, auth.auth);

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

  // 本の説明
  const card = (
    <CardContent>
      <Typography sx={{ fontSize: 18 }}>この本の概略</Typography>
      <Typography
        sx={{ fontSize: 15 }}
        color="text.secondary"
        component="div"
        marginTop={1}
      >
        愛媛に暮らす中学三年生・青井葦人（あおいアシト）。粗削りながら、強烈なサッカーの才能を秘めているアシトだったが、まっすぐすぎる性格が災いして、大きな挫折を経験することに―――そんなアシトの前に、東京にある強豪Ｊクラブ「東京シティ・エスペリオン」のユースチーム監督・福田達也（ふくだたつや）が現れる。アシトの無限の可能性を見抜いた福田は、東京で開催される自チームのセレクションを受けるよう勧めて！？将来、日本のサッカーに革命を起こすことになる少年の運命は、ここから急速に回り始める！！
      </Typography>
    </CardContent>
  );

  return (
    <Box>
      <Header />
      <Box
        sx={{
          marginLeft: 28,
        }}
      >
        {errorMessage.length > 0 ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {successMessage.length > 0 ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </Box>
      <Box
        sx={{
          marginLeft: 28,
        }}
      >
        <Typography variant="h2">{book.name}</Typography>
      </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <Drawer variant="permanent">
              <List>
                <Link to="/books/history">
                  <ListItem button>
                    <ListItemText primary="トップページ" />
                  </ListItem>
                </Link>
                <Link to="/products">
                  <ListItem button>
                    <ListItemText primary="商品ページ" />
                  </ListItem>
                </Link>
              </List>
            </Drawer>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                width: 500,
                height: 500,

                backgroundColor: 'primary.dark',
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Stack spacing={4}>
              <Stack spacing={10} justifyItems="center" direction="row">
                <Box justifyItems="center">
                  <FormLabel>種類</FormLabel>
                </Box>
                {book.tags.map((tag) => (
                  <Typography variant="h4">{tag.name}</Typography>
                ))}
              </Stack>
              <FormControl>
                <Stack spacing={6} justifyItems="center" direction="row">
                  <FormLabel>カテゴリ</FormLabel>
                  {book.genres.map((genre) => (
                    <>
                      <Typography variant="h4">{genre.name}</Typography>
                    </>
                  ))}
                </Stack>
              </FormControl>

              <FormControl>
                <Stack spacing={7} justifyItems="center" direction="row">
                  <FormLabel>貸出残数</FormLabel>
                  <Typography variant="h4">{book.booksCount}</Typography>
                </Stack>
              </FormControl>
              <Box
                sx={{
                  width: 500,
                  height: 200,

                  backgroundColor: 'primary.dark',
                }}
              />
              <Box>
                <Button variant="contained" onClick={handleOpen} fullWidth>
                  借りる
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '70%',
          height: 270,
          marginTop: 5,
          marginLeft: 28,
        }}
      >
        <Card variant="outlined">{card}</Card>
      </Box>

      <ConfirmDialog
        open={open}
        buttonTextLeft="はい"
        buttonTextRight="いいえ"
        onClickLeft={StatusButton}
        onClickRight={handleClose}
        text="借りますか？"
      />
    </Box>
  );
};
export default Detail;
