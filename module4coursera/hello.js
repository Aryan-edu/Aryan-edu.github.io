(function (window) {
var helloSpeaker ={};
var Greet= "Hello";
helloSpeaker.speak = function (name) {
  console.log(Greet+" "+name);
}
window.helloSpeaker= helloSpeaker;

})(window);