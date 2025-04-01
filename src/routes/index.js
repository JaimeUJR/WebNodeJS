const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware');

const firebaseAuthController = require('../controllers/firebase-auth-controller');
const indexControllers = require('../controllers/indexControllers')
// const PostsController = require('../controllers/posts-controller.js');


// Auth routes
router.post('/register', firebaseAuthController.registerUser);
router.post('/login', firebaseAuthController.loginUser);
router.get('/logout', firebaseAuthController.logoutUser);
router.get('/deleteAccount', firebaseAuthController.delete);
router.post('/reset-password', firebaseAuthController.resetPassword);


//posts routes
// router.get('/api/posts', verifyToken, PostsController.getPosts);

// index routes
router.get('/resetScreen',  indexControllers.resetScreen);
router.get('/signInScreen',  indexControllers.signInScreen);
router.get('/loginScreen', indexControllers.loginPage);
router.get('/', verifyToken, indexControllers.indexScreen);

module.exports = router;