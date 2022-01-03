import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { popularProducts } from '../utilis/data';
import Product from './Product';

const container = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

const Products = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([])
    const [filterdProducts, setFilterdProducts] = useState([])
    console.log(cat)
    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await axios.get(cat ? `https://aqueous-falls-89489.herokuapp.com/api/products?categories=${cat}` : 'https://aqueous-falls-89489.herokuapp.com/api/products');
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
        <div style={container}>
            {cat ? 
                filterdProducts.map(item => 
                    <Product key={item.id} item={item} />    
                )
                :
                products.slice(0,8).map(item => 
                    <Product key={item.id} item={item} />    
                )
            }
        </div>
    );
};

export default Products;