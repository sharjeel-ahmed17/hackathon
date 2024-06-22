import React, { useState } from 'react';
import { createCategory } from '../services/service.api';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory({ name, description })
            .then(response => {
                alert('Category created successfully');
                setName('');
                setDescription('');
            })
            .catch(error => {
                console.error('Error creating category:', error);
            });
    };

    return (
        <div>
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCategory;
