angular.module("notesApp.categories", ['notesApp.categories.controllers', 'notesApp.categories.services','firebase','base64','naif.base64']);
angular.module("notesApp.categories").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("categories", {
        url: '/categories',
        controller: 'CategorieController',
        templateUrl: 'modules/categories/views/liste.html'
    });
    
});