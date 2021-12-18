import React from 'react';
import { popularProducts } from '../utilis/data';
import Product from './Product';

const container = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

const Products = () => {
    return (
        <div style={container}>
            {
                popularProducts.map(item => 
                    <Product key={item.id} item={item} />    
                )
            }
        </div>
    );
};

export default Products;