// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase','ngCordova'])


.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home",{
        url : "/",
        templateUrl : "view/home/home.html"
      })

      .state("qurbani",{
        url : "/qurbani",
        templateUrl : "view/qurbani/qurbani.html",
        controller : "qurbaniController"

      })

  })



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
      }, function(err) {
        // error
      });


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
