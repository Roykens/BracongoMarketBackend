angular.module("notesApp.categories.controllers", []).controller("CategorieController", ["$scope", "$modal", "$log", "CategorieService",
    function ($scope, $modal, $log, CategorieService) {
       $scope.categories = [];
       $scope.categories = CategorieService.getAllCategories();
       $scope.toto = "Moi";
       $scope.afficherFenetre = function (key,item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/categories/views/nouveau.html',
                controller: 'CategorieFenetreController',
                controllerAs: 'categorie',
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
    }]).controller("CategorieFenetreController", ["$log", "$scope", "$modalInstance","$base64",
    function ($log, $scope, $modalInstance,$base64) {
        $scope.files = null;
       $scope.image = null;
       $scope.categorie = null;
       
       $scope.uploadFile = function(fs){
           $scope.files = fs;
       };
      
        $scope.valider = function () {
            $log.log("version ok");
            var refEvent = firebase.database().ref().child("categories");
            $scope.categorie.image = $scope.files.base64;
            console.log("la données", $scope.categorie);
            refEvent.push($scope.categorie);
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