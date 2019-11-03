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
  })

// router
// .route('/api/burgers')
//   .post( (req, res) => {
//     burger.insertOne( 
//       [req.body.burger_name], 
//       () => {
//         res.status(200).end();
//       })

//   })
router
.route('api/burgers/:id')
  .put( (req, res) => {
    let condition = `id = ${req.params.id}`

    burger.updateOne(
    //   {
    //   devoured: req.body.devoured,
    // }
     condition, (result) => {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

    })

  })
  
  

module.exports = router;
