/**
 * Created by 192.168.3.5 on 9/20/2015.
 */


angular.module('starter')

.controller("qurbaniController",function($scope,dataService){
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

