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

router
.route('/api/burgers')
  .post( (req, res) => {
    burger.insertOne( 
      [req.body.burger_name], 
      () => {
        res.status(200).end();
      })

  })

  .put( (req, res) => {
    burger.updateOne()

  })
  
  

module.exports = router;
