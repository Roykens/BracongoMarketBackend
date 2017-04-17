angular.module("notesApp.campagnes", ['notesApp.campagnes.controllers', 'notesApp.campagnes.services','firebase','base64','naif.base64']);
angular.module("notesApp.campagnes").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("campagnes", {
        url: '/campagnes',
        controller: 'CampagneController',
        templateUrl: 'modules/campagnes/views/liste.html'
    });
    
});