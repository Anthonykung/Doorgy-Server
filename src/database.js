import { MongoClient } from 'mongodb';
const dotenv = require('dotenv').config();

const client = new MongoClient(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default class DB {
  constructor() {
    // Need to call DB.connect() before use!
  }

  connect = async () => {
    if (!client.isConnected()) {
      await client.connect();
    }
    this.db = client.db('Doorgy');
    this.client = client;
  }

  add = async (dest, data) => {
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

  /**
   * Database Get Function.
   *
   * Get object identified by identifier from database.
   *
   * @name   getObj
   * @access public
   * @param  {string} location
   * @param  {object} identifier
   */
  getObj = async (location, identifier) => {
    try {
      let collection = await this.db.collection(location);
      let result = await collection.findOne(identifier).then(function(res, err) {
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

  update = async (location, identifier, newdata) => {
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

  updateCookie = async (identifier, newdata) => {
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
