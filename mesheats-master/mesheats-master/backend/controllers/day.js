const Day = require('../models/DaySchema');

exports.addDishInDay = (req, res) => {

    const dayData = new Day(req.body);

    dayData.save((err, day) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                err
            })
        }
        res.json({
            day: day.dname,
            rate: day.rate,
            isLunch: day.isLunch,
            description: day.description,
            meshUser: day.meshUser
        })
    })
}

exports.updateDish = (req, res) => {
    Day.findByIdAndUpdate(
        { _id: req.item._id },
        { $set: req.body },
        { new: true, userFindAndModify: false }
    ).exec((err, updatedDish) => {
        if (err || !updatedDish) {
            return res.status(400).json({
                error: "Not Authorized to update this information"
            })
        }
        res.json(updatedDish)
    })
}

exports.removeDish = (req, res) => {
    const id = req.item._id;

    Day.findByIdAndRemove(id)
        .exec((err, deletedDish) => {
            if (err) {
                return res.status(400).json({
                    err
                })
            }

            res.json({
                deletedDish
            })
        })
}

exports.getDishesByMeshId = (req, res) => {
    Day.find({ meshuser: req.profile._id })
        .exec((err, dishes) => {
            if (err) {
                return res.status(400).json({
                    err
                })
            }
            res.json(dishes)
        })
}

exports.getAllDishes = (req, res) => {
    Day.find().exec((err, dishes) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }

        res.json(dishes)
    })
}