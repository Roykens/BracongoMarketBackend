angular.module("notesApp.jobs.services", []).factory('Job', function ($resource) {
    
})
.factory('JobService',function($firebaseArray, $firebaseObject){
    var   auth = firebase.auth();
  var database = firebase.database().ref();
  var storage = firebase.storage();
    var refJobs = database.child('emplois');
    var jobs = [];
    var i ;
    return {
        getAllJobs: function(){ 
            jobs = $firebaseArray(refJobs);
      return $firebaseArray(refJobs);
    },
    getOneJob: function(id){
            for(i=0; i < jobs.length; i++){
                if(jobs[i].$id === id){
                    return jobs[i];
                }
            }
    }
    }
    
});

