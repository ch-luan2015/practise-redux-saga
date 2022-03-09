import React from 'react'
import { makeStyles, Typography, Button, Box, CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authActions } from 'features/auth/authSlice';
import { Paper } from '@material-ui/core';
import { useAppSelector } from 'app/hooks';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: theme.spacing(3),
  },
}))


function LoginPage() {

  const classes = useStyles();

  const dispatch = useDispatch();



  const isLogging = useAppSelector((state) => state.auth.logging);


  const handleLogin = () => {
    // TODO: Get username + pwd from login form

    dispatch(authActions.login({
      username: "Luan",
      password: "hello"
    }))
  }


  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            {isLogging && <CircularProgress size={20} color="secondary" />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default LoginPage;
