const { Router } = require('express');
const router = Router();
const esp32Stream = require('./esp32-stream.routes');
const esp32Battery = require('./esp32-battery.routes');

router.use('/esp32-stream', esp32Stream);

router.use('/esp32-battery', esp32Battery)

module.exports = router;