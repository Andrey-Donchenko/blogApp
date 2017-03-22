(function() {
    'use strict';

    angular
    .module("app")
    .directive("postEdit", ['$location', '$rootScope', 'ChangeData', 'Auth',
        function($location, $rootScope, ChangeData, Auth) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'app/postEdit/postEdit.html',
                link: function(scope, element) {
                    //копирование данных выбранного поста 
                    //для отображения в разметке (на случай редактирования)
                    scope.post = angular.copy($rootScope.currentItem);
                    //имя файла выбранного поста (на случай редактирования)
                    var fileName = $rootScope.currentItem.fileName;
                    //файл, выбранный в форме
                    var selectedFile;
                    //элемент разметки выбора файла
                    var thumbnail = element.find('input').eq(1);

                    thumbnail.on('change', function(event) {
                        selectedFile = event.target.files[0];
                    });

                    Auth.$onAuthStateChanged(function(firebaseUser) {
                        scope.post.uid = firebaseUser.uid;
                    });

                    scope.sendData = function() {
                        if (selectedFile) {
                            scope.post.fileName = selectedFile.name;
                            ChangeData.addFileData(scope.post, selectedFile, fileName);
                        }
                        else {
                            if(scope.post.$id) {
                                ChangeData.updateData(scope.post);
                            }
                            else {
                                ChangeData.addData(scope.post);
                            }
                        }
                        $location.path("/home");
                    };
                }
            };
        }
    ]);
})();