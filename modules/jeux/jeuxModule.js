angular.module("notesApp.jeux", ['notesApp.jeux.controllers', 'notesApp.jeux.services','firebase','base64','naif.base64']);
angular.module("notesApp.jeux").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("jeux", {
        url: '/jeux',
        controller: 'JeuxController',
        templateUrl: 'modules/jeux/views/liste.html'
    });
    
});