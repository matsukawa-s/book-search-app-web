/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { teal } from '@mui/material/colors';
import React, { useContext } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import authContext from '../../context/authContext';

const Login: React.FC = () => {
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginData = async () => {
    const res: AxiosResponse = await axios.post('http://localhost:8080/login', {
      email: id,
      password,
    });

    console.log(res.headers.authorization);
    auth?.setAuth(res.headers.authorization);

    const state = location.state as { from: { pathname: string } } | undefined;
    const from = state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <Grid>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: '70vh',
          width: '280px',
          m: '20px auto',
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Avatar sx={{ bgcolor: teal[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ m: '30px' }}>
            Sign In
          </Typography>
        </Grid>
        <TextField
          label="email"
          variant="standard"
          fullWidth
          required
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box mt={3}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={loginData}
          >
            サインイン
          </Button>

          <Typography variant="caption">パスワードを忘れましたか？</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Login;
