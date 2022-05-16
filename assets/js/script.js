var apiKey = "5ba108ef8304fea45cf37033129cadbd";
var geoKey = "9eca3ef09bf33b75f86893b2ec7e832d";
var currentDate = document.getElementById("currentDate");
var day = moment().format("MMMM Do");
var tomorrow = moment().add(1, 'day').format("MMMM Do");
var day2 = moment().add(2, 'day').format("MMMM Do");
var day3 = moment().add(3, 'day').format("MMMM Do");
var day4 = moment().add(4, 'day').format("MMMM Do");
var day5 = moment().add(5, 'day').format("MMMM Do");

//Submit button click event and append new search button to list
var searchArray = [];
var searchHistory = document.getElementById('searchHistory');
var search = document.getElementById('search');
var submit = document.getElementById('submit');

//Display date
currentDate.innerHTML = day;
document.getElementById('tomorrow').innerHTML = tomorrow;
document.getElementById('day-2').innerHTML = day2;
document.getElementById('day-3').innerHTML = day3;
document.getElementById('day-4').innerHTML = day4;
document.getElementById('day-5').innerHTML = day5;

//Geocoding location
var citySearch = submit.addEventListener('click', function(){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search.value}&limit=5&appid=${geoKey}`)
    .then(function(response){
        response.json().then(function(data){          
            var latitude = data[0].lat;
            var longitude = data[0].lon;
            //Search history buttons

            var newBtn = document.createElement('button');
            newBtn.innerHTML = search.value;
            document.getElementById('searchEl').appendChild(newBtn);   
            localStorage.setItem("key", search.value);
            searchArray.push(search.value);
            newBtn.setAttribute("type", "submit");

            newBtn.addEventListener('click', function() {
                
            })

            //Console log the array
            console.log(searchArray);
            //Search history buttons


            fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
                .then(function(response){
                response.json().then(function(data){
                console.log(data);
                //Add name of city to HTML
                document.getElementById('city').innerHTML = search.value + " - " + day;
                //Get weather icon
                var weatherIcon = data.current.weather[0].icon;
                console.log(weatherIcon)
                var weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"
                document.getElementById('weatherId').src = weatherIconUrl;
                document.getElementById('currentTemp').innerHTML = data.current.temp + " °F";
                document.getElementById('currentWind').innerHTML = data.current.wind_speed + " MPH";
                document.getElementById('currentHumidity').innerHTML = data.current.humidity + " %";
                document.getElementById('currentUv').innerHTML = data.current.uvi;
                console.log(data.current.uvi);
                //UV Index background color
                if (data.current.uvi < 3){
                    $('.currentUv').addClass('safe')
                } else if (data.current.uvi >=3 && data.current.uvi < 6) {
                    $('currentUv').addClass('moderate')
                } else {
                    $('currentUv').addClass('danger')
                }
                    
                
                //Next Day Info
                var weatherIcon1 = data.daily[0].weather[0].icon;
                console.log(weatherIcon1)
                var weatherIcon1Url = "http://openweathermap.org/img/wn/" + weatherIcon1 + "@2x.png"
                document.getElementById('weatherId1').src = weatherIcon1Url;

                document.getElementById('oneDayTemp').innerHTML = data.daily[0].temp.max + " °F";
                document.getElementById('oneDayWind').innerHTML = data.daily[0].wind_speed + " MPH";
                document.getElementById('oneDayHumidity').innerHTML = data.daily[0].humidity + " %";
                //Day 2 Info
                var weatherIcon2 = data.daily[1].weather[0].icon;
                var weatherIcon2Url = "http://openweathermap.org/img/wn/" + weatherIcon2 + "@2x.png";
                console.log(weatherIcon2);
                document.getElementById('weatherId2').src = weatherIcon2Url;
                document.getElementById('twoDayTemp').innerHTML = data.daily[1].temp.max + " °F";
                document.getElementById('twoDayWind').innerHTML = data.daily[1].wind_speed + " MPH";
                document.getElementById('twoDayHumidity').innerHTML = data.daily[1].humidity + " %";
                //Day 3 Info
                var weatherIcon3 = data.daily[2].weather[0].icon;
                var weatherIcon3Url = "http://openweathermap.org/img/wn/" + weatherIcon3 +"@2x.png";
                console.log(weatherIcon3);
                document.getElementById('weatherId3').src = weatherIcon3Url;

                document.getElementById('threeDayTemp').innerHTML = data.daily[2].temp.max + " °F";
                document.getElementById('threeDayWind').innerHTML = data.daily[2].wind_speed + " MPH";
                document.getElementById('threeDayHumidity').innerHTML = data.daily[2].humidity + " %";
                //Day 4 Info
                var weatherIcon4 = data.daily[3].weather[0].icon;
                var weatherIcon4Url = "http://openweathermap.org/img/wn/" + weatherIcon4 +"@2x.png";
                console.log(weatherIcon4);
                document.getElementById('weatherId4').src = weatherIcon4Url;
                document.getElementById('weatherId3').src = weatherIcon3Url;
                document.getElementById('fourDayTemp').innerHTML = data.daily[3].temp.max + " °F";
                document.getElementById('fourDayWind').innerHTML = data.daily[3].wind_speed + " MPH";
                document.getElementById('fourDayHumidity').innerHTML = data.daily[3].humidity + " %";
                //Day 5 Info
                var weatherIcon5 = data.daily[4].weather[0].icon;
                var weatherIcon5Url = "http://openweathermap.org/img/wn/" + weatherIcon5 +"@2x.png";
                console.log(weatherIcon5);
                document.getElementById('weatherId5').src = weatherIcon5Url;
                document.getElementById('fiveDayTemp').innerHTML = data.daily[4].temp.max + " °F";
                document.getElementById('fiveDayWind').innerHTML = data.daily[4].wind_speed + " MPH";
                document.getElementById('fiveDayHumidity').innerHTML = data.daily[4].humidity + " %";
                })

            });


        })
                })
    })

    
