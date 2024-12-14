const express = require("express")
const Router = express.Router()
 
Router.get("/",(req,res)=>{
    res.send("909")
})



module.exports = Router