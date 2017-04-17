angular.module("notesApp.categoriesBrac.services", []).factory('CategorieBrac', function ($resource) {
    
})
.factory('CategorieBracService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refCategorieBrac = database.child('categoriesBrac');
    var categoriesBrac = [];
    var i ;
    return {
        getAllCategories: function(){ 
            categoriesBrac = $firebaseArray(refCategorieBrac);
      return $firebaseArray(refCategorieBrac);
    },
    getOneCategorie: function(id){
            for(i=0; i < categoriesBrac.length; i++){
                if(categoriesBrac[i].$id === id){
                    return categoriesBrac[i];
                }
            }
    }
    }
    
});