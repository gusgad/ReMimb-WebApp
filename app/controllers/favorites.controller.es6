app.controller('favoritesController', ['$scope', '$interval', 'cardInfo', '$location', '$firebaseArray', function ($scope, $interval, cardInfo, $location, $firebaseArray) {
    
  /* DB operations */
    

   $scope.items = $firebaseArray(cardInfo)
   
   $interval(function() {
    $scope.location = $location.path()
   }, 800)
   


}]);