//Request for OpenWeatherAPI
var weatherApi = function() {
    var latitude = "44.986656";
    var longitude = "-93.258133";
    var apiKey = "5ba108ef8304fea45cf37033129cadbd";
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
}

weatherApi();