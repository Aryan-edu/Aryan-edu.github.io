(function (window) {
var goodbye = {};
var speakWord = "Goodbye";
goodbye.speak = function(name){
  console.log(speakWord+ " "+name);
}
window.goodbye=goodbye;
})(window);