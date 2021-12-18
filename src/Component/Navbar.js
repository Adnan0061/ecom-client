import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Box, Card, Container, Typography } from '@mui/material';
import React from 'react';
// import styled from 'styled-components'


const container = {
    // height: '60px',
    height: {xs: '50px', sm: '60px',},
}
const wrapper = {
    padding: {xs:'10px 0px', md:'10px 20px',},
    display: 'flex',
    justifyContent: 'space-between'
}
const left = {
    flex: 1,
    display: {xs: 'none', md: 'flex'}, 
    alignItems: 'center',
}
const language = { 
    fontSize: '14px', 
    cursor: 'pointer',
    display: {xs: 'none', md: 'inline'}
}
const searchContainer = { 
    border: '.5px solid lightgray', 
    display: 'flex', 
    minWidth: '150px', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    ml: '25px', 
    p: '5px' 
}
const input = { 
    fontSize: '14px', 
    cursor: 'pointer', 
    border: 'none' 
}
const searchIcon = {
    fontSize: '16px', 
    color: 'gray'
}
const center = {
    flex: 1,
}
const logo = { 
    fontSize: {xs:'24px', md:'32px'}, 
    fontWeight: 'bold',
    textAlign: { xs: 'left', md: 'center'}, 
    ml: {xs: '15px', md: '0'}
}
const right = {
    flex: 2,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}
const menuItem = {
    cursor: 'pointer',
    mx: '15px',
    fontSize: { xs: '12px', md: '14px'}
}
const Navbar = () => {
    return (
        <Box sx={container}>
            <Box sx={wrapper}>
                <Box sx={left}>
                    <Typography sx={language}>EN</Typography>
                    <Box sx={searchContainer}>
                        <input style={input} placeholder='Search'></input>
                        <Search sx={searchIcon} />
                    </Box>
                </Box>

                <Box sx={center}>
                    <Typography variant='h1' sx={logo}>Bridge</Typography>
                </Box>

                <Box sx={right}>
                    <Box sx={menuItem}>
                        <Typography>Register</Typography>
                    </Box>
                    <Box sx={menuItem}>
                        <Typography>Sign In</Typography>
                    </Box>
                    <Box sx={menuItem}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;