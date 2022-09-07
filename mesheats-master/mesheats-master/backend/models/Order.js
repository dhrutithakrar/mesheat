const mongoose = require('mongoose');
const User = require('./User');
const MeshUser = require('./MeshUser');

const OrderSchema = new mongoose.Schema({
    userid: {
        type: mongoose.ObjectId,
        required: true,
        ref: User
    },
    meshid: {
        type: mongoose.ObjectId,
        required: true,
        ref: MeshUser
    },
    //FIXME: Check this at the payment gateway implementation
    payment: {
        type: String
    },
    totalbill: {
        type: Number
    },
    dishes: [
        {
            qty: {
                type: Number
            },
            dishId: {
                type: ObjectId,
                ref: "Day"
            }
        }
    ],
    status: {
        type: String
    },
    suggestion: {
        type: String
    },
    feedback: {
        type: String
    }

})

module.exports = mongoose.model('Order', OrderSchema);