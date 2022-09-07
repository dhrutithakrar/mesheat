var express = require('express');
var router = express.Router();

const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getAllOrders, getOrderDetails, ordersByUserId } = require('../controllers/order');

// router.get('/allOrders', isSignedIn, isAuthenticated, getAllOrders);

//FIXME: think about this again
router.get('/orderDetails', isSignedIn, isAuthenticated, getOrderDetails);

router.get('/getOrders/:userId', isSignedIn, isAuthenticated, ordersByUserId)

module.exports = router;