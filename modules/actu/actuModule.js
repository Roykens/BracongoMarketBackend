angular.module("notesApp.actus", ['notesApp.actus.controllers', 'notesApp.actus.services']);
angular.module("notesApp.actus").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("actus", {
        url: '/actus',
        controller: 'ActuController',
        templateUrl: 'modules/actu/views/liste.html'
    });
});