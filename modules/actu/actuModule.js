angular.module("notesApp.actus", ['notesApp.actus.controllers', 'notesApp.actus.services','firebase','base64','naif.base64']);
angular.module("notesApp.actus").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("actus", {
        url: '/actus',
        controller: 'ActuController',
        templateUrl: 'modules/actu/views/liste.html'
    });
});