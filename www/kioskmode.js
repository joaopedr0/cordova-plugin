var exec = require('cordova/exec');

var Kiosk = {
  setKioskEnabled(enabled) {
    exec(null, null, "KioskMode", "setKioskEnabled", [!!enabled]);
  },

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