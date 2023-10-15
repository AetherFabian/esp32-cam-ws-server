const WebSocket = require("ws");

module.exports = (port) => {
  const wsServer = new WebSocket.Server({ port }, () => console.log(`WS Server is listening at ${port}`));
  const connectedClients = [];
  wsServer.on("connection", (ws, req) => {
    console.log("Connected");
    connectedClients.push(ws);

    ws.on("message", (data) => {
      connectedClients.forEach((ws, i) => {
        if (connectedClients[i] !== ws && ws.readyState !== ws.OPEN) return connectedClients.splice(i, 1);
        else ws.send(data);
      });
    });
  });
};