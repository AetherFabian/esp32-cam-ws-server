const { Router } = require('express');
const router = Router();

const esp32BatteryController = require('../controllers/esp32-battery.controller');

router.get('/', esp32BatteryController.get);
router.get('/last', esp32BatteryController.getLatest);
router.post('/', esp32BatteryController.post);
router.patch('/', esp32BatteryController.patch);

module.exports = router;