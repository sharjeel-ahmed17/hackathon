import React, { useEffect, useState } from 'react';
import { getSubCategories } from '../services/service.api';

const SubCategoryList = () => {
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

    return (
        <div>
            <h2>SubCategories</h2>
            <ul>
                {subCategories.map(subCategory => (
                    <li key={subCategory._id}>{subCategory.name} (Category: {subCategory.categoryId.name})</li>
                ))}
            </ul>
        </div>
    );
};

export default SubCategoryList;
