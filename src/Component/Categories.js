import React from 'react';
import { Box, } from '@mui/material';
import {categories} from '../utilis/data';
import CategoryItem from './CategoryItem';

const container = {
    p: '20px', 
    display: 'flex', 
    flexDirection: { xs: 'column', md: 'row'},
    justifyContent: 'space-between',
}

const Categories = () => {
    return (
        <Box sx={container}>
            {categories.map(item => 
                <CategoryItem key={item.id} item= {item}/>
            )}
        </Box>
    );
};

export default Categories;