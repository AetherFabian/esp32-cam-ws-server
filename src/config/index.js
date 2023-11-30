require('dotenv').config()
const {
  HTTP_PORT,
  WS_PORT,
  HTTP_HOST,
  MONGO_URL
 } = process.env;

module.exports = {
  serverPort: HTTP_PORT,
  wsPort: WS_PORT,
  serverHost: HTTP_HOST ?? 'http://localhost',
  mongoUrl: MONGO_URL
}