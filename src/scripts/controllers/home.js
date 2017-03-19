import appMain from "../angular-main.js";

appMain.controller("homeController",['$http','$scope','postsService',function($http,$scope,postsService){
      postsService.getAllPosts().then(function(data){
       $scope.posts = data;
     });
}]);
