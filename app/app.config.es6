app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    
      $routeProvider.
        when('/', {
          templateUrl: 'app/views/login.html',
          controller: 'loginController'
        }).
        when('/main', {
          templateUrl: 'app/views/main.html',
          controller: 'loginController'
        }).
        when('/favorites', {
          template: '<p>favs</p>'
        }).
        otherwise('/main');
    }
  ]);