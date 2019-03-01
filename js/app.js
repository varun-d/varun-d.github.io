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


// Testing mobile paralax!

window.addEventListener('deviceorientation', function(eventData) {
  // Retrieving the front/back tilting of the device and moves the
  // background in the opposite way of the tilt

  var yTilt = Math.round(( -eventData.beta + 90) * (40/180) - 40);

  // Retrieve the side to side tilting of the device and move the
  // background the opposite direction.

  var xTilt = Math.round( -eventData.gamma * (20/180) - 20);

  // Thi 'if' statement checks if the phone is upside down and corrects
  // the value that is returned.
  if (xTilt > 0) {
    xTilt = -xTilt;
  } else if (xTilt < -40) {
    xTilt = -(xTilt + 80);
  }

  var backgroundPositionValue = yTilt + 'px ' + xtilt + "px";

  document.body.style.backgroundPosition = backgroundPositionValue;
}, false);