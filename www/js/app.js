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
     .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'homeCtrl'
    })
    .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
              templateUrl: 'templates/home/home.html',
              controller: 'homeCtrl',
              controllerAs: 'vm'
            }
        }
    })
    .state('app.novel', {
        url: '/novel',
        views: {
          'menuContent': {
            templateUrl: 'templates/novel/novel.html',
            controller: 'novelCtrl',
            controllerAs: 'vm'
            }
        },
    })
    .state('app.chapter', {
        url: '/chapter',
        views: {
          'menuContent': {
              templateUrl: 'templates/chapter/chapter.html',
              controller: 'chapterCtrl',
              controllerAs: 'vm'
            }
        }
    })
    .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
              templateUrl: 'templates/login/login.html',
              controller: 'loginCtrl',
              controllerAs: 'vm'
            }
        }
    });
    $urlRouterProvider.otherwise('/app/home');
});
