// const axios = require('axios');

// Make a request for a user with a given ID
axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q="karachi"`)
.then(function (response) {
  // handle success
console.log(response.data.current.condition.icon)
document.querySelector("img").src = `https:${response.data.current.condition.icon}`


})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});