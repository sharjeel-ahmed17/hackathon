// controllers/cartController.js
const Cart = require('../models/cart.model.js');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // Check if the product exists in the cart
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

            if (itemIndex > -1) {
                // Update quantity if product exists
                cart.items[itemIndex].quantity += quantity;
            } else {
                // Add new item if product does not exist
                cart.items.push({ productId, quantity });
            }

            cart = await cart.save();
            res.json(cart);
        } else {
            // Create a new cart if it does not exist
            const newCart = new Cart({
                userId,
                items: [{ productId, quantity }],
            });

            const savedCart = await newCart.save();
            res.json(savedCart);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            cart.items = cart.items.filter(item => item.productId.toString() !== productId);
            cart = await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
