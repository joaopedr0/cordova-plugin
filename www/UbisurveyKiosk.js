var exec = require('cordova/exec');

var Kiosk = {
  setKioskEnabled(enabled) {
    exec(null, null, "UbisurveyKiosk", "setKioskEnabled", [!!enabled]);
  },

  switchLauncher: function() {
    exec(null, null, "UbisurveyKiosk", "switchLauncher", []);
  },

  isInKiosk: function(callback) {
    exec(
      function(out) {
        callback(out == "true");
      },
      function(error) {
        alert("UbisurveyKiosk.isInKiosk failed: " + error);
      },
      "UbisurveyKiosk",
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
      "UbisurveyKiosk",
      "isSetAsLauncher",
      []
    );
  }
};

module.exports = Kiosk;