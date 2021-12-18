import { Add, Remove } from '@mui/icons-material';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import Announcement from '../Component/Announcement';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import NewsLetter from '../Component/NewsLetter';


const container = {}

const wrapper = {
    padding: {xs:'10px', md: '50px'},
    display: 'flex',
    flexDirection: {xs: 'column', md: 'row'}
    // ${ mobile({ padding: "10px", flexDirection: "column" })}
}

const imgContainer = {
    flex: 1,
}

const image = {
    width: '100%',
    height: '90vh',
    objectFit: 'cover',
    // ${mobile({ height: "40vh" })}
}

const infoContainer = {
    flex: 1,
    px: {xs:'10px', md:'50px'},
    //   ${mobile({ padding: "10px" })}
}
const filterContainer = {
    width: '50%',
    margin: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    // ${ mobile({ width: "100%" }) }
}
const filter = {
    display: 'flex',
    alignItems: 'center',
    mr: '20px',
}
const filterTitle = {
    fontSize: '20px',
    fontWeight: '200'
}
const filterColor = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    // background - color: ${ (props) => props.color },
    margin: '0px 5px',
    cursor: 'pointer',
}

const addContainer = {
    maxWidth: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    //   ${mobile({ width: "100%" })}
}

const amountContainer = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
}

const amount = {
    width: '30px',
    height: '30px',
    borderRadius: '10px',
    border: '1px solid teal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 5px',
}

const btn = {
    padding: '15px',
    // width: '100%',
    border: '2px solid teal',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 0,
    cursor: 'pointer',
    fontWeight: '500',
    '&:hover': {
        backgroundColor: '#f8f4f4',
    }
}

const Product = () => {
    return (
        <Box sx={container}>
            <Announcement />
            <Navbar />

            <Box sx={wrapper}>
                <Box sx={imgContainer}>
                    <img style={image} src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='' />
                </Box>

                <Box sx={infoContainer}>
                    <h2 style={{ fontWeight: 200, fontSize: '40px' }}>Denim Jumpsuit</h2>
                    <Typography sx={{ margin: '20px 0px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</Typography>
                    <span style={{ fontWeight: 100, fontSize: '40px' }}>$ 20</span>

                    <Box sx={filterContainer}>
                        <Box sx={filter}>
                            <span style={filterTitle}>Color: </span>
                            <Box sx={filterColor} style={{ backgroundColor: "black" }} />
                            <Box sx={filterColor} style={{ backgroundColor: "darkblue" }} />
                            <Box sx={filterColor} style={{ backgroundColor: "gray" }} />
                        </Box>
                        <Box sx={filter}>
                            <span style={filterTitle}>Size: </span>
                            {/* <select style={{p:'10px', ml: '10px'}}>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select> */}
                            <Select
                                sx={{ ml: '10px', }}
                                value='L'
                                // onChange={handleChange}
                                // displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value='XS'>XS</MenuItem>
                                <MenuItem value='S'>S</MenuItem>
                                <MenuItem value='M'>M</MenuItem>
                                <MenuItem value='L'>L</MenuItem>
                                <MenuItem value='XL'>XL</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    <Box sx={addContainer}>
                        <Box sx={amountContainer}>
                            <Remove />
                            <span style={amount}>1</span>
                            <Add />
                        </Box>
                        <Box>
                            <Button sx={btn}>ADD TO CART</Button>
                        </Box>
                    </Box>

                </Box>
            </Box>

            <NewsLetter />
            <Footer />
        </Box>
    );
};

export default Product;