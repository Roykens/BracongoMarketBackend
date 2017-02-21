angular.module("notesApp.test.services", []).factory('Test', function ($resource,$firebaseArray, $firebaseObject) {
    
    
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refEvent = database.child('test');
    var tests = [];
    var i ;
    return {
        getAllTest: function(){ 
            tests = $firebaseArray(refEvent);
      return $firebaseArray(refEvent);
    },
    getOneTest: function(id){
            for(i=0; i < localEvents.length; i++){
                if(localEvents[i].$id == id){
                    return localEvents[i];
                }
            }
    },
    }
    
});

