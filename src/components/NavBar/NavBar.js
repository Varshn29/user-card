import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {

  return (
    <Container sx={{mb: ''}}>
      <AppBar position="static" sx={{ bgcolor: 'white', width: '750px', height: '80px', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h5"
            noWrap
            component="a" href="/" sx={{
              m: '50px',
              mr: '150px',
              fontWeight: 900,
              color: '#3b4f5d',
              letterSpacing: '2px',
              textDecoration: 'none',
            }}>Kodecolor</Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '14px',
              color: '#3b4f5d'
            }}>Find people</Typography>
          <Typography
            sx={{
              m: '20px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#3b4f5d'
            }}>Messages</Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '14px',
              color: '#3b4f5d'
            }}>My Contacts</Typography>
          <IconButton>
            <Avatar sx={{ ml: '20px' }} alt="profile-picture" src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar