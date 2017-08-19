const router = require('express').Router();
const userprofile = require('../../db/postgres/models')


router.post('/profiles', (req, res) => {
  userprofile.findOrCreate({
    where: {
      name: req.body.nickname,
      picture: req.body.picture,
      wins: 4,
      losses: 1
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

router.get('/publicprofiles/:username', (req, res) => {
  console.log('the GET to public profiles was GOT:', req.params.username);
  //query the db using the username as a search parameter
  userprofile.findAll({
    where: {
      name: req.params.username
    }
  })
  .then(result => {
    console.log(result);
    res.status(200).send(result); 
  })
})

router.get('/public', (req, res) => {
  console.log(req.body);
  res.status(200).send(result);  
})
  


module.exports = router;