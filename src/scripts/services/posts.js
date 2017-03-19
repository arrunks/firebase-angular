import appMain from "../angular-main.js";
import * as firebase from "firebase";

appMain.service("postsService",['$q',function($q){
  var database = firebase.database();

  this.getAllPosts = function(){
    var deferred = $q.defer();
    database.ref('allposts').once('value').then(function(result) {
      deferred.resolve(result.val());
    });
    return deferred.promise;
  };

  this.getSinglePost = function(postId){
    var deferred = $q.defer();
    database.ref('allposts/'+postId).once('value').then(function(result) {
      deferred.resolve(result.val());
    });
    return deferred.promise;
  }

}]);
