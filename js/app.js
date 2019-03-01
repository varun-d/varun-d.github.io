document.addEventListener('DOMContentLoaded', function() {

  // Get all grouped button elemnets
  var elems_float_btns = document.querySelectorAll('.fixed-action-btn');
  
  // Get all tooltiped elements
  var elems_tt = document.querySelectorAll('.tooltipped');
  
  // Get all modals
  var elems_modals = document.querySelectorAll('.modal');
  
  // Init all of the above.
  var float_btns_instances = M.FloatingActionButton.init(elems_float_btns, {
    direction: 'top',
  });

  var tt_instances = M.Tooltip.init(elems_tt, {
    position: 'left',
    // enterDelay: 420
  });

  var modal_instances = M.Modal.init(elems_modals, {
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