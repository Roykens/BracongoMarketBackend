angular.module("notesApp.actus.services", []).factory('Campagne', function ($resource) {
    
}).factory('CampagneService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refCampagnes = database.child('campagnes');
    var campagnes = [];
    var i ;
    return {
        getAllCampagnes: function(){ 
            campagnes = $firebaseArray(refCampagnes);
      return $firebaseArray(refCampagnes);
    },
    getOneCampagne: function(id){
            for(i=0; i < campagnes.length; i++){
                if(campagnes[i].$id === id){
                    return campagnes[i];
                }
            }
    }
    }
    
});
