(function(window){
  var speakWorld="Hello";
  var helloSpeaker=function(name){
    console.log(speakWord+" "+name);
  }
  window.helloSpeaker=helloSpeaker;
})(window);
