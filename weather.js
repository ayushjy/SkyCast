
// weather API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '72ed54729dmshf9ca1af4edff508p1f1f2ejsn965d65d12053',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


localStorage.setItem("cityname","city");
const getweather = (city) => {  
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
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