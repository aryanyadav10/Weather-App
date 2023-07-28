//declarations
let input = document.querySelector('.input');
const container = document.querySelector('.container');
const result = document.querySelector('.result');
const form = document.querySelector('.form');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.t');
const weather = document.querySelector('.weather');
const loca = document.querySelector('.loca');
const fe = document.querySelector('.f');
const hu = document.querySelector('.h');
const s = document.querySelector('.s');
const btn = document.querySelector('.btn');

//event listeners
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    getInfo(input.value);
});
btn.addEventListener('click',()=> {
    container.style.display = 'block';
    result.style.display = 'none';
    input.value = "";
});

//variables
let value;
let i,t,w,l,f,h,wi;
let key = '5442e534bf99ec26d74035491d19ee7a'

//fetching func
async function getInfo(value) {
    //fetching url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    //assigning values
    i = data.weather[0].icon;
    t = data.main.temp;
    w = data.weather[0].description;
    l = data.name;
    f = data.main.feels_like
    h = data.main.humidity;
    wi = data.wind.speed;

    //changing html & style
    container.style.display = 'none';
    result.style.display = 'block';
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${i}@2x.png" alt="icon">`;
    temp.innerHTML = `${t}`;
    weather.innerHTML = `${w}`;
    loca.innerHTML = `${l}`;
    fe.innerHTML = `${f}`;
    hu.innerHTML = `${h}`;
    s.innerHTML = `${wi}`;
}
