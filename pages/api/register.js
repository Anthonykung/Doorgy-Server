import { dbConfig } from '../../src/database';

let DB = dbConfig();

export default function auth(req, res) {
  let payload = JSON.parse(req.body);
  if (DB.add('Users', data)) {
    res.status(200).json({ status: 'OK' });
  }
}
