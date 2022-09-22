const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/genresController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);


module.exports = router;