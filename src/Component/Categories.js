import React from 'react';
import { Box, Button, } from '@mui/material';
import {categories} from '../utilis/data';
import CategoryItem from './CategoryItem';

const container = {
    p: '20px', 
    display: 'flex', 
    flexDirection: { xs: 'column', md: 'row'},
    justifyContent: 'space-between',
    maxWidth: '1200px',
    mx: 'auto',
}

const Categories = () => {
    return (
        <Box>
            <Box sx={container}>
                {categories.map(item => 
                    <CategoryItem key={item.id} item= {item}/>
                )}
            </Box>
        </Box>
    );
};

export default Categories;