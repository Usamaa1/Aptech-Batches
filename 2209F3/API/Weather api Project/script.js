
function weatherApp(){

    let userInput = document.getElementById('userInput').value



    axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q="${userInput}"`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.data.current.temp_c)
      console.log(response.data.current.temp_f)
      console.log(response.data.current.humidity)
      console.log(response.data.current.wind_dir)
      console.log(response.data.current.wind_kph)
      console.log(response.data.current.pressure_in)
      console.log(response.data.current.precip_in)
      console.log(response.data.current.condition.icon)
      console.log(response.data.current.condition.text)
      console.log(response.data.location.country)
      console.log(response.data.location.name)
      console.log(response.data.location.region)

      document.getElementById('temp-c').innerHTML = response.data.current.temp_c
      document.getElementById('temp-f').innerHTML = response.data.current.temp_f
      document.getElementById('humidity').innerHTML = response.data.current.humidity
      document.getElementById('wind-dir').innerHTML = response.data.current.wind_dir
      document.getElementById('wind-speed').innerHTML = response.data.current.wind_kph
      document.getElementById('pressure').innerHTML = response.data.current.pressure_in
      document.getElementById('precipitation').innerHTML = response.data.current.precip_in
      document.getElementById('condition').innerHTML =response.data.current.condition.text
      document.getElementById('country').innerHTML = response.data.location.country
      document.getElementById('name').innerHTML = response.data.location.name
      document.getElementById('region').innerHTML = response.data.location.region
      document.getElementById('icon').src = `https:${response.data.current.condition.icon}`









  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}


