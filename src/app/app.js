angular.module( 'app', [
  'templates-app',
  'templates-common',
  'app.home',
  'app.about',
  'ui.router',
  'ui.layout',
  'd3'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
  $stateProvider.state( 'main', {
    views: {
      "main": {
        controller: 'MainCtrl',
        templateUrl: 'main.tpl.html'
      },
      "navigation": {
        controller: 'NavigationCtrl',
        templateUrl: 'navigation.tpl.html'
      },
      "footer": {
        controller: 'FooterCtrl',
        templateUrl: 'footer.tpl.html'
      }        
    }
  });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

.controller( 'MainCtrl', function AppCtrl ( $scope ) {

})

.controller( 'NavigationCtrl', function AppCtrl ( $scope ) {

})

.controller( 'FooterCtrl', function FooterCtrl ( $scope ) {

})

;

