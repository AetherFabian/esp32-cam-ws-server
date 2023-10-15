const { wsPort, serverHost } = require('../../config');

const ejsClient = 'client';

class esp32StreamController {

  getStream = (req, res) => {
    return res.render(ejsClient, { wsPort, serverHost });
  }
}

module.exports = new esp32StreamController();
