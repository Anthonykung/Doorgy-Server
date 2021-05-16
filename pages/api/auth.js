
export default function auth(req, res) {
  let payload = JSON.parse(req.body);
  res.status(200).json({ status: 'OK' });
}
