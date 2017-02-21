angular.module("notesApp.test", ['notesApp.test.controllers', 'notesApp.test.services','firebase','base64','naif.base64']);
angular.module("notesApp.test").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("test", {
        url: '/test',
        controller: 'TestController',
        templateUrl: 'modules/test/views/liste.html'
    });
});