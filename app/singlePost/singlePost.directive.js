(function() {
    'use strict';

    angular
    .module("app")
    .directive("singlePost", ['$location', '$rootScope', 'Auth',
        function($location, $rootScope, Auth) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'app/singlePost/singlePost.html',
                link: function(scope) {
                    //передача данных выбранного поста для отображения в разметке
                    scope.item = $rootScope.currentItem;
                    
                    Auth.$onAuthStateChanged(function(firebaseUser) {
                        //проверка авторизации текущего пользователя
                        if(firebaseUser) {
                            scope.userId = firebaseUser.uid;
                        }
                    });

                    scope.showEditForm = function() {
                        $location.path("/edit");
                    };
                }
            };
        }
    ]);
})();