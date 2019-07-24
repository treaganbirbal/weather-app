window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      long = position.coords.longitude
      lat = position.coords.latitude

      const proxy = 'http://cors-anywhere.herokuapp.com/'
      const api = `${proxy}https://api.darksky.net/forecast/98db2777f123024b31f058801f9c375b/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
          })
          .then(data => {
            const {temperature, summary, icon} = data.currently;
            //set DOM elements from the API
            temperatureDegree.textContent = temperature
            temperatureDescription.textContent = summary
            locationTimezone.textContent = data.timezone;
            //set icons
        })
    });

  } else {
    h1.textContent = "Need location to find weather. Please enable Location in browser settings"
  }

  function setIcon(icon, iconID){
    const skycons = new skycons({color: "white"})
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
