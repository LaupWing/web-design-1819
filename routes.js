const express = require('express');
const routes = express.Router();
const fs = require('fs');
const startTime = Date.now();
console.log(startTime)

routes.get('/', (req,res)=>{
    const json = fs.readFileSync('./static/json/subtitle-1min.json').toString();
    console.log(json)
    // setInterval(()=>{
    //     const elapsedTime = Date.now() - startTime;
    //     console.log((elapsedTime/1000).toFixed(3))
    // },100)
    res.render('index');
})
module.exports = routes