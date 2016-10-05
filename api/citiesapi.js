var CitiesApi = function(app) {

  var Cities = require("../client/src/models/cities");  
  var City = require("../client/src/models/city");

  var result = new Cities();
  app.get("/api/cities", function(req, res) {
    res.json({data: result});
  });

  app.get("/api/cities/:id", function(req, res) {
    var foundCity = req.params.id;
    res.json({data: result[foundCity]});
  });

  app.delete("/api/cities/:id", function(req, res) {
    result.splice(req.params.id, 1);
    res.json({data: result});
  });

  //add puts and post if time;

}

module.exports = CitiesApi;