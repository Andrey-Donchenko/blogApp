(function() {
    'use strict';

	angular
	.module("app")
	.factory("Auth", ["$firebaseAuth", 
		function($firebaseAuth) {
    		return $firebaseAuth();
    	}
    ]);
})();