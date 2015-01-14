var adminPanel = angular.module('adminPanel',['ngMaterial','ngRoute'])

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

adminPanel.controller('adminCtrl', function($scope, $mdSidenav) {
  $scope.title = 'Admin Panel';


  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
        .then(function(){
      $log.debug("toggle left is done");
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
    icon: 'glyphicon-home'
  }, {
    name : 'Settings',
    icon: 'glyphicon-wrench'
  }, {
    name : 'LogOut',
    icon: 'glyphicon-off'
  }];
})
