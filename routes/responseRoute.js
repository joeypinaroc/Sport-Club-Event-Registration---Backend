const express = require('express');
const router = express.Router();
const {getAllResponses, addResponse, deleteResponse} = require('../controllers/responseControllers');

router.get('/register', getAllResponses);
router.post('/register', addResponse);
router.delete('/register/:id', deleteResponse);

module.exports = router;