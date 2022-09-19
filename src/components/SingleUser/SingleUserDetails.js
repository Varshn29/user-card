import { Card, CardMedia, Container, Grid, Typography, Item, Box, Rating, Button } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import { TabContext } from '@mui/lab';

const SingleUserDetails = ({ email, dob, cell, gender, location, name, picture, phone, registered }) => {

    return (

        <Container>
            <Grid container spacing={2} sx={{ m: '20px' }}>
                <Grid item xs={4} style={{ maxWidth: '180px' }} sx={{ mr: '30px' }}>
                    <img src={picture?.large} width='180px' height='200px' />
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='h5'>{name?.first}</Typography>
                        <Typography variant='h5' sx={{ ml: '5px', mr: '20px' }}>{name?.last}</Typography>
                        <LocationOnIcon sx={{ color: 'gray', fontSize: '12px', mt: '11px', mr: '5px' }} />
                        <Typography sx={{ color: 'gray', fontSize: '12px', mt: '10px' }}>{location?.country}</Typography>
                        <BookmarkIcon sx={{ color: 'lightgray', fontSize: '14px', mt: '11px', mr: '5px', ml: '130px' }} />
                        <Typography sx={{ color: 'lightgray', fontSize: '12px', mt: '10px' }}>Bookmark</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '13px', color: '#2196f3' }}>Product Designer</Typography>
                    <Typography sx={{ fontSize: '12px', color: 'lightgray', mt: '20px' }}>RATINGS</Typography>
                    <Rating name="read-only" value={registered?.age / 2} readOnly />
                    <Box sx={{ mt: '20px' }}>
                        <Button sx={{ textTransform: 'capitalize', color: '#333' }}>Send message</Button>
                        <Button sx={{ textTransform: 'capitalize', bgcolor: 'lightblue', mx: '20px' }}>Contacts</Button>
                        <Button sx={{ textTransform: 'capitalize', color: 'gray' }}>Report user</Button>
                    </Box>
                    <TabContext value={(0, 1)}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', my: '20px' }}>
                            <TabList aria-label="lab API tabs example">
                                <Tab label="Timeline" sx={{ fontSize: '12px', textTransform: 'capitalize' }} />
                                <Tab label="About" sx={{ fontSize: '12px', textTransform: 'capitalize' }} />
                            </TabList>
                        </Box>
                        <Typography sx={{ textTransform: 'uppercase', fontSize: '12px', color: 'lightgray', fontWeight: 700, mb: '15px' }}>Contact Information</Typography>
                        <Box sx={{ display: 'flex', mb: '10px' }}>
                            <Typography sx={{ fontSize: '12px', mr: '20px' }}>Phone:</Typography>
                            <Typography sx={{ fontSize: '12px' }}>{phone}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontSize: '12px', mr: '20px' }}>Email:</Typography>
                            <Typography sx={{ fontSize: '12px' }}>{email}</Typography>
                        </Box>
                        <Typography sx={{ textTransform: 'uppercase', fontSize: '12px', color: 'lightgray', fontWeight: 700, my: '15px' }}>Basic Information</Typography>
                        <Box sx={{ display: 'flex', mb: '10px' }}>
                            <Typography sx={{ fontSize: '12px', mr: '20px' }}>Birthday:</Typography>
                            <Typography sx={{ fontSize: '12px' }}>{dob?.date}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontSize: '12px', mr: '20px' }}>Gender:</Typography>
                            <Typography sx={{ fontSize: '12px' }}>{gender}</Typography>
                        </Box>
                    </TabContext>
                </Grid>
            </Grid>
        </Container >
    )
}

export default SingleUserDetails