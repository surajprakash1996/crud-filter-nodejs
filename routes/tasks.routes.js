const express = require('express');
const router = express.Router();
const { getIndex, addTask, getTask, getUpdate } = require('../controllers/index.controllers');

router.get('/', getIndex);
router.get('/view/:id', getTask);
router.get('/update/:id', getUpdate);
router.post('/addtask', addTask);

module.exports = router;