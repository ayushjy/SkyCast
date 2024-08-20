const getweather = (city) => {  
    cityname.innerHTML = capitalizeFirstLetter(city);

    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str; 
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

        localStorage.setItem("cityname", city); 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0005c5f8c8001ce523656f6a17d49a4d&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then((response) => {

            cloud_pct.innerHTML=response.clouds.all
            temp.innerHTML = response.main.temp
            feels_like.innerHTML = response.main.feels_like
            humidity.innerHTML = response.main.humidity
            min_temp.innerHTML = response.main.temp_min
            max_temp.innerHTML = response.main.temp_max
            wind_speed.innerHTML = response.wind.speed
            wind_degrees.innerHTML = response.wind.deg
            const sunriseTime = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
            const sunsetTime = new Date(response.sys.sunset * 1000).toLocaleTimeString();
            sunrise.innerHTML = sunriseTime;  
            sunset.innerHTML = sunsetTime;  
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
    
})
getweather("Delhi")











// fetch API through async await method

// const setHeader={
//     headers:{
//         'X-RapidAPI-Key': '72ed54729dmshf9ca1af4edff508p1f1f2ejsn965d65d12053',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// }
// const getweather =async(city)=>{
//     cityname.innerHTML=city
//     try{
// const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, setHeader);
// const data =  await response.json();
// sunrise.innerHTML=data.sunrise;
// sunset.innerHTML=data.sunset;
// max_temp.innerHTML=data.max_temp;
// min_temp.innerHTML=data.min_temp;
// humidity.innerHTML=data.humidity;
// wind_speed.innerHTML=data.wind_speed;
// wind_degrees.innerHTML=data.wind_degrees;
// temp.innerHTML=data.temp;
// feels_like.innerHTML=data.feels_like;
// cloud_pct.innerHTML=data.cloud_pct;
// }
// catch(err){
//     console.log(`The error is ${err}`);
// }
// }
// submit.addEventListener("Click",(e)=>{
//     e.preventDefault()
//     getweather(city.value)
// })
// getweather("New York")