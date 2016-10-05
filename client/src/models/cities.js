var City = require('./city');

var Cities = function(){

  var city1 = new City({
    name: "Barcelona",
    country: "Spain",
    population: "5,375,774",
    image: "https://media.timeout.com/images/101851347/image.jpg"
  });

  var city2 = new City({
    name: "Vancouver",
    country: "Canada",
    population: "2,313,328",
    image: "http://the-peak.ca/wp-content/uploads/2015/04/vancouver_skyline_281-1.jpg"
  });

  var city3 = new City({
    name: "Gaborone",
    country: "Botswana",
    population: "421,907",
    image: "http://www.botswanasafaripackages.com/img/gaborone-botswana.jpg"
  });

  return [city1, city2, city3];

}

module.exports = Cities;