
  
  function Flurry() {};

  // These functions must be called before you start the Flurry session

	Flurry.prototype.init = function(appKey) {

		var successCallback,
			failureCallback,
			options;
			
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'initialize', [appKey, options]);
	}; 
  
	Flurry.prototype.setUserId = function (userId, successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'setUserId', [
            userId
        ]);
    };
	
	Flurry.prototype.setAge = function (userId, successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'setAge', [
            age
        ]);
    };	
	
	Flurry.prototype.setGender = function (userId, successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'setGender', [
            gender
        ]);
    };	
	
	// the params parameter is optional
	Flurry.prototype.logEvent = function (event /* [params], successCallback, failureCallback */) {
	
		var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }
		
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logEvent', [
            event,
            false,
            params
        ]);
    };		
	
	// the params parameter is optional
	Flurry.prototype.startTimedEvent = function (event /* [params], successCallback, failureCallback */) {
	
		var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }
		
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logEvent', [
            event,
            true,
            params
        ]);
    };
	
	// the params parameter is optional
	Flurry.prototype.endTimedEvent = function (event /* [params], successCallback, failureCallback */) {
	
		var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }
		
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'endTimedEvent', [
            event,
            true,
            params
        ]);
    };
	
	Flurry.prototype.logPageView = function (successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logPageView', []);
    };	
	
	Flurry.prototype.logError = function (code, message, successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logError', [code, message]);
    };	
	
	Flurry.prototype.setLocation = function (location, message, successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'setLocation', [
            location.latitude,
            location.longitude,
            location.verticalAccuracy,
            location.horizontalAccuracy
        ]);
    };	
	
    // only needed for older versions of Android
	// key is a string
	Flurry.prototype.startSession = function(key,successCallback,failureCallback) {
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'startSession', [key]);
	};

	Flurry.prototype.endSession = function(successCallback,failureCallback) {
		return cordova.exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'endSession', []);
	};
	

module.exports = new Flurry();
