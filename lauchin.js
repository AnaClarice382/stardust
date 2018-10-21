var request = new XMLHttpRequest();

request.open('GET', 'https://api.spacexdata.com/v3/launches/past', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);


  if (request.status >= 200 && request.status < 400) {
    data.forEach(launch => {
        launch.rocket.rocket_name = document.querySelector('[name=nomefoguete]'),
        launch.rocket.rocket_name = document.querySelector('[name=nomefoguete]')
    });
  } else {
    console.log('error');
  }
}


request.send();