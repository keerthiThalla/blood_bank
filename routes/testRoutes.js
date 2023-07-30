 const express = require('express');
const { testController } = require('../controllers/testController');


 const router =express.Router()



 router.get('/api/v1/', testController);

 module.exports= router;