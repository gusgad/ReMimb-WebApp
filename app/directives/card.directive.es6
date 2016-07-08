app.directive('cardDirective', ['$timeout', function($timeout) {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'app/views/card.html',
        link: function(scope, element, attrs) {
            console.log(element[0][1])
        }
    }
}])