import React from 'react';
import Navbar from '../Component/Navbar';
import Announcement from '../Component/Announcement';
import { Box,  MenuItem, Select, Typography } from '@mui/material';
import Products from '../Component/Products';
import NewsLetter from '../Component/NewsLetter';
import Footer from '../Component/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const filterContainer = {
    maxWidth: '1200px',
    mx: 'auto',
    mt: 1,
    borderTop: '1px solid black'
}

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2].toLowerCase() || null
    console.log(cat);
    const [ filters, setFilters ] = useState({})
    const [ sort, setSort ] = useState("newest")

    const handleChange = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value.toLowerCase(),
        })
    }    
    console.log(filters)
    console.log(sort)

    return (
        <div>
            <Announcement />
            <Navbar />

            <Box sx={filterContainer}>
                <Typography sx={{ m: '20px', fontWeight: 600, fontSize: {xs: '18px', md: '36px'} }} variant='h4'>{cat}</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: {xs: 'flex-start', md:'center'}
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        // alignItems: 'center',
                        flexDirection: { xs: 'column', md:'row'},
                        gap: {xs: 1, md: 0}
                    }}>
                        <Typography sx={{ m: '10px', fontWeight: 600 }} variant='h6'>Filter Products</Typography>

                        {/* <InputLabel id="size">Size</InputLabel> */}
                        <Select
                            sx={{ml: '10px', minWidth: '80px', }}
                            labelId="size"
                            id="size"
                            defaultValue='size'
                            label="Size"
                            name='size'
                            onChange={handleChange}
                        >
                            <MenuItem value='size' disabled>size</MenuItem>
                            <MenuItem value='sm'>SM</MenuItem>
                            <MenuItem value='md'>MD</MenuItem>
                            <MenuItem value='lg'>LG</MenuItem>
                            <MenuItem value='xl'>XL</MenuItem>
                            <MenuItem value='2xl'>2XL</MenuItem>
                        </Select>

                        {/* <InputLabel id="color">Color</InputLabel> */}
                        <Select
                            sx={{ml: '10px'}}
                            labelId="color"
                            id="color"
                            // value={age}
                            defaultValue='Color'
                            label="Color"
                            name='color'
                            onChange={handleChange}
                        >
                            <MenuItem value='Color' disabled>Color</MenuItem>
                            <MenuItem value='red'>Red</MenuItem>
                            <MenuItem value='blue'>Blue</MenuItem>
                            <MenuItem value='green'>Green</MenuItem>
                        </Select>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        // justifyContent: 'flex-end',
                        justifyContent: {xs:'flex-end', md:'center'},
                        alignItems: {xs:'flex-end', md:'center'},
                        flexDirection: { xs: 'column', md:'row'},
                        mr: '10px',
                    }}>
                        <Typography sx={{ m: {xs:'10px', md:'10px'}, fontWeight: 600 }} variant='h6'>Sort Products</Typography>

                        {/* <InputLabel id="filter">Newest</InputLabel> */}
                        <Select
                            sx={{ml: '10px'}}
                            labelId="filter"
                            id="demo-simple-select"
                            // value={age}
                            defaultValue='newest'
                            label="Filter"
                            name='filter'
                            onChange={e => setSort(e.target.value)}
                        >
                            <MenuItem value='newest'>Newest</MenuItem>
                            <MenuItem value='ace'>Price (Ace)</MenuItem>
                            <MenuItem value='dec'>Price (Dec)</MenuItem>
                        </Select>

                    </Box>
                </Box>
            </Box>

            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default ProductList;