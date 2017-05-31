(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: 'album',
				        controller: 'AlbumCtrl as album',
                templateUrl: '/templates/album.html'
            })
            .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
            })
            .state('about', {
                url: '/about',
                controller: 'AboutCtrl as about',
                templateUrl: '/templates/about.html'
            })
            .state('play', {
                url: '/play',
                controller: 'PlayCtrl as play',
                templateUrl: '/templates/play.html'
            });
    }

    angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();
