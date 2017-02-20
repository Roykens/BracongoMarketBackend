angular.module("notesApp.events", ['notesApp.events.controllers', 'notesApp.events.services','firebase','base64','naif.base64']);
angular.module("notesApp.events").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("events", {
        url: '/events',
        controller: 'EventController',
        templateUrl: 'modules/event/views/liste.html'
    });
    
});