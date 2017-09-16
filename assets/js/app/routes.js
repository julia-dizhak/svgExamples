angular.module('svgIndex').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/examples_codeschool.html',
      controller: 'svgCodeschoolExamplesController'
    })

    .when('/test', {
      templateUrl: 'templates/end.html'
      // templateUrl: 'templates/end.html',
      // controller: 'UsersIndexController'
    })

    .otherwise({redirectTo: '/'});
}]);
