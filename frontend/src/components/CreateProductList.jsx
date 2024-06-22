import React, { useEffect, useState } from 'react';
import { createProduct, getSubCategories } from '../services/service.api';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        getSubCategories()
            .then(response => {
                setSubCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching subcategories:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct({ name, description, price, subCategoryId })
            .then(response => {
                alert('Product created successfully');
                setName('');
                setDescription('');
                setPrice('');
                setSubCategoryId('');
            })
            .catch(error => {
                console.error('Error creating product:', error);
            });
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>SubCategory:</label>
                    <select value={subCategoryId} onChange={(e) => setSubCategoryId(e.target.value)}>
                        <option value="">Select SubCategory</option>
                        {subCategories.map(subCategory => (
                            <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;
