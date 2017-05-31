(function() {
     function AboutCtrl() {
        this.greeting = "hi"
    }

    angular
        .module('blocJams')
        .controller('AboutCtrl', AboutCtrl);
})();
