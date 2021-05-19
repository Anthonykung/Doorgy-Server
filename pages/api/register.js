import DB from '../../src/database';
import corsAPI from '../../src/cors';

export default async function register(req, res) {
  await corsAPI(req, res);
  console.log(req.body);
  let payload = req.body;
  let db = new DB;
  await db.connect();
  let userCheck;
  try {
    userCheck = await db.getObj('Users', { username: payload.username });
    console.dir(userCheck);
  }
  catch {
    console.error('Unable to check database:', err);
  }
  if (userCheck != null && typeof userCheck == 'object') {
    res.status(500).json({status: 'This username has been taken'});
    console.error('This username has been taken');
  }
  else {
    try {
      db.add('Users', payload);
      console.log('DB Function Completed');
      console.error('db', typeof db);
    }
    catch (err) {
      console.error('Unable to add to database:', err);
      res.status(500).json({status: 'Not OK'});
    }
    console.log(payload.username);
    res.status(200).json({ status: 'OK' });
  }
}
