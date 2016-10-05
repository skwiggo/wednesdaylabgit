var City = require('./city');

var Cities = function(){

  var city1 = new City({
    name: "Barcelona",
    country: "Spain",
    population: "5,375,774"
  });

  var city2 = new City({
    name: "Vancouver",
    country: "Canada",
    population: "2,313,328"
  });

  var city3 = new City({
    name: "Gaborone",
    country: "Botswana",
    population: "421,907"
  });

  return [city1, city1, city3];

}


module.exports = Cities;