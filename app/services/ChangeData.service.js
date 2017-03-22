(function() {
    'use strict';

	angular
	.module("app")
	.factory("ChangeData", function() {
	    var ref = firebase.database().ref('data'),
	    	factory = {
		    	addFileData: addFileData,
				updateData: updateData,
				addData: addData
			};
		return factory;
		//добавление/обновление данных в firebase.database и firebase.storage
		//в случае наличия выбранного изображения (thumbnail)
	    function addFileData(data, file, fileName) {
	    	var storageRef = firebase.storage().ref("images/" + data.fileName);
            var uploadTask = storageRef.put(file);
            uploadTask.on('state_changed', function(snapshot){
            }, function(error) {
                console.error(error);
            }, function() {
                data.imgUrl = uploadTask.snapshot.downloadURL;
                if(data.$id) {
                	if(fileName) {
						firebase.storage().ref("images/" + fileName).delete();
                	}
                    updateData(data);
                }
                else {
                	addData(data);
                }
            });
	    }
	    //обновление данных поста в firebase.database
	    function updateData(data) {
	        firebase.database().ref('data/' + data.$id).set({
		        title: data.title,
		        content: data.content,
		        imgUrl: data.imgUrl,
		        uid: data.uid,
		        fileName: data.fileName
	        });
        }
        //добавление нового поста в firebase.database
	    function addData(data) {
            var newPostKey = ref.push().key;
            var updates = {};
            updates['/data/' + newPostKey] = data;
            firebase.database().ref().update(updates);
        }
  	});
})();