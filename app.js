const express = require("express")
const app = express()
require("dotenv").config()

require("./models/connect")
app.listen(3000,console.log("服务器启动了")
)
 
//  
var expressLayouts = require('express-ejs-layouts');

app.locals.data=null
 
app.set('view engine', 'ejs');
app.set("views",__dirname+"/views")
app.set("layout","jiu/template")
app.use(expressLayouts);
app.use(express.static("public"))

app.use("/book",require("./routes/book"))




app.get('/', function(req, res) {
  var data = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };  
  res.render('view', data);
});