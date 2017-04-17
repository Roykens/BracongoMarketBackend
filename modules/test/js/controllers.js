angular.module("notesApp.test.controllers", []).controller("TestController", ["$scope", "$modal", "$log", "Test",
    function ($scope, $modal, $log, Test) {
        /*  var deps = Annee.query(function () {
         $scope.annees = _.sortBy(deps,'debut');
         });
         */
        $scope.tests = [];
        $scope.tests = Test.getAllTest();
        $scope.toto = "Moi";
        $scope.afficherFenetre = function (key, item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/test/views/nouveau.html',
                controller: 'TestFenetreController',
                controllerAs: 'test',
                keyboard: true,
                backdrop: false

            });
            modelInstance.result.then(function (item) {
                //
            }, function () {

            });

        };
        $scope.supprimerAnnee = function (item) {
            if (confirm("Voulez vous vraiment supprimer cette annee?")) {
                Annee.remove({
                    id: item.id
                }, function () {
                    var id;
                    for (var i = 0; i < $scope.annees.length; i++) {
                        if ($scope.annees[i].id === item.id) {
                            id = i;
                            break;
                        }

                    }
                    if (id) {
                        $scope.annees.splice(id, 1);
                    }
                });
            }
        };
    }]).controller("TestFenetreController", ["$log", "$scope", "$modalInstance", "$base64",
    function ($log, $scope, $modalInstance, $base64) {
        $scope.files = null;
        $scope.image = null;
        //$scope.image = null;
        $scope.test = null;

        $scope.uploadFile = function (fs) {
            console.log("immmmmmmmmm");
            $scope.files = fs;
        };
        $scope.valider = function () {
            $log.log("version ok");

            console.log("img", $scope.files);
            console.log("img1", $scope.files[0]);
            var imageData = $base64.encode($scope.files);
            var imageData1 = $base64.encode($scope.files[0]);
            console.log("img2", imageData);
            console.log("img3", imageData1);
            $scope.test.image = $scope.files.base64;
            console.log("la données", $scope.test);
            $modalInstance.close();
        };


        $scope.valider = function () {
            $log.log("version ok");
            var refEvent = firebase.database().ref().child("test");
            var refStockage = firebase.storage().ref();
            console.log("img", $scope.files);
           // console.log("img1", $scope.files[0]);
           // var imageData = $base64.encode($scope.files);
           // var imageData1 = $base64.encode($scope.files[0]);
            
            //$scope.test.image = $scope.files.base64;
            console.log("la données", $scope.test);
            console.log("l'image", $scope.files);
            console.log("l'image2", $scope.files[0]);
            var fd = new FormData();
            fd.append("file", $scope.files[0]);
            console.log("NO IDEA", fd);
            // refEvent.push($scope.test);
            var uploadTask = refStockage.child('images/' + $scope.files[0].name).put($scope.files[0]);
            uploadTask.on('state_changed', function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
                console.log("Error",error);
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                var downloadURL = uploadTask.snapshot.downloadURL;
                console.log("L'URL", downloadURL);
            });
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $log.log("version cancel");
            $modalInstance.dismiss("Cancel");
        };

    }]).controller('DatepickerDemoCtrl', function ($scope) {

    // Disable weekend selection
    // $scope.disabled = function (date, mode) {
    //   return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    //};

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
});
;
