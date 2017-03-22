(function() {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider',
        	function($stateProvider, $urlRouterProvider) {
        	
	        	$urlRouterProvider.otherwise('home');

		    	var home = {
				    name: 'home',
				    url: '/home',
				    template: '<list-post></list-post>'
					};
		
				var signIn = {
				    name: 'signIn',
				    url: '/signIn',
				    template: '<sign-in></sign-in>'
				};
		
				var signUp = {
				    name: 'signUp',
				    url: '/signUp',
				    template: '<sign-up></sign-up>'
				};
				
				var edit = {
				    name: 'edit',
				    url: '/edit',
				    template: '<post-edit></post-edit>'
				};

				var post = {
				    name: 'post',
				    url: '/post',
				    template: '<single-post></single-post>'
				};

				$stateProvider.state(home);
				$stateProvider.state(signIn);
				$stateProvider.state(signUp);
				$stateProvider.state(edit);
				$stateProvider.state(post);
			}
		]);
})();
