const { Router } = require('express');
const router = Router();

const esp32StreamController = require('../controllers/esp32-stream.controller');

router.get('/', esp32StreamController.getStream);

module.exports = router;