const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const SubscriptionSchema = new mongoose.Schema({
    fees: {
        type: Number,
        default: 0
    },
    toDate: {
        type: Date
    },
    fromDate: {
        type: Date
    },
    createdByWhom: {
        type: String,
        default: "User"
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    meshId: {
        type: ObjectId,
        ref: "MeshUser"
    },
    services: {
        type: Number,
        default: 0 // 0: lunch, 1: dinner, 2: both
    }
}, { timestamps: true })

module.exports = mongoose.model('Subscription', SubscriptionSchema);