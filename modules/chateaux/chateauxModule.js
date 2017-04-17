angular.module("notesApp.chateaux", ['notesApp.chateaux.controllers', 'notesApp.chateaux.services','firebase','base64','naif.base64']);
angular.module("notesApp.chateaux").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("chateaux", {
        url: '/chateaux',
        controller: 'ChateauxController',
        templateUrl: 'modules/chateaux/views/liste.html'
    });  
});