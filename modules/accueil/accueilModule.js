angular.module("notesApp.accueil", ['notesApp.accueil.controllers', 'notesApp.accueil.services','firebase','base64','naif.base64']);
angular.module("notesApp.accueil").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("accueil", {
        url: '/accueil',
        controller: 'AccueilController',
        templateUrl: 'modules/accueil/views/liste.html'
    });  
});