import React from 'react';
import CategoryList from '../components/CatagoryList';
import CreateCategory from '../components/CreateCatogory';
import CreateSubCategory from '../components/CreateSubCatagory';
import SubCategoryList from '../components/SubCatagoryList';
import ProductList from '../components/ProductList';
import CreateProduct from '../components/CreateProductList';



const HomePage = () => {
    return (
        <div>
            <h1>E-commerce Dashboard</h1>
            <CreateCategory />
            <CategoryList />

            {/* <CreateSubCategory />
            <SubCategoryList /> */}
            <CreateProduct />
            <ProductList />
        </div>
    );
};

export default HomePage;
