import { dbConfig } from '../../src/database';

let DB = dbConfig();

export default function auth(req, res) {
  let payload = JSON.parse(req.body);
  if (DB.get('Users', payload.username)) {
    res.status(200).json({ status: 'OK' });
  }
  else {
    res.status(401).json({ status: 'Forbidden' });
  }
}
