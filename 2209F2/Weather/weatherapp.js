// // console.log("hello")

// function weatherInfo(){

 
//   let cityName = document.querySelector('#cityName').value
  
//   console.log(cityName)


//   axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q="${cityName}"`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     console.log(`${response.data.current.temp_c}°C`);
//     document.querySelector('#currentTemp').innerHTML = `${response.data.current.temp_c}°C`
//     document.querySelector('#humidity').innerHTML = `Humidity : ${response.data.current.humidity}`
//     document.querySelector('#windDir').innerHTML = `Wind Direction : ${response.data.current.wind_dir}`
//     document.querySelector('#weatherImg').src = `https:${response.data.current.condition.icon}`;
//     document.querySelector('#condition').innerHTML = `Weather Condition : ${response.data.current.condition.text}`;
//     console.log(response.data.current.condition.icon);


//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


// }

let a = 30;

if(a <= 10){
  document.querySelector('#bar').style.height = '10px'
  
}else if(a <= 20){
  document.querySelector('#bar').style.height = '30px'
}else if(a <= 30){
  document.querySelector('#bar').style.height = '50px'

}

