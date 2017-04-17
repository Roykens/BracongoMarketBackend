angular.module("notesApp.produits", ['notesApp.produits.controllers', 'notesApp.produits.services','firebase','base64','naif.base64','selector']);
angular.module("notesApp.produits").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("produits", {
        url: '/produits',
        controller: 'ProduitController',
        templateUrl: 'modules/produits/views/liste.html'
    });
    
});