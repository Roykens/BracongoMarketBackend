angular.module("notesApp.fete.services", []).factory('Fete', function ($resource) {
    
})
.factory('FeteService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refImage = database.child('feteImage');
    var fetes = [];
    var i ;
    return {
        getAllImages: function(){ 
            fetes = $firebaseArray(refImage);
      return $firebaseArray(refImage);
    },
    getOneImages: function(id){
            for(i=0; i < fetes.length; i++){
                if(fetes[i].$id === id){
                    return fetes[i];
                }
            }
    }
    }
    
});