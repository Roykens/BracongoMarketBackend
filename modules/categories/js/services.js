angular.module("notesApp.categories.services", []).factory('Categorie', function ($resource) {
    
})
.factory('CategorieService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refCategorie = database.child('categories');
    var categories = [];
    var i ;
    return {
        getAllCategories: function(){ 
            categories = $firebaseArray(refCategorie);
      return $firebaseArray(refCategorie);
    },
    getOneCategorie: function(id){
            for(i=0; i < categories.length; i++){
                if(categories[i].$id === id){
                    return categories[i];
                }
            }
    }
    }
    
});