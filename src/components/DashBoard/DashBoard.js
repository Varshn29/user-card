import { Box, Container, Divider } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import SingleUser from '../SingleUser/SingleUser'
import SingleUserDetails from '../SingleUser/SingleUserDetails'

const DashBoard = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: 'white', height: '600px', ml: '160px'}}
        style={{ maxWidth: '800px', borderRadius: '10px' }}>
          <NavBar />
          <Divider />
          <SingleUser />
      </Box>
    </Container>
  )
}

export default DashBoard