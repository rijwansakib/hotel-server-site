const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema(
    {
        uId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        roomType: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Order', schema);
