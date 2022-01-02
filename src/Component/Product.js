import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const info = {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
    '&:hover': {
            opacity: 1
    }
}

const container = {
    flex: 1,
    margin: '5px',
    minWidth: '280px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fbfd',
    position: 'relative',

}

const image = {
    height: '75%',
    zIndex: 2
}

const circle = {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundColor: 'white',
  position: 'absolute',
}

const icon = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    transition: 'all 0.5s ease',
    '&:hover': {
        backgroundColor: '#e9f5f5',
        transform: 'scale(1.1)',
    }
}


const Product = ({item}) => {
    
    return (
        <Box sx={container}>
            <Box sx={circle} />
            <img style={image} src={item.img} alt='' />
            <Box sx={info}>
                <Box sx={icon}>
                    <ShoppingCartOutlined />
                </Box>
                <Box sx={icon}>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                    </Link>
                </Box>
                <Box sx={icon}>
                    <FavoriteBorderOutlined />
                </Box>
            </Box>
        </Box>
    );
};

export default Product;