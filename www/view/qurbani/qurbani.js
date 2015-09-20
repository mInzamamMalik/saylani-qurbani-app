/**
 * Created by 192.168.3.5 on 9/20/2015.
 */


angular.module('starter')

.controller("qurbaniController",function($scope,dataService,$cordovaGeolocation){
    //geoLocation code
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
      }, function(err) {
        // error
      });


    var watchOptions = {
      frequency : 1000,
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        // error
      },
      function(position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
      });


    watch.clearWatch();
    // OR
    $cordovaGeolocation.clearWatch(watch)
      .then(function(result) {
        // success
      }, function (error) {
        // error
      });

    //geo location code end


    $scope.user = {};
    $scope.question1 = true;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;
    $scope.question5 = false;

    $scope.user.cowGoat = '';
    $scope.user.fname = '';
    $scope.user.lname = '';
    $scope.user.email = '';
    $scope.user.allowGetGeoLocation = false;

    $scope.question1done = function(answer){
        $scope.user.cowGoat = answer;
        $scope.question1 = false;
        $scope.question2 = true;

    };





  });

