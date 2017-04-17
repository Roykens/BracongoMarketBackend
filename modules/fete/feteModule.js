angular.module("notesApp.fete", ['notesApp.fete.controllers', 'notesApp.fete.services','firebase','base64','naif.base64']);
angular.module("notesApp.fete").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("fete", {
        url: '/fete',
        controller: 'FeteController',
        templateUrl: 'modules/fete/views/liste.html'
    });  
});