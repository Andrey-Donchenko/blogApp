(function() {
    'use strict';

    angular
    .module("app")
    .directive("signUp", ['$location', 'Auth',
        function($location, Auth) {
    	return {
            restrict: 'E',
            templateUrl: 'app/signUp/signUp.html',
    		scope: {},
    		link: function(scope) {

                scope.signUp = function() {
                    Auth.$createUserWithEmailAndPassword(scope.email, scope.password)
                    .then(function(firebaseUser) {
                        $location.path("/home");
                    }).catch(function(error) {
                        scope.message = error.message;
                    });
                };

                //проверка валидности формы регистрации
                scope.checkValid = function () {
                    return (scope.password != scope.confirm)
                };
            }
    	};
	}]);
})();