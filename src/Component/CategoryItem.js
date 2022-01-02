import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const container = {
    flex: 1, 
    m: 1, 
    height: {xs:'100px', md:'60vh',},
    position: 'relative',
}
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const info = {
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column'
}
const title = {
    color: 'white', 
    fontSize: '40px', 
    mb: '20px'
}
const button = {
    border: 'none', 
    borderRadius: 0, 
    backgroundColor: 'white', 
    color: 'gray', 
    fontWeight: '600',
}

const CategoryItem = ({item}) => {
    return (
        <Link to={`/products/${item.cat}`}>
        <Box sx={container}>
            <Image src={item.img} alt="" />
            <Box sx={info}>
                <Typography sx={title}>{item.title}</Typography>
                <Button sx={button} variant='contained'>SHOP NOW</Button>
            </Box>
        </Box>
        </Link>
    );
};

export default CategoryItem;