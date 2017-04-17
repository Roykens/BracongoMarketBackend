angular.module("notesApp.campagnes.services", []).factory('Campagne', function ($resource) {
    
})
.factory('CampagneService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refCampagne = database.child('campagnes');
    var campagnes = [];
    var i ;
    return {
        getAllCampagnes: function(){ 
            campagnes = $firebaseArray(refCampagne);
      return $firebaseArray(refCampagne);
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