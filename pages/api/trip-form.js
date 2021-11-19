export default (req, res) => {
  console.log(req.body);
  // const body = JSON.parse(req.body);
  // console.log(body);
  // var reqArr = JSON.stringify(req);
  res.status(200).json({ status: 'OK',  });
};