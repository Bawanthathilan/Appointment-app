var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectID;

router.get('/appointments', (req,res,next)=>{
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.post('/appointments', (req,res,next)=>{
  const {appointmentDate , name , email , message} = req.body;
  if(appointmentDate|| name ||email || message){
    return res.status(400).json({
      message: "Appointment date, name, email and message are required",
    });
  }

  const payload = { appointmentDate , name , email , message};
  req.collection.insertOne(payload)
  .then(result => res.json(result))
  .catch(error=> res.send(error));
});


module.exports = router;
