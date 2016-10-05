var Cities = require("../models/cities");

var UI = function(){
  var cities = new Cities();
  this.render(cities);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  appendImg: function(element, url){
    var img = document.createElement('img');
    img.src = url;
    img.width = "500";
    element.appendChild(img);
  },

  render: function(cities){
    var container = document.getElementById("cities");

    for(var city of cities) {
      var li = document.createElement("li");
      this.appendText(li, city.name, "Name: ");
      this.appendText(li, city.country, "Country: ");
      this.appendText(li, city.population, "Population ");
      this.appendImg(li, city.image);
      container.appendChild(li);
    }
  }
}

module.exports = UI;