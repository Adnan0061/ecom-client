import { Box, Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../Component/ProductCard';
import { Link } from 'react-router-dom';

const container = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    mx: 'auto'
}
const button = {
    borderRadius: 0,
    color: 'black',
    fontSize: {xs:'15px', md: '18px', lg:'20px'},
    p: '7px 10px',
    borderColor: 'black'
}

const ProductsAll = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([])
    const [filterdProducts, setFilterdProducts] = useState([])
    console.log(cat)
    useEffect(()=>{
        const getProducts = async () => {
            try{
                // const res = await axios.get(cat ? `https://aqueous-falls-89489.herokuapp.com/api/products?category=${cat}` : 'https://aqueous-falls-89489.herokuapp.com/api/products');
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products');
                setProducts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        getProducts()
    },[cat])
    console.log(products)

    useEffect(()=>{
        cat && setFilterdProducts(
            products.filter(item => Object.entries(filters).every(([key,value]) => item[key].includes(value.toLowerCase())))
        )
    },[products, cat, filters])

    useEffect(()=>{
        if(sort === 'newest'){
            setFilterdProducts((prev)=> 
            [...prev].sort((a,b) => a.createdAt -b.createdAt));
        }else if(sort === 'asc'){
            setFilterdProducts((prev)=> 
            [...prev].sort((a,b) => a.price -b.price));
        }else{
            setFilterdProducts((prev)=> 
            [...prev].sort((a,b) => b.price -a.price));
        }
    },[])
    return (
        <>
        <Box sx={container}>
            {
                products.slice(0,8).map(item => 
                    <ProductCard key={item.id} item={item} />    
                )
            }
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', mb: '50px'}}>
            <Link to={`/products/`}><Button sx={button} variant="outlined">View All</Button></Link>
        </Box>
        </>
    );
};

export default ProductsAll;