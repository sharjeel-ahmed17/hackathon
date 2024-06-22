import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/service.api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} (SubCategory: {product.subCategoryId.name}, Price: ${product.price})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
