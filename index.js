let request = require('request');
var prettyjson = require('prettyjson');

let apiKey = '8f5a61dcce118e647b65316662f20480'
let city = 'new brunswick';
let countryCode = 'us';
let zipCode = '08901';
let weatherArray = [];


//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
let url = `http://api.openweathermap.org/data/2.5/forecast/hourly?zip=${zipCode},${countryCode}&units=imperial&appid=${apiKey}`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    //let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
    //console.log(prettyjson.render(body));
    let weather = JSON.parse(body);
    //console.log(weather);
    //## this starts at 21:00 or 9 pm? 
    //console.log(weather.list[0])
    for(let i = 0; i<=24;i++){
    	weatherArray.push(weather.list[i]);
    }
    //console.log(weatherArray);
    console.log(JSON.stringify(weatherArray,null,4));
  }
});