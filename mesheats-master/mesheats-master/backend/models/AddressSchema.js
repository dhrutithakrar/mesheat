const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const addressSchema = mongoose.Schema({
    pincode: {
        type: Number,
        required: true,
        maxLength: 6,
        minLength: 6
    },
    locality: {
        type: String,
        length: 64
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Address', addressSchema);