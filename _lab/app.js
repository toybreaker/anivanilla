//app.js



var request = new XMLHttpRequest();
request.open('GET', '/data/years.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        console.log("year: " + obj.year + ", " + obj.animal + ", " + obj.element);

    }

  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
