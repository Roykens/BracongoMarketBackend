angular.module("notesApp.semestres.controllers",[]).controller("SemestreController", ["$scope", "$modal", "$log", "Semestre",
function($scope, $modal, $log, Departement) {
	var deps = Semestre.query(function() {
		$scope.departements = deps;
	});
	$scope.afficherFenetre = function(item) {
		var modelInstance = $modal.open({
			templateUrl : '/modules/semestre/views/nouveau.html',
			controller : 'SemestreFenetreController',
			controllerAs : 'depart',
			keyboard : true,
			backdrop : false,
			resolve : {
				element : function() {
					var tt;
					if(item)
					   tt = item;
					else
					   tt = new Departement();
					$log.log(tt);
					return tt;
				}
			}
		});
		modelInstance.result.then(function(item) {
			if (item.id) {
				item.$update(function() {
					var id;
					for (var i = 0; i < $scope.departements.length; i++) {
						if ($scope.departements[i].id == item.id) {
							id = i;
							break;
						}
					}
					if (id) {
						$scope.departements.splice(id, 1,item);
					}
				});
			} else {
				Departement.save(item, function() {
					$scope.departements.push(item);
				});
			}
		}, function() {

		});

	}
	$scope.supprimerDepartement = function(item) {
		if (confirm("Voulez vous vraiment supprimer ce departement?")) {
			Departement.remove({
				id : item.id
			}, function() {
				var id;
				for (var i = 0; i < $scope.departements.length; i++) {
					if ($scope.departements[i].id == item.id) {
						id = i;
						break;
					}

				}
				if (id) {
					$scope.departements.splice(id, 1);
				}
			})
		}
	}
}]).controller("SemestreFenetreController", ["$log","$scope", "$modalInstance", "element",
function($log,$scope, $modalInstance, element) {
	$scope.element = element;
	$log.log(element);
	$scope.valider = function() {
		$log.log("version ok");
		$modalInstance.close($scope.element);
	};

	$scope.cancel = function() {
		$log.log("version cancel");
		$modalInstance.dismiss("Cancel");
	};

}]);
