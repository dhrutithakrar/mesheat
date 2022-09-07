var express = require('express');
var router = express.Router();

const { addDishInDay, updateDish, removeDish, getDishesByMeshId } = require('../controllers/day');
const { getUserById, getItemById, updateProfile } = require('../controllers/MeshAuth');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { viewMeshSubscriptions } = require('../controllers/subscription');


router.param('userId', getUserById);
router.param('itemId', getItemById);


// Add dish on particular day
router.post('/addDish/:userId', isSignedIn, isAuthenticated, addDishInDay);

router.put('/updateDish/:userId/:itemId', isSignedIn, isAuthenticated, updateDish);

router.delete('/removeDish/:userId/:itemId', isSignedIn, isAuthenticated, removeDish);

router.get('/dishes/:userId', getDishesByMeshId);

router.get('/subscription/:userId', isSignedIn, isAuthenticated, viewMeshSubscriptions);

// Profile
router.put('/update/:userId', isSignedIn, isAuthenticated, updateProfile);

module.exports = router;