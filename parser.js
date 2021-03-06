var jsonFile;
var listOfControls = [];

init();

function Controls(name, type, x, y, width, height, text) {
  this.name = name;
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
}
function Controls(type, x, y, width, height, text) {
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
}

function init() {
  $.getJSON("http://localhost:4000/sample.json", function(data) {
    if(data.title!= null){
      setPageTitle(data.title);
    }

    $.each(data.controls, function(key, val) {
      if(val.name!=null){
        var tempUIControl = new Controls(val.name, val.type, val.x, val.y, val.width, val.height, val.text);
      }else {
        var tempUIControl = new Controls(val.type, val.x, val.y, val.width, val.height, val.text);
      }
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
      case 1:
      if(tempUIControl.name!= null){
        $elem = createUIControlButton(tempUIControl.text, tempUIControl.name, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
      }else{
        $elem = createUIControlButton(tempUIControl.text, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
      }

        break;

      case 2:
      if(tempUIControl.name!= null){
        $elem = createUIControlLabel(tempUIControl.text, tempUIControl.name, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
      }else{
        $elem = createUIControlLabel(tempUIControl.text, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
      }
        break;
        case 3:
        if(tempUIControl.name!= null){
          $elem = createUIControlTextBox(tempUIControl.text, tempUIControl.name, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
        }else{
          $elem = createUIControlTextBox(tempUIControl.text, tempUIControl.y, tempUIControl.x, tempUIControl.width, tempUIControl.height);
        }
          break;
    }
    $('.container').append($elem);
  })
}

function createUIControlButton(textUI, nameUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  console.log("Adding Button: " + nameUI);
  $elem = $('<button/>', {
    text: textUI,
    id: nameUI,
    class: 'btn btn-primary'
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  return $elem;
}

function createUIControlButton(textUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  console.log("Adding Button: ");
  $elem = $('<button/>', {
    text: textUI,
    class: 'btn btn-primary'
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  return $elem;
}

function createUIControlTextBox(textUI, nameUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  $elem = $('<input/>', {
    class: 'form-control',
    type: 'text',
    value: textUI,
    id: nameUI
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  console.log("Adding Textbox: " + nameUI);
  return $elem;
}

function createUIControlTextBox(textUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  $elem = $('<input/>', {
    class: 'form-control',
    type: 'text',
    value: textUI
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  console.log("Adding Textbox: ");
  return $elem;
}

function createUIControlLabel(textUI, nameUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  $elem = $('<label/>', {
    text: textUI
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  console.log("Adding Label: " + nameUI);
  return $elem;
}

function createUIControlLabel(textUI, yUI, xUI, widthUI, heightUI) {
  var $elem;
  $elem = $('<label/>', {
    text: textUI
  });
  $elem.css({
    position: "absolute",
    top: yUI + "pt",
    left: xUI + "pt",
    width: widthUI + "pt",
    height: heightUI + "pt"
  });
  console.log("Adding Label: ");
  return $elem;
}
