angular.module("notesApp.vins.services", []).factory('Vin', function ($resource) {
    
})
.factory('VinService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refVin = database.child('vins');
    var vins = [];
    var i ;
    return {
        getAllVins: function(){ 
            vins = $firebaseArray(refVin);
      return $firebaseArray(refVin);
    },
    getOneVin: function(id){
            for(i=0; i < vins.length; i++){
                if(vins[i].$id === id){
                    return vins[i];
                }
            }
    }
    }
    
});