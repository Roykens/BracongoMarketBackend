angular.module("notesApp.accueil.services", []).factory('Accueil', function ($resource) {
    
})
.factory('AccueilService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refAccueil = database.child('accueilImage');
    var accueils = [];
    var i ;
    return {
        getAllImages: function(){ 
            accueils = $firebaseArray(refAccueil);
      return $firebaseArray(refAccueil);
    },
    getOneImages: function(id){
            for(i=0; i < accueils.length; i++){
                if(accueils[i].$id === id){
                    return accueils[i];
                }
            }
    }
    }
    
});