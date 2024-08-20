const option = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '72ed54729dmshf9ca1af4edff508p1f1f2ejsn965d65d12053',
        'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
};


localStorage.getItem("cityname");
const getaqi = (aqicity) => {
    const aqicityname = document.getElementById('aqicityname')
    aqicityname.innerHTML = capitalizeFirstLetter(aqicity);

    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

        fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + aqicity, option)
        .then(response => response.json())
        .then((response) => {

            document.getElementById('current').innerHTML = response.overall_aqi;
            document.getElementById('pma1').innerHTML = response.PM10.concentration;
            document.getElementById('pma2').innerHTML = response.PM10.aqi;
            document.getElementById('pmb1').innerHTML = response['PM2.5'].concentration;
            document.getElementById('pmb2').innerHTML = response['PM2.5'].aqi;
            document.getElementById('o1').innerHTML = response.O3.concentration;
            document.getElementById('o2').innerHTML = response.O3.aqi;
            document.getElementById('no1').innerHTML = response.NO2.concentration;
            document.getElementById('no2').innerHTML = response.NO2.aqi;
            document.getElementById('so1').innerHTML = response.SO2.concentration;
            document.getElementById('so2').innerHTML = response.SO2.aqi;
            document.getElementById('co1').innerHTML = response.CO.concentration;
            document.getElementById('co2').innerHTML = response.CO.aqi;
        })
        .catch(err => console.error(err));
};

const cityFromLocalStorage = localStorage.getItem("cityname");
if (cityFromLocalStorage) {
    getaqi(cityFromLocalStorage);
}

document.getElementById('submitaqi').addEventListener("click", (e) => {
    e.preventDefault();
    const aqicity = document.getElementById('aqicity').value;
    getaqi(aqicity);
});

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