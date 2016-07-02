app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    
      $routeProvider.
        when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'mainController'
        }).
        when('/favorites', {
          template: '<p>favs</p>'
        }).
        otherwise('/main');
    }
  ]);