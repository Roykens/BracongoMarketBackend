angular.module("notesApp.events.services", []).factory('Event', function ($resource) {
    
})
.factory('EventService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refEvent = database.child('events');
    var events = [];
    var i ;
    return {
        getAllEvents: function(){ 
            events = $firebaseArray(refEvent);
      return $firebaseArray(refEvent);
    },
    getOneEvent: function(id){
            for(i=0; i < events.length; i++){
                if(events[i].$id === id){
                    return events[i];
                }
            }
    }
    }
    
});

