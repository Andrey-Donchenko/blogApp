(function() {
    'use strict';

    angular
    .module("app")
    .directive("signIn", ['$location', 'Auth',
        function($location, Auth) {
        	return {
                restrict: 'E',
                templateUrl: 'app/signIn/signIn.html',
        		scope: {},
        		link: function(scope) {
                    
                    scope.signIn = function() {
                        Auth.$signInWithEmailAndPassword(scope.email, scope.password)
                        .then(function(firebaseUser) {
                            $location.path("/home");
                        }).catch(function(error) {
                          scope.message = error.message;
                        });
                    };
                    
        		}
        	};
	    }
    ]);
})();