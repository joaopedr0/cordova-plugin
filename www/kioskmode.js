var exec = require('cordova/exec');

var Kiosk = {

  switchLauncher: function() {
    exec(null, null, "KioskMode", "switchLauncher", []);
  },

  isInKiosk: function(callback) {
    exec(
      function(out) {
        callback(out == "true");
      },
      function(error) {
        alert("KioskMode.isInKiosk failed: " + error);
      },
      "KioskMode",
      "isInKiosk",
      []
    );
  },

  isSetAsLauncher: function(callback) {
    exec(
      function(out) {
        callback(out == "true");
      },
      function(error) {
        alert("Kiosk.isSetAsLauncher failed: " + error);
      },
      "KioskMode",
      "isSetAsLauncher",
      []
    );
  }
};

module.exports = Kiosk;