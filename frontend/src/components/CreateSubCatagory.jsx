import React, { useEffect, useState } from 'react';
import { createSubCategory, getCategories } from '../services/service.api';

const CreateSubCategory = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createSubCategory({ name, description, categoryId })
            .then(response => {
                alert('Subcategory created successfully');
                setName('');
                setDescription('');
                setCategoryId('');
            })
            .catch(error => {
                console.error('Error creating subcategory:', error);
            });
    };

    return (
        <div>
            <h2>Create SubCategory</h2>
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
                    <label>Category:</label>
                    <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateSubCategory;
