angular.module("notesApp.categoriesBrac", ['notesApp.categoriesBrac.controllers', 'notesApp.categoriesBrac.services','firebase','base64','naif.base64']);
angular.module("notesApp.categoriesBrac").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("categoriesBrac", {
        url: '/categoriesBrac',
        controller: 'CategorieBracController',
        templateUrl: 'modules/categoriesBrac/views/liste.html'
    });
    
});