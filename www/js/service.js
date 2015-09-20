/**
 * Created by 192.168.3.5 on 9/20/2015.
 */
angular.module('starter')

.service("dataService",function($firebaseArray){

    var ref = new Firebase("https://markone-drawapp.firebaseio.com/qurbaniApp");
    this.allData = $firebaseArray(ref);

});
