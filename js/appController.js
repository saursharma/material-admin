var adminPanel = angular.module('adminPanel', ['ngMaterial'])

adminPanel.config(['$routeProvider' ,
 function($routeProvider) {
   $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'adminCtrl'
  })
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'adminCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

adminPanel.controller('loginCtrl', function($scope, $mdSidenav) {i
  $scope.logo = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/p160x160/1966841_10205564593336771_1131066954403916535_n.jpg?oh=e110c4b435cec1f8d2d99b8fad29f516&oe=55336522&__gda__=1428491118_1bfc83d6ec955ffa3107d05ea7629090";
});

adminPanel.controller('adminCtrl', function($scope, $mdSidenav, $mdDialog) {
  $scope.title = 'Admin Panel';

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
        .then(function(){
      $log.debug("toggle left is done");
    });
  };

  // Show dialog
  $scope.showDialog = function(ev) {
    window.console.log('in func');
    $mdDialog.show({
     // controller: DialogController,
      templateUrl: 'dialog.tmpl.html',
      targetEvent: ev
    });
  };
});

adminPanel.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
        .then(function(){
      $log.debug("close LEFT is done");
        });
  };

  // Icons at http://getbootstrap.com/components/
  $scope.menuItems = [{
    name : 'Home',
    icon: 'glyphicon-home',
    url: '#'
  }, {
    name : 'Settings',
    icon: 'glyphicon-wrench',
    url: '#apps'
  }, {
    name : 'LogOut',
    icon: 'glyphicon-off',
    url: '#'
  }];
});

/**
adminPanel.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl : 'home.html',
      controller: 'adminCtrl'
  })
  .when('/apps', {
      templateUrl : 'apps.html',
      controller: 'adminCtrl'
  })
  .otherwise({
    redirectTo: '/'                 
  });
}]);
*/

// Timer and values for dashboard grid.
setTimeout(function(){
  document.getElementById('box1').innerHTML = 25;
}, 1000);

setTimeout(function(){
  document.getElementById('box2').innerHTML = 456;
}, 1000);

setTimeout(function(){
  document.getElementById('box3').innerHTML = 56;
}, 1000);
