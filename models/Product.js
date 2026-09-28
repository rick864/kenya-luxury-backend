const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    currency: {
        type: String,
        default: 'KES',
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    stock: {
        type: Number,
        default: 1,
        min: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);