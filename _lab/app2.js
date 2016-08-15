//use json
var request = new XMLHttpRequest();
request.open('GET', './data/years_part.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {


    // Success!
    var data = JSON.parse(this.response);

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        console.log("Name: " + obj.year + ", " + obj.animal);

        //document.write("<a href='#" + obj.animal + "'>" + obj.year + "</a>");
        //document.getElementById("years_links").innerHTML="<a href='#" + obj.animal + "'>" + obj.year + "</a>";
        //<a href='#dragon'>1940</a>


        // function addDiv()
        //  {
        //      var ele=document.createElement('div');
        //      ele.setAttribute('id','element');
        //      ele.setAttribute('style','display:block;border:1px solid;height:20px');
        //      document.body.appendChild(ele);
        //      document.getElementById('element').innerHTML="hi";
        //  }
    }


  } else {
    // We reached our target server, but it returned an error
    var error = serverror
    console.log(error);
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  var error = conerror
  console.log(error);
};

request.send();
