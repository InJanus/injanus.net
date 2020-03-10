var myApp = angular.module('myApp', []);

myApp.controller('textCtrl', function textCtrl($scope, $http){
    $http.get('data/about.txt').then(function(data){
        var lines = data.data.split('\n');
        $scope.about = lines[0];
        $scope.coop1 = lines[1];
        $scope.coop2 = lines[2];
        $scope.coop3 = lines[3];
    });
})