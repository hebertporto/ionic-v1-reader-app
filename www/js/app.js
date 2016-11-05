angular.module('novel.controllers', []);
angular.module('novel.services', []);

angular.module('novel', [
    'ionic',
    'ngCordova',
    'novel.controllers',
    'novel.services'
])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(1);
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.scrolling.jsScrolling(true);

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
    })
    .state('novel', {
        url: '/novel',
        templateUrl: 'templates/novel/novel.html',
        controller: 'novelCtrl',
        controllerAs: 'vm'
    })
    .state('chapter', {
        url: '/chapter',
        templateUrl: 'templates/chapter/chapter.html',
        controller: 'chapterCtrl',
        controllerAs: 'vm'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');


});
