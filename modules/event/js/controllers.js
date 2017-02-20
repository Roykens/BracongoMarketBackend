angular.module("notesApp.events.controllers", []).controller("EventController", ["$scope", "$modal", "$log", "Event","$firebaseArray", "$firebaseObject","$base64",
    function ($scope, $modal, $log, Annee,$firebaseArray, $firebaseObject,$base64) {
        
       $scope.nom = "Royken";
       $scope.events = [];
       $scope.files = null;
       $scope.image = null;
       $scope.valider = function(){
           console.log("img",$scope.files);
           console.log("img1",$scope.files[0]);
           var imageData=$base64.encode($scope.files);
           var imageData1=$base64.encode($scope.files[0]);
           console.log("img2",imageData);
           console.log("img3",imageData1);
       }
       $scope.toto = function(){
           console.log("Hellloooooo");
           var database = firebase.database().ref();
             var refEvent = database.child('events');
            $scope.events = $firebaseArray(refEvent);
            console.log("Events",$scope.events);
       }
       $scope.uploadFile = function(fs){
           $scope.files = fs;
       }
       
        $scope.afficherFenetre = function (item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/event/views/nouveau.html',
                controller: 'EventFenetreController',
                controllerAs: 'depart',
                keyboard: true,
                backdrop: false,
                resolve: {
                    element: function () {
                        var tt;
                        if (item)
                            tt = item;
                        else
                            tt = new Annee();
                        $log.log(tt);
                        return tt;
                    }
                }
            });
            modelInstance.result.then(function (item) {
                if (item.id) {
                    item.$update(function () {
                        var id;
                        for (var i = 0; i < $scope.annees.length; i++) {
                            if ($scope.annees[i].id === item.id) {
                                id = i;
                                break;
                            }
                        }
                        if (id) {
                            $scope.annees.splice(id, 1, item);
                        }
                    });
                } else {
                    var tt = Annee.save(item, function () {
                        $scope.annees.push(tt);
                    });
                }
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
    }]).controller("EventFenetreController", ["$log", "$scope", "$modalInstance", "element",
    function ($log, $scope, $modalInstance, element) {
        $scope.element = element;
        $log.log(element);
        $scope.valider = function () {
            $log.log("version ok");
            $modalInstance.close($scope.element);
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
