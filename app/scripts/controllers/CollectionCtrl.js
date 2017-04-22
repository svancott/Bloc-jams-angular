(function() {
     function CollectionCtrl(Fixtures) {
     	this.albums = Fixtures.getCollection(1);

     }

     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();
