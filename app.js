window.addEventListener('load', () => {
  let long;
  let lat;

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
            console.log(data)

        })
    });

  } else {
    h1.textContent = "Need location to find weather. Please enable Location in browser settings"
  }
});
