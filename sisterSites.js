var myApp = angular.module('myApp', []);

myApp.controller('sisterCtl', function textCtrl($scope, $http){
    $scope.moddomain = 'mod.injanus.tech';
    $scope.vandomain = 'van.injanus.tech';
    $http.get('https://api.mcsrvstat.us/2/'+$scope.vandomain).then(function(data){
        console.log(data);
        $scope.vanstatus = data.data.online;
        // onsole.log($scope.vanstatus);
    });
    $http.get('https://api.mcsrvstat.us/2/'+$scope.moddomain).then(function(data){
        $scope.modstatus = data.data.online;
    });
    console.log($scope.vanstatus);
});