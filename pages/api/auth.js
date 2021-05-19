import DB from '../../src/database';
import corsAPI from '../../src/cors';

export default async function auth(req, res) {
  await corsAPI(req, res);
  console.log(req.body);
  let payload = req.body;
  let db = new DB;
  await db.connect();
  let userCheck;
  try {
    userCheck = await db.getObj('Users', payload);
    console.dir(userCheck);
  }
  catch {
    console.error('Unable to check database:', err);
  }
  if (userCheck != null && typeof userCheck == 'object') {
    res.status(200).json({ status: 'OK', user: userCheck });
    console.log('User login accepted');
  }
  else {
    res.status(500).json({status: 'Incorrect credentials'});
    console.error('Incorrect credentials');
  }
}
