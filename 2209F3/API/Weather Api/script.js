// function add(){
    
//     let a = document.querySelector('#num1').value
//     let b = document.querySelector('#num2').value
//     // console.log(Number(a) + Number(b))
//     let c = Number(a) + Number(b);
//     document.querySelector('#result').innerHTML = c
// }

// document.querySelector('h1').style.color = "red"




// Weather App


// function weatherApp(){
//     let userInput = document.querySelector('#userInput').value
//     console.log(userInput)
//     axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q=${userInput}`)
//       .then(function (response) {
//         // handle success
        
    
//     document.querySelector('#temp').innerHTML = `Temperature : ${response.data.current.temp_c}`
//     document.querySelector('#weatherCondition').innerHTML = `Weather Condition : ${response.data.current.condition.text}`
//     document.querySelector('#humidity').innerHTML = `Humidity : ${response.data.current.humidity}`
//     document.querySelector('#weatherIcon').src = `https:${response.data.current.condition.icon}`
    
    
//         console.log(response.data.current.condition.icon);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
//       });

// }

// Make a request for a user with a given ID

function weatherApp(){
  let userInput = document.getElementById('userInput').value

  axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q=${userInput}`)
    .then(function (response) {
      // handle success
      // console.log(response.data.current.temp_c);
      // console.log(response.data.current.humidity);
      console.log(response.data.current.condition.icon);
      
      document.getElementById('temp').innerHTML = response.data.current.temp_c
      document.getElementById('weatherCondition').innerHTML = response.data.current.condition.text
      document.getElementById('weatherIcon').src = `https:${response.data.current.condition.icon}`
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

