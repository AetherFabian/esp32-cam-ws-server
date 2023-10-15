require("dotenv").config();

const { wsPort, serverPort } = require("./src/config");
webSocket(wsPort);

const app = require("./src/app");

app.listen(serverPort, () => console.log(`HTTP server listening at ${serverPort}`));