import { MongoClient } from 'mongodb';
const dotenv = require('dotenv').config();

const client = new MongoClient(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class DB {
  constructor(db, client) {
    this.db = db;
    this.client = client;
  }

  async add(dest, data) {
    try {
      let collection = await this.db.collection(dest);
      await collection.insertOne(data, function(err, res) {
        if (err) throw err;
      });
      return true;
    }
    catch (err) {
      console.error(err);
      return false;
    }
  }

  async get(location, identifier) {
    try {
      let collection = await this.db.collection(location);
      let result = await collection.findOne(identifier, function(err, res) {
        if (err) throw err;
        return res;
      });
      return result;
    }
    catch (err) {
      console.error(err);
      return null;
    }
  }

  async update(location, identifier, newdata) {
    try {
      let collection = await this.db.collection(location);
      let newvalues = { $set: newdata };
      let result = await collection.updateOne(identifier, newvalues, function(err, res) {
        if (err) throw err;
        return res;
      });
      return result;
    }
    catch (err) {
      console.error(err);
      return null;
    }
  }

  async updateCookie(identifier, newdata) {
    try {
      let collection = await this.db.collection('sessions');
      let newvalues = { $set: newdata };
      let result = await collection.updateOne(identifier, newvalues, function(err, res) {
        if (err) throw err;
        return res;
      });
      return result;
    }
    catch (err) {
      console.error(err);
      return null;
    }
  }
}

export default async function config() {
  if (!client.isConnected()) await client.connect();
  let mongo = new DB(client.db('Doorgy'), client);
  return mongo;
}
