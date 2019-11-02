const 
  express = require('express'),
  exphbs = require('express-handlebars')
  routes = require('./controllers/burgers_controller');

let PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
//app settings
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function(){
  console.log(`App listening on http://localhost:${PORT}`)
});

