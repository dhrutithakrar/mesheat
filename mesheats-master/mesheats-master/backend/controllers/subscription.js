const Subscription = require('../models/Subscription');

exports.addSubscription = (req, res) => {
    const subscription = new Subscription(req.body);

    subscription.save((err, sub) => {
        if (err) {
            return res.status(400).json({
                err,
                msg: "Error Occured"
            })
        }

        return res.json({
            msg: "subscription Added",
            sub
        });
    })
}

exports.allSubscriptions = (req, res) => {
    Subscription.find().exec((err, subs) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }

        return res.json(subs);
    })
}


//FIXME: Think about this
exports.removeSubscriptions = (req, res) => {

    const { id } = req.body;

    Subscription.findByIdAndRemove({ id })
        .exec((err, sub) => {
            if (err) {
                return res.status(400).json(err)
            }

            return res.json({
                msg: "Subscription Removed",
                sub
            });
        })
}

exports.viewMeshSubscriptions = (req, res) => {
    // const { id } = req.body;

    Subscription.find({
        meshId: req.profile._id
    }).exec((err, subs) => {
        if (err) {
            return res.status(400).json(err)
        }

        return res.json(subs);
    })
}

exports.viewUserSubscription = (req, res) => {

    Subscription.find({
        userId: req.profile._id
    }).exec((err, subs) => {
        if (err) {
            return res.status(400).json(err)
        }

        return res.json(subs);
    })
}