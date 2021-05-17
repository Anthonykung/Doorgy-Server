import { dbConfig } from '../../src/database';

import Cors from 'cors';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
async function corsAPI(req, res) {
  return new Promise((resolve, reject) => {
    // Initialize the cors middleware
    let cors = Cors({
      methods: ['GET', 'POST'],
    });
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function auth(req, res) {
  await corsAPI(req, res);
  console.log(req.body);
  let payload = req.body;
  console.log(payload.username);
  res.status(200).json({ status: 'OK' });
}
