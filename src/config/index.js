const { HTTP_PORT, WS_PORT, HTTP_HOST } = process.env;

module.exports = {
  serverPort: HTTP_PORT,
  wsPort: WS_PORT,
  serverHost: HTTP_HOST ?? 'http://localhost'
}