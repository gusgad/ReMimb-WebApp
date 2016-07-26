app.controller('favoritesController', ['$scope', '$interval', 'cardInfo', '$location', '$firebaseArray', function ($scope, $interval, cardInfo, $location, $firebaseArray) {
    
   /* Assigning returned data from service */
   $scope.items = $firebaseArray(cardInfo)
   
   /* Refreshing the 'Add' icon on route change  || PERFORMANCE BOTTLENECK */
   $interval(function() {
    $scope.location = $location.path()
   }, 800)
   


}]);