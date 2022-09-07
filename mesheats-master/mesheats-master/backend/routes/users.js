var express = require('express');
var router = express.Router();
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { addSubscription, viewUserSubscription } = require('../controllers/subscription');
const { getUserById, updateProfile } = require('../controllers/user');
const { addAddress, updateAddress, getAddressId, deleteAddress, getAllAddresses, getAllAddressByUserId } = require('../controllers/userAddress');

// Params
router.param("userId", getUserById);
router.param("addressId", getAddressId)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// User Address Routes 
router.post('/addAddress/:userId', isSignedIn, isAuthenticated, addAddress);

router.put('/updateAddress/:userId/:addressId', isSignedIn, isAuthenticated, updateAddress);

router.delete('/removeAddress/:userId/:addressId', isSignedIn, isAuthenticated, deleteAddress);

router.put('/updateProfile/:userId', isSignedIn, isAuthenticated, updateProfile);

router.get('/addresses/:userId', isSignedIn, isAuthenticated, getAllAddressByUserId);

router.post('/subscription/add/:userId', isSignedIn, isAuthenticated, addSubscription);

router.get('/subscription/:userId', isSignedIn, isAuthenticated, viewUserSubscription);

module.exports = router;