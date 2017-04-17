angular.module("notesApp.categoriesBrac.controllers", []).controller("CategorieBracController", ["$scope", "$modal", "$log", "CategorieBracService",
    function ($scope, $modal, $log, CategorieBracService) {
       $scope.categoriesBrac = [];
       $scope.categoriesBrac = CategorieBracService.getAllCategories();
       $scope.toto = "Moi";
       $scope.afficherFenetre = function (key,item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/categoriesBrac/views/nouveau.html',
                controller: 'CategorieBracFenetreController',
                controllerAs: 'categorieBrac',
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
    }]).controller("CategorieBracFenetreController", ["$log", "$scope", "$modalInstance","$base64",
    function ($log, $scope, $modalInstance,$base64) {
        $scope.files = null;
       $scope.image = null;
       $scope.categorie = null;
       
       $scope.uploadFile = function(fs){
           $scope.files = fs;
       };
      
        $scope.valider = function () {
            $log.log("version ok");
            var refEvent = firebase.database().ref().child("categoriesBrac");
            //$scope.categorie.image = $scope.files.base64;
            console.log("la données", $scope.categorie);
            ssrefEvent.push($scope.categorie);
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