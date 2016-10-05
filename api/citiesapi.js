var CitiesApi = function(app) {

  var cities = require("../client/src/models/cities");
  var City = require("../client/src/models/city");

  app.get("/api/cities", function(req, res) {
    res.json({data: cities});
  });

  app.get("/api/cities/:id", function(req, res) {
    var foundCity = req.params.id;
    res.json({data: cities[foundCity]});
  });

  app.delete("/api/cities/:id", function(req, res) {
    cities.splice(req.params.id, 1);
    res.json({data: cities});
  });

  //add puts and post if time;

}

module.exports = CitiesApi;