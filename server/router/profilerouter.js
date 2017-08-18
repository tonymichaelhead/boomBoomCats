const router = require('express').Router();
const userprofile = require('../../db/postgres/models')


router.post('/profiles', (req, res) => {
  userprofile.findOrCreate({
    where: {
      name: req.body.nickname,
      picture: req.body.picture
    }
  })
  .spread((userprofile, created)=>{
    console.log(userprofile.get({
      plain: true
    }))
    console.log('this is the created table entry', created)
  })
  .then((result)=>{
    res.send(result);
  })
})

router.get('/public', (req, res) => {
  console.log(req.body);
  res.status(200).send(result);  
})
  


module.exports = router;