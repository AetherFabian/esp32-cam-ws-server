require('dotenv').config()
const {
  HTTP_PORT,
  WS_PORT,
  HTTP_HOST,
  DB_USER,
  DB_USER_PASSWORD,
  MONGO_CLUSTER
 } = process.env;

module.exports = {
  serverPort: HTTP_PORT,
  wsPort: WS_PORT,
  serverHost: HTTP_HOST ?? 'http://localhost',
  username: DB_USER,
  password: DB_USER_PASSWORD,
  cluster: MONGO_CLUSTER
}