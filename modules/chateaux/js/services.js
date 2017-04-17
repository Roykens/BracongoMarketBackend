angular.module("notesApp.chateaux.services", []).factory('Chateaux', function ($resource) {
    
})
.factory('ChateauxService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refChateaux = database.child('chateauxImage');
    var chateaux = [];
    var i ;
    return {
        getAllImages: function(){ 
            chateaux = $firebaseArray(refChateaux);
      return $firebaseArray(refChateaux);
    },
    getOneImages: function(id){
            for(i=0; i < chateaux.length; i++){
                if(chateaux[i].$id === id){
                    return chateaux[i];
                }
            }
    }
    }
    
});