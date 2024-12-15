// src/pages/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 360,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      setError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        Đăng Nhập
      </Typography>
      <form onSubmit={handleLogin} className={classes.form}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.textField}
          required
        />
        <TextField
          type="password"
          label="Mật Khẩu"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.textField}
          required
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Đăng Nhập
        </Button>
      </form>
      {error && (
        <Typography variant="body1" className={classes.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default Login;
