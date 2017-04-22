(function() {
     function LandingCtrl() {
        this.heroTitle = "It's Time 2 JAM!";
     }

     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();
