import { Add, Remove } from '@mui/icons-material';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Announcement from '../Component/Announcement';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import NewsLetter from '../Component/NewsLetter';
import { addProduct } from '../redux/cartRedux';
import {publicRequest} from '../requestMethods';
import { useDispatch } from 'react-redux';

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
    const {id} = useParams()
    console.log(id)
    const [product,setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get('/products/find/'+id)
                setProduct(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProduct()
    },[id])

    const handleQuantity = (type) => {
        if ( type === 'dec' && quantity > 0 ) {
            setQuantity(quantity - 1)
        }
        if ( type === 'inc' ) {
            setQuantity(quantity + 1)
        }
    }
    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size, price:product.price, productTotal: product.price * quantity })
        );
    }
    return (
        <Box sx={container}>
            <Announcement />
            <Navbar />
            
            <Box sx={wrapper}>
                <Box sx={imgContainer}>
                    <img style={image} src={product.img} alt='' />
                </Box>

                <Box sx={infoContainer}>
                    <h2 style={{ fontWeight: 200, fontSize: '40px' }}>{product.title}</h2>
                    <Typography sx={{ margin: '20px 0px' }}>{product.desc}</Typography>
                    <span style={{ fontWeight: 100, fontSize: '40px' }}>$ {product.price}</span>

                    <Box sx={filterContainer}>
                        <Box sx={filter}>
                            <span style={filterTitle}>Color: </span>
                            {
                                product.color?.map(c => <Box key={c} onClick={()=>setColor(c)} sx={filterColor} style={{ backgroundColor: `${c}` }} />) 
                            }
                        </Box>
                        <Box sx={filter}>
                            <span style={filterTitle}>Size: </span>
                            <Select
                                sx={{ml:2}}
                                // onChange={handleChange}
                                onChange={e => setSize(e.target.value)}
                                defaultValue='choose'
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value='choose' disabled>Size</MenuItem>
                            {
                                product.size?.map( s => <MenuItem key={s} value={s}>{s}</MenuItem>)
                            }
                            </Select>
                        </Box>
                    </Box>

                    <Box sx={addContainer}>
                        <Box sx={amountContainer}>
                            <Remove onClick={()=>handleQuantity('dec')} />
                            <span style={amount}>{quantity}</span>
                            <Add onClick={()=>handleQuantity('inc')} />
                        </Box>
                        <Box>
                            <Button onClick={handleClick} sx={btn}>ADD TO CART</Button>
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