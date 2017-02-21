angular.module("notesApp.jobs", ['notesApp.jobs.controllers', 'notesApp.jobs.services','firebase','base64','naif.base64']);
angular.module("notesApp.jobs").config(function ($stateProvider, $locationProvider) {
    $stateProvider.state("jobs", {
        url: '/jobs',
        controller: 'JobsController',
        templateUrl: 'modules/jobs/views/liste.html'
    });
    
});