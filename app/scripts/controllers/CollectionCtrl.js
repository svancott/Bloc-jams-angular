(function() {
     function CollectionCtrl(Fixtures) {
     	this.albums = Fixtures.getCollection(6);

     }

     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();
