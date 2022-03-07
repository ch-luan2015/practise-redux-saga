import { Button, Box } from '@mui/material'
import { authActions } from 'features/auth/authSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

type Props = {}

function AdminPage({ }: Props) {

  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(authActions.logout);
  }
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
        <p>Admin Page</p>
        <Button color="error" variant="contained" sx={{ m: "auto" }}
          onClick={() => handleLogout()}
        >Logout</Button>
      </Box>
    </>
  )
}

export default AdminPage
