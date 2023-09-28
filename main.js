let temp = document.querySelector("#temp")
let tempDiscription = document.querySelector("#tempDiscription")
let Country = document.querySelector("#Country")
let weekday = document.querySelector("#week-day")
let wind = document.querySelector("#wind")
let body = document.querySelector("body")





const api ={
    key: '3a7063b284370d7299850e6a392c8ad7',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};

let city = "Tashkent"
let units = "metric"
let apiKey = api.key

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;


function getResults () {
    fetch(apiUrl)
    .then((response) => {
        return response.json()
    })
    .then(displayResults())
    .finally("eeeeeee")
}

getResults()

function displayResults (weather) {
    console.log(weather)
    Country.innerHTML = weather.sys.country
    temp.innerHTML = weather.main.temp + "●C"    
}
    
