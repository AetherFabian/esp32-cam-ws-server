const { MongoClient, ServerApiVersion } = require('mongodb');
const { username, password, cluster } = require("../config/index");


const clusterUri = `mongodb+srv://${username}:${password}@${cluster}.sc4h7.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(clusterUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client;