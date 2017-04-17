angular.module("notesApp.produits.services", []).factory('Produit', function ($resource) {
    
})
.factory('ProduitService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refProduit = database.child('produits');
    var produits = [];
    var i ;
    return {
        getAllProduits: function(){ 
            produits = $firebaseArray(refProduit);
      return $firebaseArray(refProduit);
    },
    getOneProduit: function(id){
            for(i=0; i < produits.length; i++){
                if(produits[i].$id === id){
                    return produits[i];
                }
            }
    }
    }
    
});