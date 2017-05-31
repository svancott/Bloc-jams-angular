(function() {
     function PlayCtrl() {
     this.hi = function(n) { return n*n}
   }



     angular
         .module('blocJams')
         .controller('PlayCtrl', PlayCtrl);
 })();
