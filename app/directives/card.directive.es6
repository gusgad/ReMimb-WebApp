app.directive('cardDirective', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'app/views/card.html'
    }
}])