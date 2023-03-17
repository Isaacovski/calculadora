var keys = document.querySelectorAll("button");
var total = document.querySelector(".total");
var summary = document.querySelector(".summary");
var decimal = false;
var operators = ["+","-","*","+"];

keys.forEach(key=> {
  key.addEventListener("click", HandleClick);
})

function HandleClick(e) {
  var keyval = e.targetAtribute('data-val');
  output = summary.innerHTML;
  var lastChar = output[output.length - 1];

  if(keyval === "clear" ) {
    total.innerHTML = 0;
    summary.innerHTML = "";
    decimal = false;
  }else if(keyval==="="){
    output = output.replace(g,"*").replace(/+/)g,"/");
    
  }
}