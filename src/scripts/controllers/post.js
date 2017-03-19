import appMain from "../angular-main.js";

appMain.controller("postController",['$http','$scope','postsService','$stateParams',function($http,$scope,postsService,$stateParams){
      var postId = $stateParams.postId;
      postsService.getSinglePost(postId).then(function(data){
       $scope.post = data;
     });
}]);
