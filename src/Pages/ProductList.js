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

}

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2].toLowerCase()

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

            <Typography sx={{ m: '20px', fontWeight: 600, fontSize: {xs: '18px', md: '36px'} }} variant='h4'>{cat}</Typography>
            <Box sx={filterContainer}>
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
                            <MenuItem value='sm'>sm</MenuItem>
                            <MenuItem value='md'>md</MenuItem>
                            <MenuItem value='lg'>lg</MenuItem>
                            <MenuItem value='xl'>xl</MenuItem>
                            <MenuItem value='2xl'>2xl</MenuItem>
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
                            <MenuItem value='red'>red</MenuItem>
                            <MenuItem value='blue'>blue</MenuItem>
                            <MenuItem value='green'>green</MenuItem>
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
                            defaultValue='Newest'
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