const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// router.get('/demo', (req, res) =>{
//     res.send("hello from auth router");
// } )

router.post('/register', authController.register);
router.post("/login", authController.login);

module.exports = router;
