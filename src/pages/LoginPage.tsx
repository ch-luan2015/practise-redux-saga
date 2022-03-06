import React from 'react'
import { Box, Button } from '@mui/material';

type Props = {}



function LoginPage({ }: Props) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <p>Login Page</p>
        <Button variant="contained" sx={{ m: "auto" }}>Fake Login</Button>      </Box>
    </>
  )
}

export default LoginPage;
