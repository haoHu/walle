"use strict";

let jibo = require('jibo');
let Status = jibo.bt.Status;
window.Walle = {};
let root = window.location.href;
root = root.slice(0, root.lastIndexOf('/'));
window.Walle.RootPath = root;
require('./main');


jibo.init('face', function(err) {
  if (err) {
    return console.error(err);
  }
  // Load and create the behavior tree
  let root = jibo.bt.create('../behaviors/main');
  root.start();

  // Listen for the jibo main update loop
  jibo.timer.on('update', function(elapsed) {
    // If the tree is in progress, keep updating
    if (root.status === Status.IN_PROGRESS) {
      root.update();
    }
  });
});
