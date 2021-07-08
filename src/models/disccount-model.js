const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: [true, 'Title cannot be blank']
    },
    discount_type: {
        type: String,
        required: [true, 'Discount type cannot be blank']
    },
    freeShipping: {
        type: Boolean,
        required: false
    },
    currency: {
        type: String,
        required: false
    },
    expired: {
        type: Boolean,
        required: [true, 'Expired cannot be blank']
    },
    amount: {
        type: Number,
        required: [true, 'Amount cannot be blank']
    },
    usedBy: {
        type: [String],
        required: false
    },
    copies: {
        type: Number,
        required: false
    },
    edited: {
        type: Date,
    },
});

const Discount = mongoose.model('Discount', discountSchema);
module.exports = Discount;