var myApp = angular.module('myApp', []);

myApp.controller('textCtrl', function textCtrl($scope, $http){
    $http.get('data/about.txt').then(function(data){
        var lines = data.data.split('\n');
        $scope.about1 = lines[0];
        $scope.about2 = lines[1];
        $scope.coop1 = lines[2];
        $scope.coop2 = lines[3];
        $scope.coop3 = lines[4];
    });
    $http.get('data/projects.json').then(function(data){
        $scope.photos = data.data;
    });
    $http.get('data/strengths.json').then(function(data){
        $scope.strengths = data.data;
    });
    $http.get('data/skills.json').then(function(data){
        $scope.skills = data.data;
    });

    $scope.currentIndex = 0;
    function getCurrentSlideIndex() {
        return $scope.currentIndex;
    }
    $scope.isCurrentSlideIndex = function isCurrentSlideIndex(index){
        return $scope.currentIndex === index;
    }

    $scope.moveLeft = function moveLeft(){
        if(getCurrentSlideIndex() > 0){
            $scope.currentIndex = $scope.currentIndex - 1;
        }
    }

    $scope.moveRight = function moveRight(){
        if(getCurrentSlideIndex() < $scope.photos.length-1){
            $scope.currentIndex = $scope.currentIndex + 1;
        }
    }
});