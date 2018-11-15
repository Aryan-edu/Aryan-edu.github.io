(function (window) {
var names= ["Aryan", "Jaisurya", "Ironman", "Joker", "Thor", "Hulk", "Captain America", "Coursera", "Joey", "Chandler"];
for (var i in names) {
var firstLetter= ((names[i]).charAt(0)).toLowerCase();
if (firstLetter == 'j') {
     window.goodbye.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);