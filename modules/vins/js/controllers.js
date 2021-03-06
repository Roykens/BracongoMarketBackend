angular.module("notesApp.vins.controllers", []).controller("VinController", ["$scope", "$modal", "$log", "VinService",
    function ($scope, $modal, $log, VinService) {
       $scope.vins = [];
       $scope.vins = VinService.getAllVins();
       $scope.toto = "Moi";
       $scope.afficherFenetre = function (key,item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/vins/views/nouveau.html',
                controller: 'VinFenetreController',
                controllerAs: 'vin',
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
    }]).controller("VinFenetreController", ["$log", "$scope", "$modalInstance","$base64","$modal",
    function ($log, $scope, $modalInstance,$base64,$modal) {
        $scope.prix1=null;
        $scope.prix2=null;
        $scope.prix3=null;
        $scope.files = null;
       $scope.image = null;
       $scope.vin = null;
       $scope.catgoriesList = ["ROUGES" ,"BLANCS" ,"ROSES","CHAMP","VERY","COMPAL" ];
       $scope.pri = [];
       $scope.prix=[
           {volume:"1,5L",valeur:"61.000"},{volume:"75CL",valeur:"61.000"},{volume:"37,5CL",valeur:"61.000"}
       ];
       
       $scope.add = function(){
           $scope.pri.push($scope.prix);
       };
       
       $scope.uploadFile = function (fs) {
            console.log("immmmmmmmmm");
            $scope.files = fs;
        };
       
       $scope.addOne = function(){
           $scope.pri.push($scope.prix1);
           console.log("price One", $scope.prix1);
           console.log("price Ones", $scope.pri);
       };
       
       $scope.addTwo = function(){
           $scope.pri.push($scope.prix2);
           console.log("price Two", $scope.prix2);
           console.log("price Twos", $scope.pri);
       };
       $scope.addThree = function(){
           $scope.pri.push($scope.prix3);
           console.log("price Three", $scope.prix3);
           console.log("price Three", $scope.pri);
       };
      
        $scope.valider = function () {
            $log.log("test");
            var refEvent = firebase.database().ref().child("vins");
            //$scope.vin.image = $scope.files.base64;
            //$scope.vin.prix = $scope.pri;
            //console.log("la données", $scope.vin);
            var refStockage = firebase.storage().ref();
            console.log("img", $scope.files);
            //console.log("la données", $scope.test);
            console.log("l'image", $scope.files);
            console.log("l'image2", $scope.files[0]);
            var dossier;
            if($scope.vin.categorie === "ROUGES"){
                dossier = "vins rouges";
            }
            if($scope.vin.categorie === "BLANCS"){
                dossier = "vins blancs";
            }
            if($scope.vin.categorie === "ROSES"){
                dossier = "vins roses";
            }
            if($scope.vin.categorie === "CHAMP"){
                dossier = "champagnes";
            }
            if($scope.vin.categorie === "VERY"){
                dossier = "very";
            }
            if($scope.vin.categorie === "COMPAL"){
                dossier = "compal";
            }
            
            var uploadTask = refStockage.child('images/chateaux/produits'+'/'+ dossier+'/' + $scope.files[0].name).put($scope.files[0]);
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
                $scope.vin.image=downloadURL;
                console.log("J'envoie finalement",$scope.vin);
                refEvent.push($scope.vin);
            });
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $log.log("version cancel");
            $modalInstance.dismiss("Cancel");
        };
        
        $scope.afficherFenetrea = function (key,item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/vins/views/ajouterPrix.html',
                controller: 'VinFenetreController',
                controllerAs: 'vin',
                keyboard: true,
                backdrop: false              
            });
            modelInstance.result.then(function (item) {
                //
            }, function () {

            });

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