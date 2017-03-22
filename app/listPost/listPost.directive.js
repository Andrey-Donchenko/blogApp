(function() {
    'use strict';

    angular
    .module("app")
    .directive("listPost", ['$location', '$rootScope', 'Data', 'Auth',
        function($location, $rootScope, Data, Auth) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'app/listPost/listPost.html',
                link: function(scope) {
                    //массив с данными
                    scope.data = Data;
                    
                    Auth.$onAuthStateChanged(function(firebaseUser) {
                        //определяет тот или иной блок кнопок в разметке
                        scope.firebaseUser = firebaseUser;
                    });

                    scope.showLogForm = function() {
                        $location.path("/signIn");
                    };
                    scope.showRegForm = function() {
                        $location.path("/signUp");
                    };
                    scope.addPost = function() {
                        //обнуление объекта $rootScope.currentItem
                        //для очистки формы добавления поста
                        $rootScope.currentItem = {};
                        $location.path("/edit");
                    };
                    scope.signOut = function() {
                        Auth.$signOut();
                    };
                   
                    scope.showPost = function(item) {
                        //передача данных выбранного поста
                        $rootScope.currentItem = item;
                        $location.path("/post");
                    };
                }
            };
        }
    ]);
})();