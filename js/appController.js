var adminPanel = angular.module('adminPanel', ['ngMaterial'])

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
