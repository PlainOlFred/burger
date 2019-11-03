const
  express = require('express'),
  burger = require('../models/burger');

const router = express.Router();

router
.route('/') 

  .get( (req, res) => {
    burger.selectAll( (data) => {
      let burgers = {
        burgers: data
      };
      
      console.log(burgers);
      res.render('index', burgers)
    });
  })

  .post( (req, res) => {
    burger.insertOne([
      'burger_name', 'devoured'
    ], [
      req.body.burger_name, req.body.devoured

    ], (result) => {
      res.status(200).end();
    })

  })

  .put( (req, res) => {
    burger.updateOne()

  })
  
  

module.exports = router;
