angular.module("notesApp.vins", ['notesApp.vins.controllers', 'notesApp.vins.services','firebase','base64','naif.base64','selector']);
angular.module("notesApp.vins").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("vins", {
        url: '/vins',
        controller: 'VinController',
        templateUrl: 'modules/vins/views/liste.html'
    });
    
});