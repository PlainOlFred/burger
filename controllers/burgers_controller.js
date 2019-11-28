const
  express = require('express'),
  burger = require('../models/burger');

const router = express.Router();

router
.route('/') 
  .get( (req, res) => {
    burger.selectAll((data) => {
      let burgers = {
        burgers: data
      };
      
      console.log(burgers);
      res.render("index", burgers);
    });
  });

router
.route('/api/burgers/create')
  .post( (req, res) => {
    //  console.log(`RESQUEST BODY: ${req.body.burger_input}`)
    burger.insertOne( 
      req.body.burger_input, 
      (result) => {
        console.log('post: ' + result)
        res.redirect('/');
      })

  });

router
.route('/api/burgers/:id')
  .put( (req, res) => {
    let condition = `id = ${req.params.id}`
    
    burger.updateOne(
     condition, 
     (result) => {
       console.log(result)
     
        res.status(200).end();
    
    })

  })
  
  

module.exports = router;
