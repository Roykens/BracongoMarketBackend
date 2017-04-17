angular.module("notesApp", ["notesApp.filters","ngResource","ngTagsInput", "ui.bootstrap", "ui.router", "notesApp.controllers", "notesApp.directives", "notesApp.services","notesApp.events","notesApp.vins","notesApp.accueil","notesApp.actus","notesApp.test","notesApp.jeux","notesApp.jobs","notesApp.categories","notesApp.categoriesBrac","notesApp.campagnes","notesApp.produits","notesApp.chateaux","notesApp.fete" ,"infinite-scroll", "angularFileUpload",'firebase','base64','selector']);
angular.module("notesApp").run(function($rootScope) {
    $rootScope.isViewLoading = false;
    $rootScope.$on('$stateChangeStart', function () {
        $rootScope.isViewLoading = true;
        $rootScope.isError = false;
    });
    $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.isViewLoading = false;
        $rootScope.isError = false;
    });
    $rootScope.$on('$stateChangeError', function () {
        $rootScope.isError = true;
        $rootScope.isViewLoading = false;
        //$log.log("Je suis en chemin");
    });
});
