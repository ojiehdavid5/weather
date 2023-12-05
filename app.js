// jshint eversion:6


const express= require( 'express');
const nodemon = require('nodemon');
const app=express();
const bodyParser=require('body-parser');
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))

app.get("/", function(req,res){

res.sendFile(__dirname+"/index.html"); 


})

 app.post("/",function(req,res){
    

    const query=(req.body.cityName);
    const apiKey="9196ce01acc42638648d410a30da60e0"
    const unit="metric"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+",uk&&appid="+apiKey+"&units="+unit;
    
     https.get(url, function(response){
      console.log(response.statusCode);
      response.on("data",function(data){
         const weatherData=JSON.parse(data);
         const temp=weatherData.main.temp
        const weatherDescription=weatherData.weather[0].description
        const icon=weatherData.weather[0].icon
        const imageUrl="https://openweathermap.org/img/wn/"+ icon +  "@2x.png"
        
        res.write( "<h1>The weather in" + query + "is "+ temp + "degree </h1>"); 
        res.write("the weather is currently "+ weatherDescription +"</p>");
        res.write("<img src="+imageUrl+ ">");
        res.send();
    
    
    
    
      })
     
     })
    




 })


//  newsletter
// app.get("/news",function(req,res){
//     res.sendFile(__dirname +"/sign.html");
// })


app.listen(3000 ,function(req,res){
    console.log("server is running");
})
