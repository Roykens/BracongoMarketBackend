angular.module("notesApp.jeux.services", []).factory('Jeux', function ($resource) {
    
})
.factory('JeuxService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refJeux = database.child('jeux');
    var jeux = [];
    var i ;
    return {
        getAllJeux: function(){ 
            jeux = $firebaseArray(refJeux);
      return $firebaseArray(refJeux);
    },
    getOneJeux: function(id){
            for(i=0; i < jeux.length; i++){
                if(jeux[i].$id === id){
                    return jeux[i];
                }
            }
    }
    }
    
});

