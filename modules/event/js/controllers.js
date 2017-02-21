angular.module("notesApp.events.controllers", []).controller("EventController", ["$scope", "$modal", "$log", "EventService",
    function ($scope, $modal, $log, EventService) {
      /*  var deps = Annee.query(function () {
            $scope.annees = _.sortBy(deps,'debut');
        });
        */
       $scope.events = [];
       $scope.events = EventService.getAllEvents();
       $scope.toto = "Moi";
        $scope.afficherFenetre = function (key,item) {
            var modelInstance = $modal.open({
                templateUrl: '/modules/event/views/nouveau.html',
                controller: 'EventFenetreController',
                controllerAs: 'event',
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
    }]).controller("EventFenetreController", ["$log", "$scope", "$modalInstance","$base64",
    function ($log, $scope, $modalInstance,$base64) {
        $scope.files = null;
       $scope.image = null;
       $scope.event = null;
       
       $scope.uploadFile = function(fs){
           $scope.files = fs;
       };
      
        $scope.valider = function () {
            $log.log("version ok");
            var refEvent = firebase.database().ref().child("events");
         //  console.log("img",$scope.files);
         //  console.log("img1",$scope.files[0]);
         //  var imageData=$base64.encode($scope.files);
          // var imageData1=$base64.encode($scope.files[0]);
         //  console.log("img2",imageData);
         //  console.log("img3",imageData1);
           $scope.event.image = $scope.files.base64;
           console.log("la données", $scope.event);
            refEvent.push($scope.event);
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
