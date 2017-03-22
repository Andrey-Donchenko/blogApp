(function() {
    'use strict';

	angular
	.module("app")
	.factory("Data", ["$firebaseArray", 
		function($firebaseArray) {
	    	var ref = firebase.database().ref('data');
		    return $firebaseArray(ref);
  		}
  	]);
})();