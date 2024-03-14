
const option = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '72ed54729dmshf9ca1af4edff508p1f1f2ejsn965d65d12053',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};


localStorage.getItem("cityname");
const getaqi = (city) => {
    cityname.innerHTML = city
    fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city, option)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            current.innerHTML = response.overall_aqi
            pma1.innerHTML = response.PM10.concentration
            pma2.innerHTML = response.PM10.aqi
            pmb1.innerHTML = response['PM2.5'].concentration
            pmb2.innerHTML = response['PM2.5'].aqi
            o1.innerHTML = response.O3.concentration
            o2.innerHTML = response.O3.aqi
            no1.innerHTML = response.NO2.concentration
            no2.innerHTML = response.NO2.aqi
            so1.innerHTML = response.SO2.concentration
            so2.innerHTML = response.SO2.aqi
            co1.innerHTML = response.CO.concentration
            co2.innerHTML = response.CO.aqi
        })
        .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getaqi(city.value)
   
})
getaqi("Patna")


showtable1= document.getElementById("showtable1")
showtable2= document.getElementById("showtable2")
currpollutant=document.getElementById("currpollutant")
airquality=document.getElementById("airquality")
showtable1.addEventListener("click",function(event){
    event.preventDefault(); 
    currpollutant.style.display="table";
    airquality.style.display="none";
    return false;
})
showtable2.addEventListener("click",function(event){
    event.preventDefault(); 
    currpollutant.style.display="none";
    airquality.style.display="table";
    return false;
})