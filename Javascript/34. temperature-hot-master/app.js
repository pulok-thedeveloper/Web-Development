//DO NOT show API KEY like this
const API_KEY = `081a3fa1d137e245da8d13855b919422`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    console.log(data)
    temperature.innerText = data.main.temp;
}


document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');