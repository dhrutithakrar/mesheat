const Order = require('../models/Order');

exports.getAllOrders = (req, res) => {
    Order.find().exec((err, orders) => {
        if (err) {
            return res.status(400).json(err);
        }

        res.json(orders);
    })
}

exports.getOrderDetails = (req, res) => {
    Order.find(_id).exec((err, order) => {
        if (err) {
            return res.staus(400).json(err);
        }

        res.json(order);
    })
}

exports.createOrder = (req, res) => {
    const order = new Order(req.body);

    order.save((err, order) => {
        if (err) {
            return res.status(400).json(order);
        }

        res.json(order);
    })
}

exports.ordersByUserId = (req, res) => {
    Order.find({ userid: req.profile._id })
        .exec((err, order) => {
            if (err) {
                return res.status(400).json(err);
            }
            res.json(order);
        })
}