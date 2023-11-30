const { MongoClient, ServerApiVersion } = require('mongodb');
const { mongoUrl} = require("../config/index");


const clusterUri = mongoUrl;

const client = new MongoClient(clusterUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client;