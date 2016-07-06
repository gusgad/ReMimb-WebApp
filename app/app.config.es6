app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    
      $routeProvider.
        when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'mainController'
        }).
        when('/favorites', {
          templateUrl: 'app/views/favorites.html',
          controller: 'favoritesController'
        }).
        otherwise('/');
    }
  ]);