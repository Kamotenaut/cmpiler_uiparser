var jsonFile;
var listOfControls = [];

init();

function Controls(name, type, x, y, width, height) {
  this.name = name;
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function init() {
  $.getJSON("http://localhost:3000/sample.json", function(data) {
    setPageTitle(data.title);
    $.each(data.controls, function(key, val) {
      var tempUIControl = new Controls(val.name, val.type, val.x, val.y, val.width, val.height);
      addUIControlButtion(tempUIControl);
      //listOfControls.push(tempUIControl);
      console.log(val.name)
    })
    console.log("current length of listofcontrols: " + listOfControls.length);
  });
  //initUIControls();
}

function initUIControls() {
  iterateThroughUIControls();
  console.log("read all the controls");
}

function setPageTitle(title) {
  $(document).ready(function() {
    document.title = title;
  });
}

function iterateThroughUIControls() {
  console.log(listOfControls.length)
  console.log(listOfControls)
  $.each(listOfControls, function(index, value) {
    console.log(value.name);
  });
  console.log("iterating");
}

function createUIControlElements() {
  var item = [];
  $.each(this.listOfControls, function(index, value) {
    console.log(value);
  })
}

function addUIControlButtion(tempUIControl) {
  $(document).ready(function() {
    console.log(tempUIControl);
    var $elem;
    switch (tempUIControl.type) {
      case "1":
        console.log("Adding Button: " + tempUIControl.name);
        $elem = $('<button/>', {
          text: tempUIControl.name,
          id: tempUIControl.name,
          class: 'btn btn-primary'
        });
        $elem.css({
          position: "absolute",
          top: tempUIControl.y,
          left: tempUIControl.x,
          width: tempUIControl.width,
          height: tempUIControl.height
        });

        break;
      case "2":
        $elem = $('<input/>', {
          class: 'form-control',
          type: 'text',
          text: tempUIControl.name,
          id: tempUIControl.name
        });
        $elem.css({
          position: "absolute",
          top: tempUIControl.y,
          left: tempUIControl.x,
          width: tempUIControl.width,
          height: tempUIControl.height
        });
        console.log("Adding Textbox: " + tempUIControl.name);
        break;
      case "3":
        $elem = $('<input/>', {
          class: 'form-control',
          type: 'text',
          text: tempUIControl.name,
          id: tempUIControl.name
        });
        $elem.css({
          position: "absolute",
          top: tempUIControl.y,
          left: tempUIControl.x,
          width: tempUIControl.width,
          height: tempUIControl.height
        });
        console.log("Adding Label: " + tempUIControl.name);
        break;
    }
    $('.container').append($elem);
  })
}
