const apikey = "dfab600b5ce41cbbd92339896120908d";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
 async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);

if(response.status==404){
   document.querySelector(".error").style.display = "block";
   document.querySelector(".weather").style.display = "none";
}
else{
   var data = await response.json();
   // console.log(data);
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed +"Km/h"; 
 if(data.weather[0].main=="Clouds"){
  weatherIcon.src = "weather-app-img/images/clouds.png";
 }  
 if(data.weather[0].main=="Clear"){
  weatherIcon.src = "weather-app-img/images/clear.png";
 }  
 if(data.weather[0].main=="Rain"){
  weatherIcon.src = "weather-app-img/images/rain.png";
 }  
 if(data.weather[0].main=="Drizzle"){
  weatherIcon.src = "weather-app-img/images/drizzle.png";
 }  
 if(data.weather[0].main=="Mist"){
  weatherIcon.src = "weather-app-img/images/mist.png";
 }  
 document.querySelector(".error").style.display = "none";
 document.querySelector(".weather").style.display = "block";
}
   
 }
 searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
 })
 function makeNavbarSticky() {
   const navbar = document.getElementById('sidemenu');
   const navbarHeight = navbar.offsetHeight; // Get the height of the navigation bar

   if (window.scrollY >= navbarHeight) {
       navbar.classList.add('sticky');
   } else {
       navbar.classList.remove('sticky');
   }
}

// Attach the scroll event listener
window.addEventListener('scroll', makeNavbarSticky);
function openPopup() {
   const popup = document.getElementById('popup');
   popup.style.display = 'block';
 }
 
 // Function to close the popup when the close button is clicked
 function closePopup() {
   const popup = document.getElementById('popup');
   popup.style.display = 'none';
 }
 window.addEventListener('load', openPopup);

 var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}
