// A $( document ).ready() block.
$(document).ready(function () {


    var apikey = "3de8e5c96074deb31545d02b264c32fa";

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="

    //jquery version:

    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        var cityName = $("#searchBar").val().trim();
        console.log(cityName)
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3de8e5c96074deb31545d02b264c32fa",
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#city").text("city name:" + response.name);
            $("#currentwind").text("wind speed:" + response.wind.speed);
            $("#currentHumidity").text("humidity:" + response.main.humidity);


           
        })

    }) 
    function secondapiquery (latitude,longitude){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&exclude=minutely,hourly&appid=3de8e5c96074deb31545d02b264c32fa"

        }).then(function (response_two) {
            $("#cityNow").append(response.name)
            document.querySelector("#cityNow").innerHTML += response.name
            //google and experiment with figuring out how to apply the date to the page
            document.querySelector("#currentUVI").innerHTML += response_two.current.uvi
            document.querySelector("#currentTemp").innerHTML += (+response_two.current.temp - 273.15) * 9 / 5 + 32
            document.querySelector("#currentHumidity").innerHTML += response_two.current.humidity
           console.log("response two")
            console.log(response_two)
        })
    }


})