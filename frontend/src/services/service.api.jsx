import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Categories
export const createCategory = (data) => axios.post(`${API_URL}/categories`, data);
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const getCategoryById = (id) => axios.get(`${API_URL}/categories/${id}`);
export const updateCategory = (id, data) => axios.patch(`${API_URL}/categories/${id}`, data);
export const deleteCategory = (id) => axios.delete(`${API_URL}/categories/${id}`);

// Subcategories
export const createSubCategory = (data) => axios.post(`${API_URL}/subcategories`, data);
export const getSubCategories = () => axios.get(`${API_URL}/subcategories`);
export const getSubCategoryById = (id) => axios.get(`${API_URL}/subcategories/${id}`);
export const updateSubCategory = (id, data) => axios.patch(`${API_URL}/subcategories/${id}`, data);
export const deleteSubCategory = (id) => axios.delete(`${API_URL}/subcategories/${id}`);

// Products
export const createProduct = (data) => axios.post(`${API_URL}/products`, data);
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const updateProduct = (id, data) => axios.patch(`${API_URL}/products/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);


// Search
export const searchProducts = (query) => axios.get(`${API_URL}/products/search`, {
    params: { query }
});


// Payment
export const createPaymentIntent = (amount) => axios.post(`${API_URL}/payment/create-payment-intent`, { amount });

// Cart
export const getCart = (userId) => axios.get(`${API_URL}/cart/${userId}`);
export const addToCart = (userId, productId, quantity) => axios.post(`${API_URL}/cart/add`, {
    userId,
    productId,
    quantity,
});
export const removeFromCart = (userId, productId) => axios.post(`${API_URL}/cart/remove`, {
    userId,
    productId,
});





