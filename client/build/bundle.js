/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  new UI();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Cities = __webpack_require__(2);
	
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var City = __webpack_require__(3);
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var City = function(options){
	  this.name = options.name;
	  this.country = options.country;
	  this.population = options.population;
	  this.image = options.image;
	}
	
	module.exports = City;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map