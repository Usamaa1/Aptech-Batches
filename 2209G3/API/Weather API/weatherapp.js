function weather() {
    
    let userInput = document.querySelector("#userInput").value

    console.log(userInput)
    
    
    axios.get(`http://api.weatherapi.com/v1/current.json?key=702ba59b34324984a5e101927223112&q=${userInput}`)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.current.temp_c);
        console.log(response.data.current.humidity)
        console.log(response.data.current.wind_dir)
        console.log(response.data.current.wind_kph)
        console.log(response.data.current.condition.text)
        console.log(response.data.current.condition.icon)

        document.querySelector("#temp").innerHTML = `${response.data.current.temp_c}°C`
        document.querySelector("#humidity").innerHTML = response.data.current.humidity
        document.querySelector("#windDir").innerHTML = response.data.current.wind_dir
        document.querySelector("#windKPH").innerHTML = response.data.current.wind_kph
        document.querySelector("#weatherCondition").innerHTML = response.data.current.condition.text
        document.querySelector("#weatherImage").src = `https:${response.data.current.condition.icon}`





      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}


