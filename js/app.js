document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {
    position: 'left',
    enterDelay: 420
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    preventScrolling: true
  });
});

// // Open tooltips on clicking of main button
// // Test on live and then remove or keep
// var main_btn = document.getElementById("btn_main");
// main_btn.addEventListener('click', function(){

//   var elems = document.querySelectorAll('.tooltipped');
//   for(var i = 0; i<elems.length; i++) {
//       var instance = M.Tooltip.getInstance(elems[i]);
//       instance.open()
//   }

// }, false)