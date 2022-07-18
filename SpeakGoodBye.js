(function(window){
  var speakWord="Good Bye";
  var byespeaker=function(name){
    console.log(speakWord+" "+name);
  }
window.byeSpeaker=byeSpeaker;
})(window);
