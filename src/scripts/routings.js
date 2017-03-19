import appMain from "./angular-main.js";
import uiRouter from "angular-ui-router";
import postTemplate from '../htmls/post.html';
import aboutTemplate from '../htmls/about.html';
import homeTemplate from '../htmls/home.html';

appMain.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
  var appState = {
    name: 'app',
    url: '/',
    abstract: true,
    template: '<div ui-view></div>'
  }
  var homeState = {
    name: 'app.home',
    url: 'home',
    templateUrl: homeTemplate,
    controller:'homeController'
  }
  var aboutState = {
    name: 'app.about',
    url: 'about',
    templateUrl: aboutTemplate
  }
  var postState = {
    name: 'app.post',
    url: 'post/:postId',
    templateUrl: postTemplate,
    controller: 'postController'
  }
  $stateProvider.state(appState);
  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(postState);
});
