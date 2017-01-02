 (function() {
     function AlbumCtrl(Fixtures) {
         this.albumData = angular.copy(albumPicasso);
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();