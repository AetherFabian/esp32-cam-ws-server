const { Router } = require('express');
const router = Router();
const esp32Stream = require('./esp32-stream.routes');

router.use('/esp32-stream', esp32Stream);

module.exports = router;