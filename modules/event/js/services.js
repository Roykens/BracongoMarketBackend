angular.module("notesApp.events.services", []).factory('Event', function ($resource) {
    
})
.factory('EventService',function($firebaseArray, $firebaseObject){
    var database = firebase.database().ref();
    var refEvent = database.child('events');
    var localEvents = [];
    
});

