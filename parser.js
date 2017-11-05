var jsonFile;
var listOfControls = [];

init();
initUIControls();

function Controls(name, type, x, y, width, height) {

console.log("iterating");  this.name = name;
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function init() {
  $.getJSON("http://localhost:3000/sample.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      items.push("<li id='" + key + "'>" + val + "</li>");
    });
    jsonFile = data;
  });

}

function initUIControls() {
  setPageTitle();
  this.listOfControls = [];
  $(document).ready(function() {
    $.each(jsonFile.controls, function(key, val) {
      listOfControls.push(new Controls(val.name, val.type, val.x, val.y, val.width, val.height))
    })
  })
  iterateThroughUIControls();
  console.log("read all the controls");
}

function setPageTitle() {
  $(document).ready(function() {
    document.title = jsonFile.title;
  });
}

function iterateThroughUIControls() {
  $.each(this.listOfControls, function(index, value) {
    console.log(value);
  })
  console.log("iterating");
}

function createUIControlElements() {
  var item = [];
  $.each(this.listOfControls, function(index, value) {
    console.log(value);
  })
}
